// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import { ListCapabilitiesQuerySchema, CreateAudioCapabilityBodySchema, CreateAudioCapabilityResponseSchema, CreateImageCapabilityBodySchema, CreateImageCapabilityResponseSchema, CreateVideoCapabilityBodySchema, CreateVideoCapabilityResponseSchema, GetAudioCapabiltiesResponseSchema, GetImageCapabiltiesResponseSchema, GetVideoCapabiltiesResponseSchema, } from '@dsbunny/capdb-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
import { definePingContract } from './ping.js';
import { CapDbPingResponseSchema } from '@dsbunny/capdb-schema';
const error = (code, status, message) => ({ code, status, message });
function defineCapDbContract(options) {
    const byName = {
        CapDbBadRequestError: options.request,
        CapDbBadGatewayError: options.response,
        ZodError: options.validation,
        ...options.byName,
    };
    const errorMap = Object.fromEntries([options.defaultError, ...Object.values(byName)]
        .map(({ code, status, message }) => [code, { status, message, data: ErrorResponseSchema }]));
    const routeErrors = {
        default: options.defaultError.code,
        byName: Object.fromEntries(Object.entries(byName).map(([name, definition]) => [name, definition.code])),
        response: { default: options.defaultError.code, byName: { CapDbBadGatewayError: options.response.code } },
    };
    const success = z.object({
        status: z.literal(options.method === 'POST' ? 201 : 200).meta({
            description: options.method === 'POST' ? 'Created' : 'OK',
        }),
        body: options.body,
    });
    return oc.$meta({ routeErrors }).route({
        method: options.method, path: options.path, operationId: options.operationId,
        successStatus: options.method === 'POST' ? 201 : 200,
        inputStructure: 'detailed', outputStructure: 'detailed',
        spec: current => ({ ...current, responses: {
                ...current.responses, '401': { description: 'Unauthorized' },
            } }),
    }).input(options.input).output(options.method === 'GET'
        ? z.union([success, z.object({ status: z.literal(304) })]) : success).errors(errorMap);
}
const headers = z.object({
    'if-match': z.string().optional(), 'if-none-match': z.string().optional(),
    'if-modified-since': z.string().optional(), 'if-unmodified-since': z.string().optional(),
}).optional();
export const capDbContracts = {
    ping: definePingContract(CapDbPingResponseSchema, 'E2037'),
    createVideo: defineCapDbContract({
        method: 'POST', path: '/api/v1/capabilities/video', operationId: 'createVideoCapability',
        input: z.object({ body: CreateVideoCapabilityBodySchema }), body: CreateVideoCapabilityResponseSchema,
        request: error('E2001', 400, 'Invalid request body'), response: error('E2025', 502, 'Invalid response while registering video capabilities'),
        defaultError: error('E2002', 500, 'An unexpected error occurred while registering the capability.'),
        validation: error('E2026', 500, 'Internal server error while registering video capabilities'),
    }),
    createAudio: defineCapDbContract({
        method: 'POST', path: '/api/v1/capabilities/audio', operationId: 'createAudioCapability',
        input: z.object({ body: CreateAudioCapabilityBodySchema }), body: CreateAudioCapabilityResponseSchema,
        request: error('E2003', 400, 'Invalid request body'), response: error('E2027', 502, 'Invalid response while registering audio capabilities'),
        defaultError: error('E2004', 500, 'An unexpected error occurred while registering the capability.'),
        validation: error('E2028', 500, 'Internal server error while registering audio capabilities'),
    }),
    createImage: defineCapDbContract({
        method: 'POST', path: '/api/v1/capabilities/image', operationId: 'createImageCapability',
        input: z.object({ body: CreateImageCapabilityBodySchema }), body: CreateImageCapabilityResponseSchema,
        request: error('E2005', 400, 'Invalid request body'), response: error('E2029', 502, 'Invalid response while registering image capabilities'),
        defaultError: error('E2006', 500, 'An unexpected error occurred while registering the capability.'),
        validation: error('E2030', 500, 'Internal server error while registering image capabilities'),
    }),
    listVideo: defineCapDbContract({
        method: 'GET', path: '/api/v1/capabilities/video', operationId: 'listVideoCapabilities',
        input: z.object({ headers, query: ListCapabilitiesQuerySchema }), body: GetVideoCapabiltiesResponseSchema,
        request: error('E2007', 400, 'Bad request'), response: error('E2031', 502, 'Invalid response while listing video capabilities'),
        defaultError: error('E2012', 500, 'An unexpected error occurred while fetching the capability.'),
        validation: error('E2032', 500, 'Internal server error while listing video capabilities'),
        byName: {
            CapDbForbiddenError: error('E2008', 403, 'Capability forbidden'), CapDbGoneError: error('E2010', 410, 'Capability gone'),
            CapDbNotFoundError: error('E2009', 404, 'Capability not found'), CapDbPreconditionFailedError: error('E2011', 412, 'Precondition failed'),
        },
    }),
    listAudio: defineCapDbContract({
        method: 'GET', path: '/api/v1/capabilities/audio', operationId: 'listAudioCapabilities',
        input: z.object({ headers, query: ListCapabilitiesQuerySchema }), body: GetAudioCapabiltiesResponseSchema,
        request: error('E2013', 400, 'Bad request'), response: error('E2033', 502, 'Invalid response while listing audio capabilities'),
        defaultError: error('E2018', 500, 'An unexpected error occurred while fetching the capability.'),
        validation: error('E2034', 500, 'Internal server error while listing audio capabilities'),
        byName: {
            CapDbForbiddenError: error('E2014', 403, 'Capability forbidden'), CapDbGoneError: error('E2016', 410, 'Capability gone'),
            CapDbNotFoundError: error('E2015', 404, 'Capability not found'), CapDbPreconditionFailedError: error('E2017', 412, 'Precondition failed'),
        },
    }),
    listImage: defineCapDbContract({
        method: 'GET', path: '/api/v1/capabilities/image', operationId: 'listImageCapabilities',
        input: z.object({ headers, query: ListCapabilitiesQuerySchema }), body: GetImageCapabiltiesResponseSchema,
        request: error('E2019', 400, 'Bad request'), response: error('E2035', 502, 'Invalid response while listing image capabilities'),
        defaultError: error('E2024', 500, 'An unexpected error occurred while fetching the capability.'),
        validation: error('E2036', 500, 'Internal server error while listing image capabilities'),
        byName: {
            CapDbForbiddenError: error('E2020', 403, 'Capability forbidden'), CapDbGoneError: error('E2022', 410, 'Capability gone'),
            CapDbNotFoundError: error('E2021', 404, 'Capability not found'), CapDbPreconditionFailedError: error('E2023', 412, 'Precondition failed'),
        },
    }),
};
//# sourceMappingURL=capdb.js.map