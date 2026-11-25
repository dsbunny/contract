// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { oc } from '@orpc/contract';
import * as z from 'zod';
import {
	CreateUUIDsQuerySchema, CreatePublishBodySchema, CreatePublishResponseSchema,
	CreateUUIDsResponseSchema, GetPublishStatusQuerySchema, GetPublishStatusResponseSchema,
	GetRecipeResponseSchema, PublisherRecipeIdParamsSchema,
} from '@dsbunny/publisher-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';

type Definition = { code: string; status: number; message: string };
const error = (code: string, status: number, message: string): Definition => ({ code, status, message });

function definePublisherContract<TInput extends z.ZodType, TBody extends z.ZodType>(options: {
	method: 'GET' | 'POST';
	path: `/${string}`;
	operationId: string;
	input: TInput;
	body: TBody;
	request?: Definition;
	response: Definition;
	defaultError: Definition;
	validation: Definition;
	byName?: Record<string, Definition>;
	tenant?: boolean;
}) {
	const byName: Record<string, Definition> = {
		PublisherBadGatewayError: options.response,
		ZodError: options.validation,
		...options.byName,
	};
	if(options.request) byName.PublisherBadRequestError = options.request;
	const errorMap = Object.fromEntries([options.defaultError, ...Object.values(byName)]
		.map(({ code, status, message }) => [code, { status, message, data: ErrorResponseSchema }]));
	const routeErrors = {
		default: options.defaultError.code,
		byName: Object.fromEntries(Object.entries(byName).map(([name, definition]) => [name, definition.code])),
		response: { default: options.defaultError.code, byName: { PublisherBadGatewayError: options.response.code } },
	};
	const status = options.method === 'POST' ? 202 : 200;
	return oc.$meta({ routeErrors }).route({
		method: options.method, path: options.path, operationId: options.operationId,
		successStatus: status, inputStructure: 'detailed', outputStructure: 'detailed',
		spec: current => ({
			...current,
			security: [{ OAuth2ClientCredentials: [options.method === 'GET' ? 'api:read' : 'api:write'] }],
			description: [
				...(options.tenant ? ['Requires a tenant:<tenant-id> scope.'] : []),
				...(options.operationId === 'getJobs' ? ['Job IDs may be repeated or comma-separated.'] : []),
			].join(' ') || undefined,
			responses: {
				...current.responses,
				'401': { description: 'Unauthorized' },
				'403': { description: 'Forbidden' },
			},
		}),
	}).input(options.input).output(z.object({
		status: z.literal(status).meta({ description: status === 202 ? 'Accepted' : 'OK' }),
		body: options.body,
	})).errors(errorMap);
}

export const publisherContracts = {
	publish: definePublisherContract({
		method: 'POST', path: '/api/v1/publish', operationId: 'publish',
		input: z.object({ body: CreatePublishBodySchema }), body: CreatePublishResponseSchema, tenant: true,
		request: error('E2101', 400, 'Bad request while creating a publish job'),
		response: error('E2111', 502, 'Invalid response while creating a publish job'),
		defaultError: error('E2103', 500, 'Unexpected error while creating a publish job'),
		validation: error('E2115', 500, 'Internal validation error while creating a publish job'),
	}),
	uuids: definePublisherContract({
		method: 'GET', path: '/api/v1/uuids', operationId: 'createUUIDs',
		input: z.object({ query: CreateUUIDsQuerySchema }), body: CreateUUIDsResponseSchema,
		response: error('E2107', 502, 'Invalid response while generating UUIDs'),
		defaultError: error('E2108', 500, 'Unexpected error while generating UUIDs'),
		validation: error('E2109', 500, 'Internal validation error while generating UUIDs'),
	}),
	job: definePublisherContract({
		method: 'GET', path: '/api/v1/job', operationId: 'getJobs',
		input: z.object({ query: GetPublishStatusQuerySchema }), body: GetPublishStatusResponseSchema.options[1], tenant: true,
		request: error('E2002', 400, 'Bad request while querying publisher jobs'),
		response: error('E2110', 502, 'Invalid response while querying publisher jobs'),
		defaultError: error('E2004', 500, 'Unexpected error while querying publisher jobs'),
		validation: error('E2114', 500, 'Internal validation error while querying publisher jobs'),
	}),
	recipe: definePublisherContract({
		method: 'GET', path: '/api/v1/recipes/{recipeId}', operationId: 'getRecipe',
		input: z.object({ params: PublisherRecipeIdParamsSchema }), body: GetRecipeResponseSchema, tenant: true,
		request: error('E2102', 400, 'Invalid recipe ID'),
		response: error('E2112', 502, 'Invalid response while retrieving the recipe template'),
		defaultError: error('E2105', 500, 'An error occurred while retrieving the recipe'),
		validation: error('E2113', 500, 'Internal validation error while retrieving the recipe template'),
		byName: { PublisherNotFoundError: error('E2104', 404, 'Recipe not found') },
	}),
};
