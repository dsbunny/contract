// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
import { definePingContract } from './ping.js';
import { CanvasIdParamsSchema, CreateCanvasBodySchema, CreateCanvasResponseSchema, CanvasDbPingResponseSchema, GetCanvasAvailabilityQuerySchema, GetCanvasSuggestionsQuerySchema, GetCanvasAvailabilityResponseSchema, GetCanvasResponseSchema, GetCanvasSuggestionsResponseSchema, ListCanvasesQuerySchema, ListCanvasesResponseSchema, PatchCanvasBodySchema, PatchCanvasResponseSchema, } from '@dsbunny/canvasdb-schema';
const error = (code, status, message) => ({ code, status, message });
const validationResponseError = error('E2093', 500, 'Internal server error while validating response');
const suggestCode = 'E2080';
const availabilityRequest = error('E2030', 400, 'Invalid canvas name');
const headers = z.object({
    'if-match': z.string().optional(),
    'if-none-match': z.string().optional(),
    'if-modified-since': z.string().optional(),
    'if-unmodified-since': z.string().optional(),
}).optional();
function output(body, status, conditional = false) {
    const success = status === 204
        ? z.object({ status: z.literal(204).meta({ description: 'No content' }) })
        : z.object({ status: z.literal(status).meta({ description: status === 201 ? 'Created' : 'OK' }), body });
    return conditional ? z.union([success, z.object({ status: z.literal(304) })]) : success;
}
function defineCanvasContract(options) {
    const errorMap = {};
    function add(definition) {
        for (const [key, existing] of Object.entries(errorMap)) {
            if (existing.code === definition.code && existing.status === definition.status && existing.message === definition.message)
                return key;
        }
        let key = definition.code;
        if (Object.hasOwn(errorMap, key))
            key = `${key}_${definition.status}`;
        if (Object.hasOwn(errorMap, key))
            throw new Error(`Duplicate canvas contract error ${key}`);
        errorMap[key] = { ...definition, data: ErrorResponseSchema };
        return key;
    }
    const requestCode = add(options.requestError);
    const defaultCode = add(options.defaultError);
    const validationResponseCode = add(validationResponseError);
    const byName = {};
    for (const [name, definition] of Object.entries(options.byName))
        byName[name] = add(definition);
    if (options.handlerRequestError)
        byName.CanvasDbBadRequestError = requestCode;
    const validationResponseByName = {};
    if (options.validationBadGateway && byName.CanvasDbBadGatewayError) {
        validationResponseByName.CanvasDbBadGatewayError = byName.CanvasDbBadGatewayError;
    }
    const routeErrors = {
        default: defaultCode,
        byName,
        request: { default: requestCode, byName: { CanvasDbBadRequestError: requestCode } },
        response: {
            default: validationResponseCode,
            byName: validationResponseByName,
        },
    };
    const contract = oc.route({
        method: options.method,
        path: options.path,
        operationId: options.operationId,
        summary: options.summary,
        successStatus: options.status,
        inputStructure: 'detailed',
        outputStructure: 'detailed',
        spec: current => ({
            ...current,
            security: [{ OAuth2ClientCredentials: [...options.scopes] }],
            description: 'Requires a tenant:<tenant-id> scope.',
            parameters: current.parameters?.map(parameter => !('$ref' in parameter) && options.operationId === 'getCanvasAvailability' && parameter.name === 'name'
                ? { ...parameter, required: false }
                : parameter),
            responses: {
                ...current.responses,
                '401': { description: 'Unauthorized' },
                ...(!current.responses?.['403'] ? { '403': { description: 'Forbidden' } } : {}),
            },
        }),
    }).input(options.input).output(options.output).errors(errorMap).meta({ routeErrors });
    return contract;
}
export const canvasDbContracts = {
    ping: definePingContract(CanvasDbPingResponseSchema, 'E2094'),
    list: defineCanvasContract({
        method: 'GET', path: '/api/v1/canvases', operationId: 'listCanvases', summary: 'List canvases.',
        scopes: ['api:read'], status: 200, input: z.object({ headers, query: ListCanvasesQuerySchema }),
        output: output(ListCanvasesResponseSchema, 200, true),
        requestError: error('E2077', 400, 'Bad request while listing canvases'),
        defaultError: error('E2007', 500, 'An unexpected error occurred while fetching the canvases.'),
        handlerRequestError: true,
        byName: {
            CanvasDbBadGatewayError: error('E2088', 502, 'Bad gateway error while listing canvases'),
            CanvasDbPreconditionFailedError: error('E2015', 412, 'Precondition failed'),
            ZodError: error('E2086', 500, 'Internal server error while listing canvases'),
        },
    }),
    suggest: defineCanvasContract({
        method: 'GET', path: '/api/v3/canvases/suggest', operationId: 'suggestCanvases', summary: 'Get canvas suggestions.',
        scopes: ['api:read'], status: 200, input: z.object({ query: GetCanvasSuggestionsQuerySchema }),
        output: output(GetCanvasSuggestionsResponseSchema, 200),
        requestError: error(suggestCode, 400, 'Bad request while retrieving canvas suggestions'),
        defaultError: error(suggestCode, 500, 'An error occurred while retrieving canvas suggestions'),
        validationBadGateway: true,
        byName: {
            CanvasDbBadGatewayError: error('E2090', 502, 'Bad gateway error while retrieving suggestions'),
            CanvasDbForbiddenError: error('E2079', 403, 'Forbidden'),
        },
    }),
    availability: defineCanvasContract({
        method: 'GET', path: '/api/v1/canvases/availability', operationId: 'getCanvasAvailability', summary: 'Check canvas name availability.',
        scopes: ['api:read'], status: 200, input: z.object({ query: GetCanvasAvailabilityQuerySchema }),
        output: output(GetCanvasAvailabilityResponseSchema, 200),
        requestError: availabilityRequest,
        defaultError: error('E2031', 500, 'An unexpected error occurred while checking canvas name availability.'),
        validationBadGateway: true,
        byName: {
            ZodError: availabilityRequest,
            CanvasDbBadGatewayError: error('E2091', 502, 'Bad gateway error while checking canvas name availability'),
        },
    }),
    get: defineCanvasContract({
        method: 'GET', path: '/api/v1/canvases/{canvasId}', operationId: 'getCanvas', summary: 'Get a canvas.',
        scopes: ['api:read'], status: 200, input: z.object({ headers, params: CanvasIdParamsSchema }),
        output: output(GetCanvasResponseSchema, 200, true),
        requestError: error('E2078', 400, 'Bad request while fetching canvas'),
        defaultError: error('E2012', 500, 'An unexpected error occurred while fetching the canvas.'),
        handlerRequestError: true,
        byName: {
            CanvasDbBadGatewayError: error('E2089', 502, 'Bad gateway error while fetching canvas'),
            CanvasDbForbiddenError: error('E2016', 403, 'Canvas forbidden'),
            CanvasDbNotFoundError: error('E2017', 404, 'Canvas not found'),
            CanvasDbGoneError: error('E2010', 410, 'Canvas gone'),
            CanvasDbPreconditionFailedError: error('E2011', 412, 'Precondition failed'),
            ZodError: error('E2092', 500, 'Internal server error while fetching canvas'),
        },
    }),
    delete: defineCanvasContract({
        method: 'DELETE', path: '/api/v1/canvases/{canvasId}', operationId: 'deleteCanvas', summary: 'Delete a canvas.',
        scopes: ['api:write'], status: 204, input: z.object({ headers, params: CanvasIdParamsSchema }),
        output: output(z.void(), 204),
        requestError: error('E2027', 400, 'Bad request while deleting canvas'),
        defaultError: error('E2014', 500, 'An unexpected error occurred while deleting the canvas.'),
        handlerRequestError: true,
        byName: {
            CanvasDbBadGatewayError: error('E2087', 502, 'Bad gateway error while deleting canvas'),
            CanvasDbNotFoundError: error('E2013', 404, 'Canvas not found'),
            CanvasDbForbiddenError: error('E2024', 403, 'Canvas forbidden'),
            CanvasDbGoneError: error('E2025', 410, 'Canvas gone'),
            CanvasDbPreconditionFailedError: error('E2026', 412, 'Precondition failed'),
            ZodError: error('E2085', 500, 'Internal server error while deleting canvas'),
        },
    }),
    patch: defineCanvasContract({
        method: 'PATCH', path: '/api/v1/canvases/{canvasId}', operationId: 'patchCanvas', summary: 'Patch a canvas.',
        scopes: ['api:write'], status: 200, input: z.object({ headers, params: CanvasIdParamsSchema, body: PatchCanvasBodySchema }),
        output: output(PatchCanvasResponseSchema, 200),
        requestError: error('E2021', 400, 'Bad request while patching canvas'),
        defaultError: error('E2009', 500, 'An unexpected error occurred while updating the canvas.'),
        handlerRequestError: true,
        byName: {
            CanvasDbBadGatewayError: error('E2082', 502, 'Bad gateway error while patching canvas'),
            CanvasDbNotFoundError: error('E2008', 404, 'Canvas not found'),
            CanvasDbForbiddenError: error('E2022', 403, 'Canvas forbidden'),
            CanvasDbGoneError: error('E2023', 410, 'Canvas gone'),
            CanvasDbPreconditionFailedError: error('E2006', 412, 'Bad request or precondition error, context dependent'),
            ZodError: error('E2018', 500, 'Internal server error while patching canvas'),
        },
    }),
    create: defineCanvasContract({
        method: 'POST', path: '/api/v1/canvases', operationId: 'createCanvas', summary: 'Register a canvas.',
        scopes: ['api:write'], status: 201, input: z.object({ body: CreateCanvasBodySchema }),
        output: output(CreateCanvasResponseSchema, 201),
        requestError: error('E2001', 400, 'Invalid request body'),
        defaultError: error('E2002', 500, 'An unexpected error occurred while registering the canvas.'),
        handlerRequestError: true, validationBadGateway: true,
        byName: {
            CanvasDbBadGatewayError: error('E2083', 502, 'Bad gateway error while registering canvas'),
            CanvasDbNotFoundError: error('E2020', 404, 'Canvas not found'),
            ZodError: error('E2003', 500, 'Internal server error while registering canvas'),
        },
    }),
};
//# sourceMappingURL=canvasdb.js.map