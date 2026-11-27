// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { oc } from '@orpc/contract';
import * as z from 'zod';
import {
	ViewportAgentPingResponseSchema,
	ViewportIdParamsSchema,
	GetScreenshotResponseSchema,
} from '@dsbunny/viewport-agent-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
import { definePingContract } from './ping.js';

const errors = {
	badGateway: { code: 'E2022', status: 502, message: 'Bad gateway while fetching viewport screenshot' },
	badRequest: { code: 'E2023', status: 400, message: 'Bad request while fetching viewport screenshot' },
	forbidden: { code: 'E2017', status: 403, message: 'Viewport forbidden' },
	gone: { code: 'E2019', status: 410, message: 'Viewport gone' },
	notFound: { code: 'E2018', status: 404, message: 'Viewport not found' },
	precondition: { code: 'E2020', status: 412, message: 'Precondition failed' },
	validation: { code: 'E2024', status: 500, message: 'Internal validation error while fetching viewport screenshot' },
	unexpected: { code: 'E2021', status: 500, message: 'An unexpected error occurred while fetching the viewport agent.' },
};
const errorMap = Object.fromEntries(Object.values(errors).map(({ code, status, message }) =>
	[code, { status, message, data: ErrorResponseSchema }]));
const routeErrors = {
	default: errors.unexpected.code,
	byName: {
		ViewportBadGatewayError: errors.badGateway.code,
		ViewportBadRequestError: errors.badRequest.code,
		ViewportForbiddenError: errors.forbidden.code,
		ViewportGoneError: errors.gone.code,
		ViewportNotFoundError: errors.notFound.code,
		ViewportPreconditionFailedError: errors.precondition.code,
		ZodError: errors.validation.code,
	},
};

export const viewportAgentContracts = {
	ping: definePingContract(ViewportAgentPingResponseSchema, 'E2025'),
	screenshot: oc.$meta({ routeErrors }).route({
		method: 'GET', path: '/api/v1/viewports/{viewportId}/screenshot',
		operationId: 'getScreenshot', summary: 'Get a viewport screenshot.',
		inputStructure: 'detailed', outputStructure: 'detailed',
		spec: current => ({ ...current, responses: {
			...current.responses, '401': { description: 'Unauthorized' },
		} }),
	}).input(z.object({
		headers: z.object({
			'if-match': z.string().optional(),
			'if-none-match': z.string().optional(),
			'if-modified-since': z.string().optional(),
			'if-unmodified-since': z.string().optional(),
		}).optional(),
		params: ViewportIdParamsSchema,
	})).output(z.union([
		z.object({ status: z.literal(200), body: GetScreenshotResponseSchema }),
		z.object({ status: z.literal(304) }),
	])).errors(errorMap),
};
