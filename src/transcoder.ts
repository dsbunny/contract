// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { oc } from '@orpc/contract';
import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';

type Definition = { code: string; status: number; message: string };
export const transcoderError = (code: string, status: number, message: string): Definition => ({ code, status, message });

export function defineTranscoderContract<TInput extends z.ZodType, TBody extends z.ZodType>(options: {
	errorPrefix: 'TranscoderOne' | 'TranscoderThree';
	method: 'GET' | 'POST';
	path: `/${string}`;
	operationId: string;
	input: TInput;
	body: TBody;
	request: Definition;
	response: Definition;
	defaultError: Definition;
	validation: Definition;
	byName?: Record<string, Definition>;
}) {
	const byName = {
		[`${options.errorPrefix}BadRequestError`]: options.request,
		[`${options.errorPrefix}BadGatewayError`]: options.response,
		ZodError: options.validation,
		...options.byName,
	};
	const errorMap = Object.fromEntries([options.defaultError, ...Object.values(byName)]
		.map(({ code, status, message }) => [code, { status, message, data: ErrorResponseSchema }]));
	const routeErrors = {
		default: options.defaultError.code,
		byName: Object.fromEntries(Object.entries(byName).map(([name, definition]) => [name, definition.code])),
		response: { default: options.defaultError.code, byName: { [`${options.errorPrefix}BadGatewayError`]: options.response.code } },
	};
	const status = options.method === 'POST' ? 202 : 200;
	return oc.$meta({ routeErrors }).route({
		method: options.method, path: options.path, operationId: options.operationId,
		successStatus: status, inputStructure: 'detailed', outputStructure: 'detailed',
		spec: current => ({
			...current,
			security: [{ OpenIDConnect: [options.method === 'GET' ? 'api:read' : 'api:write'] }],
			description: options.method === 'GET' ? 'Job IDs may be repeated or comma-separated.' : undefined,
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
