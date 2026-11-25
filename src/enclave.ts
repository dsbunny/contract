// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { oc } from '@orpc/contract';
import * as z from 'zod';
import {
	EnclavePingResponseSchema,
	AddTokenBodySchema, AddTokenResponseSchema,
	RevokeTokenBodySchema, RevokeTokenResponseSchema,
} from '@dsbunny/enclave-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';

type Definition = { code: string; status: number; message: string };
const errors = {
	pingGateway: { code: 'E2010', status: 502, message: 'Invalid response while pinging the server' },
	pingDefault: { code: 'E2009', status: 500, message: 'An unexpected error occurred while pinging the server.' },
	addGateway: { code: 'E2011', status: 502, message: 'Invalid response while adding the token' },
	addRequest: { code: 'E2001', status: 400, message: 'Invalid request body' },
	addValidation: { code: 'E2012', status: 500, message: 'Internal validation error while adding the token' },
	addDefault: { code: 'E2002', status: 500, message: 'An unexpected error occurred while adding the token.' },
	revokeGateway: { code: 'E2013', status: 502, message: 'Invalid response while revoking the token' },
	revokeRequest: { code: 'E2003', status: 400, message: 'Invalid request body' },
	revokeForbidden: { code: 'E2004', status: 403, message: 'Token forbidden' },
	revokeGone: { code: 'E2006', status: 410, message: 'Token gone' },
	revokeNotFound: { code: 'E2005', status: 404, message: 'Token not found' },
	revokePrecondition: { code: 'E2007', status: 412, message: 'Precondition failed' },
	revokeValidation: { code: 'E2014', status: 500, message: 'Internal validation error while revoking the token' },
	revokeDefault: { code: 'E2008', status: 500, message: 'An unexpected error occurred while revoking the token.' },
} satisfies Record<string, Definition>;

function defineEnclaveContract<TInput extends z.ZodType, TBody extends z.ZodType>(options: {
	method: 'GET' | 'POST' | 'DELETE';
	path: `/${string}`;
	operationId: string;
	input: TInput;
	body: TBody;
	status: 200 | 201;
	defaultError: Definition;
	byName: Record<string, Definition>;
	authenticated?: boolean;
}) {
	const errorMap = Object.fromEntries([options.defaultError, ...Object.values(options.byName)]
		.map(({ code, status, message }) => [code, { status, message, data: ErrorResponseSchema }]));
	const routeErrors = {
		default: options.defaultError.code,
		byName: Object.fromEntries(Object.entries(options.byName).map(([name, error]) => [name, error.code])),
	};
	return oc.$meta({ routeErrors }).route({
		method: options.method, path: options.path, operationId: options.operationId,
		successStatus: options.status, inputStructure: 'detailed', outputStructure: 'detailed',
		spec: current => options.authenticated ? {
			...current,
			security: [{ OAuth2ClientCredentials: ['api:write'] }],
			description: 'Requires the api:write and tenant scopes.',
			responses: {
				...current.responses,
				'401': { description: 'Unauthorized' },
				...(!current.responses?.['403'] ? { '403': { description: 'Forbidden' } } : {}),
			},
		} : current,
	}).input(options.input).output(z.object({
		status: z.literal(options.status).meta({ description: options.status === 201 ? 'Created' : 'OK' }),
		body: options.body,
	})).errors(errorMap);
}

export const enclaveContracts = {
	ping: defineEnclaveContract({
		method: 'GET', path: '/api/v1/ping', operationId: 'ping',
		input: z.object({}), body: EnclavePingResponseSchema, status: 200,
		defaultError: errors.pingDefault, byName: { EnclaveBadGatewayError: errors.pingGateway },
	}),
	addToken: defineEnclaveContract({
		method: 'POST', path: '/api/v1/enclave/tokens', operationId: 'addToken',
		input: z.object({ body: AddTokenBodySchema }), body: AddTokenResponseSchema, status: 201,
		defaultError: errors.addDefault, authenticated: true,
		byName: { EnclaveBadGatewayError: errors.addGateway, EnclaveBadRequestError: errors.addRequest, ZodError: errors.addValidation },
	}),
	revokeToken: defineEnclaveContract({
		method: 'DELETE', path: '/api/v1/enclave/tokens', operationId: 'revokeToken',
		input: z.object({ body: RevokeTokenBodySchema }), body: RevokeTokenResponseSchema, status: 200,
		defaultError: errors.revokeDefault, authenticated: true,
		byName: {
			EnclaveBadGatewayError: errors.revokeGateway, EnclaveBadRequestError: errors.revokeRequest,
			EnclaveForbiddenError: errors.revokeForbidden, EnclaveGoneError: errors.revokeGone,
			EnclaveNotFoundError: errors.revokeNotFound, EnclavePreconditionFailedError: errors.revokePrecondition,
			ZodError: errors.revokeValidation,
		},
	}),
};
