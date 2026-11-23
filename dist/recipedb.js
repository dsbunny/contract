// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import { RecipeDbRecipeIdParamsSchema, PlaylistIdParamsSchema, RecipeIdQuerySchema, PlaylistIdQuerySchema, ListRecipeInputsQuerySchema, ListRecipesQuerySchema, GetPlaylistSuggestionsQuerySchema, GetPlaylistAvailabilityQuerySchema, ListPlaylistsQuerySchema, CreatePlaylistBodySchema, CreatePlaylistResponseSchema, CreateRecipeBodySchema, CreateRecipeResponseSchema, GetPlaylistAvailabilityResponseSchema, GetPlaylistResponseSchema, GetPlaylistSuggestionsResponseSchema, GetRecipeInputResponseSchema, GetRecipeLinkResponseSchema, GetRecipeResponseSchema, ListPlaylistsResponseSchema, ListRecipeInputsResponseSchema, ListRecipesResponseSchema, PatchPlaylistBodySchema, PatchPlaylistResponseSchema, QueryPlaylistByTemplateBodySchema, QueryPlaylistByTemplateResponseSchema, } from '@dsbunny/recipedb-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
const error = (code, status, message) => ({ code, status, message });
const headers = z.object({
    'if-match': z.string().optional(), 'if-none-match': z.string().optional(),
    'if-modified-since': z.string().optional(), 'if-unmodified-since': z.string().optional(),
}).optional();
const suggestDefault = error('E2080', 500, 'An error occurred while retrieving playlist suggestions.');
const availabilityRequest = error('E2043', 400, 'Invalid playlist name.');
function defineRecipeContract(options) {
    const errorMap = {};
    const add = (definition) => {
        let key = definition.code;
        const existing = errorMap[key];
        if (existing && (existing.status !== definition.status || existing.message !== definition.message))
            key += `_${definition.status}`;
        errorMap[key] = { ...definition, data: ErrorResponseSchema };
        return key;
    };
    const request = add(options.request);
    const response = add(options.response);
    const defaultError = add(options.defaultError);
    const byName = { RecipeDbBadGatewayError: response };
    if (options.handlerRequest !== false)
        byName.RecipeDbBadRequestError = request;
    for (const [name, definition] of Object.entries(options.byName ?? {}))
        byName[name] = add(definition);
    const routeErrors = {
        default: defaultError, byName,
        request: { default: defaultError, byName: { RecipeDbBadRequestError: request } },
        response: { default: defaultError, byName: { RecipeDbBadGatewayError: response } },
    };
    const status = options.status ?? 200;
    const success = status === 204 ? z.object({ status: z.literal(204) })
        : z.object({ status: z.literal(status), body: options.body });
    const output = options.conditional ? z.union([success, z.object({ status: z.literal(304) })]) : success;
    return oc.$meta({ routeErrors }).route({
        method: options.method, path: options.path, operationId: options.operationId,
        successStatus: status, inputStructure: 'detailed', outputStructure: 'detailed',
        spec: current => ({
            ...current,
            description: 'Requires a tenant:<tenant-id> scope. Array query parameters accept repeated or comma-separated values.',
            security: [{ OpenIDConnect: [options.scope ?? (options.method === 'GET' ? 'api:read' : 'api:write')] }],
            responses: { ...current.responses, '401': { description: 'Unauthorized' },
                ...(current.responses?.['403'] ? {} : { '403': { description: 'Forbidden' } }) },
        }),
    }).input(options.input).output(output).errors(errorMap);
}
export const recipeDbContracts = {
    getRecipe: defineRecipeContract({
        method: 'GET', path: '/api/v1/recipes/{recipe_id}', operationId: 'getRecipe',
        input: z.object({ headers, params: RecipeDbRecipeIdParamsSchema, query: RecipeIdQuerySchema }), body: GetRecipeResponseSchema, conditional: true,
        request: error('E2015', 400, 'Bad request while fetching recipe.'),
        response: error('E2082', 502, 'Bad gateway error while fetching recipe.'),
        defaultError: error('E2012', 500, 'An unexpected error occurred while fetching recipe.'),
        byName: { RecipeDbNotFoundError: error('E2017', 404, 'Recipe not found.'), RecipeDbPreconditionFailedError: error('E2011', 412, 'Precondition failed while fetching recipe.'), ZodError: error('E2096', 500, 'Internal server error while fetching recipe.') },
    }),
    getRecipeLink: defineRecipeContract({
        method: 'GET', path: '/api/v1/recipes/{recipe_id}/link', operationId: 'getRecipeLink',
        input: z.object({ headers, params: RecipeDbRecipeIdParamsSchema, query: RecipeIdQuerySchema }), body: GetRecipeLinkResponseSchema, conditional: true,
        request: error('E2020', 400, 'Invalid recipe ID while fetching recipe link.'),
        response: error('E2083', 502, 'Bad gateway error while fetching recipe link.'),
        defaultError: error('E2025', 500, 'An unexpected error occurred while fetching the recipe link.'),
        byName: { RecipeDbNotFoundError: error('E2022', 404, 'Recipe link not found.'), RecipeDbPreconditionFailedError: error('E2024', 412, 'Precondition failed while fetching recipe link.'), ZodError: error('E2097', 500, 'Internal server error while fetching recipe link.') },
    }),
    getRecipeInput: defineRecipeContract({
        method: 'GET', path: '/api/v1/recipes/{recipe_id}/input', operationId: 'getRecipeInput',
        input: z.object({ headers, params: RecipeDbRecipeIdParamsSchema, query: RecipeIdQuerySchema }), body: GetRecipeInputResponseSchema, conditional: true,
        request: error('E2037', 400, 'Invalid recipe ID while fetching recipe input.'),
        response: error('E2084', 502, 'Bad gateway error while fetching recipe input.'),
        defaultError: error('E2040', 500, 'An unexpected error occurred while fetching recipe input.'),
        byName: { RecipeDbNotFoundError: error('E2038', 404, 'Recipe input not found.'), RecipeDbPreconditionFailedError: error('E2039', 412, 'Precondition failed while fetching recipe input.'), ZodError: error('E2098', 500, 'Internal server error while fetching recipe input.') },
    }),
    listInputs: defineRecipeContract({
        method: 'GET', path: '/api/v1/recipe-inputs', operationId: 'listRecipeInputs',
        input: z.object({ headers, query: ListRecipeInputsQuerySchema }), body: ListRecipeInputsResponseSchema, conditional: true,
        request: error('E2031', 400, 'Invalid recipe input query.'),
        response: error('E2085', 502, 'Bad gateway error while listing recipe inputs.'),
        defaultError: error('E2027', 500, 'An unexpected error occurred while listing recipe inputs.'),
        byName: { RecipeDbPreconditionFailedError: error('E2026', 412, 'Precondition failed while querying recipe inputs.'), ZodError: error('E2099', 500, 'Internal server error while listing recipe inputs.') },
    }),
    listRecipes: defineRecipeContract({
        method: 'GET', path: '/api/v1/recipes', operationId: 'listRecipes',
        input: z.object({ headers, query: ListRecipesQuerySchema }), body: ListRecipesResponseSchema, conditional: true,
        request: error('E2041', 400, 'Invalid recipe output query.'),
        response: error('E2086', 502, 'Bad gateway error while listing recipes.'),
        defaultError: error('E2029', 500, 'An unexpected error occurred while listing recipes.'),
        byName: { RecipeDbPreconditionFailedError: error('E2028', 412, 'Precondition failed while querying recipe outputs.'), ZodError: error('E2100', 500, 'Internal server error while listing recipes.') },
    }),
    createRecipe: defineRecipeContract({
        method: 'POST', path: '/api/v1/recipes', operationId: 'createRecipe', status: 201,
        input: z.object({ body: CreateRecipeBodySchema }), body: CreateRecipeResponseSchema,
        request: error('E2032', 400, 'Invalid recipe input or output data.'),
        response: error('E2087', 502, 'Bad gateway error while creating recipes.'),
        defaultError: error('E2002', 500, 'An error occurred while creating recipes.'),
        byName: { RecipeDbConflictError: error('E2030', 409, 'Recipe data conflicts with an existing publish ID.'), ZodError: error('E2001', 400, 'Invalid recipe input or output data.') },
    }),
    suggestPlaylist: defineRecipeContract({
        method: 'GET', path: '/api/v3/playlists/suggest', operationId: 'suggestPlaylist',
        input: z.object({ query: GetPlaylistSuggestionsQuerySchema }), body: GetPlaylistSuggestionsResponseSchema, handlerRequest: false,
        request: suggestDefault,
        response: error('E2088', 502, 'Bad gateway error while retrieving playlist suggestions.'),
        defaultError: suggestDefault,
        byName: { RecipeDbForbiddenError: error('E2079', 403, 'Forbidden while retrieving playlist suggestions.'), ZodError: error('E2101', 500, 'Internal server error while retrieving playlist suggestions.') },
    }),
    playlistAvailability: defineRecipeContract({
        method: 'GET', path: '/api/v1/playlists/availability', operationId: 'playlistAvailability',
        input: z.object({ query: GetPlaylistAvailabilityQuerySchema }), body: GetPlaylistAvailabilityResponseSchema, handlerRequest: false,
        request: availabilityRequest,
        response: error('E2089', 502, 'Bad gateway error while checking playlist name availability.'),
        defaultError: error('E2044', 500, 'An unexpected error occurred while checking playlist name availability.'),
        byName: { ZodError: availabilityRequest },
    }),
    getPlaylist: defineRecipeContract({
        method: 'GET', path: '/api/v1/playlists/{playlist_id}', operationId: 'getPlaylist',
        input: z.object({ headers, params: PlaylistIdParamsSchema, query: PlaylistIdQuerySchema }), body: GetPlaylistResponseSchema, conditional: true,
        request: error('E2045', 400, 'Invalid playlist identifier.'),
        response: error('E2090', 502, 'Bad gateway error while fetching playlist.'),
        defaultError: error('E2048', 500, 'An unexpected error occurred while fetching the playlist.'),
        byName: { RecipeDbNotFoundError: error('E2046', 404, 'Playlist not found.'), RecipeDbPreconditionFailedError: error('E2047', 412, 'Precondition failed while fetching playlist.'), ZodError: error('E2102', 500, 'Internal server error while fetching playlist.') },
    }),
    patchPlaylist: defineRecipeContract({
        method: 'PATCH', path: '/api/v1/playlists/{playlist_id}', operationId: 'patchPlaylist',
        input: z.object({ headers, params: PlaylistIdParamsSchema, query: PlaylistIdQuerySchema, body: PatchPlaylistBodySchema }), body: PatchPlaylistResponseSchema,
        request: error('E2049', 400, 'Invalid playlist patch request.'),
        response: error('E2091', 502, 'Bad gateway error while updating playlist.'),
        defaultError: error('E2052', 500, 'An unexpected error occurred while updating the playlist.'),
        byName: { RecipeDbNotFoundError: error('E2050', 404, 'Playlist not found.'), RecipeDbPreconditionFailedError: error('E2051', 412, 'Precondition failed while updating playlist.'), ZodError: error('E2042', 400, 'Invalid playlist patch data.') },
    }),
    deletePlaylist: defineRecipeContract({
        method: 'DELETE', path: '/api/v1/playlists/{playlist_id}', operationId: 'deletePlaylist', status: 204,
        input: z.object({ headers, params: PlaylistIdParamsSchema, query: PlaylistIdQuerySchema }), body: z.void(),
        request: error('E2053', 400, 'Invalid playlist identifier.'),
        response: error('E2092', 502, 'Bad gateway error while deleting playlist.'),
        defaultError: error('E2056', 500, 'An unexpected error occurred while deleting the playlist.'),
        byName: { RecipeDbNotFoundError: error('E2054', 404, 'Playlist not found.'), RecipeDbPreconditionFailedError: error('E2055', 412, 'Precondition failed while deleting playlist.'), ZodError: error('E2103', 500, 'Internal server error while deleting playlist.') },
    }),
    listPlaylists: defineRecipeContract({
        method: 'GET', path: '/api/v1/playlists', operationId: 'listPlaylists',
        input: z.object({ headers, query: ListPlaylistsQuerySchema }), body: ListPlaylistsResponseSchema, conditional: true,
        request: error('E2057', 400, 'Invalid playlist query.'),
        response: error('E2093', 502, 'Bad gateway error while listing playlists.'),
        defaultError: error('E2059', 500, 'An unexpected error occurred while querying playlists.'),
        byName: { RecipeDbPreconditionFailedError: error('E2058', 412, 'Precondition failed while querying playlists.'), ZodError: error('E2104', 500, 'Internal server error while listing playlists.') },
    }),
    createPlaylist: defineRecipeContract({
        method: 'POST', path: '/api/v1/playlists', operationId: 'createPlaylist', status: 201,
        input: z.object({ body: CreatePlaylistBodySchema }), body: CreatePlaylistResponseSchema,
        request: error('E2061', 400, 'Invalid playlist input.'),
        response: error('E2094', 502, 'Bad gateway error while creating playlist.'),
        defaultError: error('E2063', 500, 'An error occurred while creating playlist.'),
        byName: { RecipeDbConflictError: error('E2062', 409, 'A playlist with this ID already exists.'), ZodError: error('E2060', 400, 'Invalid playlist data.') },
    }),
    queryPlaylistByTemplate: defineRecipeContract({
        method: 'POST', path: '/api/v1/playlists/query-by-template', operationId: 'queryPlaylistByTemplate', scope: 'api:read',
        input: z.object({ headers, body: QueryPlaylistByTemplateBodySchema }), body: QueryPlaylistByTemplateResponseSchema,
        request: error('E2070', 400, 'Invalid playlist query.'),
        response: error('E2095', 502, 'Bad gateway error while querying playlist by template.'),
        defaultError: error('E2072', 500, 'An unexpected error occurred while querying playlist by template.'),
        byName: { RecipeDbNotFoundError: error('E2081', 404, 'No playlist matches the template.'), RecipeDbPreconditionFailedError: error('E2071', 412, 'Precondition failed while querying playlist by template.'), ZodError: error('E2105', 500, 'Internal server error while querying playlist by template.') },
    }),
};
//# sourceMappingURL=recipedb.js.map