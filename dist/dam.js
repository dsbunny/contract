// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
import { damRouteErrors } from './dam-errors.js';
import { UploadIdParamsSchema, AssetIdParamsSchema, AssetVersionParamsSchema, AssetUploadParamsSchema, GetAssetQuerySchema, PollUploadQuerySchema, ListUploadsQuerySchema, ListAssetsQuerySchema, ListDeletedAssetsQuerySchema, GetAssetSuggestionsQuerySchema, GetAssetAvailabilityQuerySchema, GetAssetDownloadLocationQuerySchema, ListAssetPostersQuerySchema, GetAssetThumbnailQuerySchema, CreateAssetFromUploadQuerySchema, CreateAssetFromUploadVersionQuerySchema, CreateUploadBodySchema, CreateUploadResponseSchema, CreateUploadVersionBodySchema, CreateUploadVersionResponseSchema, CreateUploadUrlBodySchema, CreateUploadUrlResponseSchema, PatchUploadBodySchema, PatchUploadResponseSchema, UploadCompleteBodySchema, UploadCompleteResponseSchema, UploadPartBodySchema, UploadPartResponseSchema, UploadPollResponseSchema, CreateAssetFromUploadBodySchema, CreateAssetFromUploadResponseSchema, CreateAssetFromUploadVersionBodySchema, CreateAssetFromUploadVersionResponseSchema, GetAssetPosterResponseSchema, GetAssetResponseSchema, GetAssetSuggestionsResponseSchema, GetAssetAvailabilityResponseSchema, GetAssetThumbnailResponseSchema, ListAssetPostersResponseSchema, ListAssetsResponseSchema, GetAssetDownloadLocationResponseSchema, RecoverAssetResponseSchema, RecoverAssetBodySchema, PatchAssetResponseSchema, PatchAssetBodySchema, RecreateAssetMetadataBodySchema, RecreateAssetMetadataResponseSchema, RecreateAssetAnimatedPosterBodySchema, RecreateAssetAnimatedPosterResponseSchema, RecreateAssetPosterSeriesBodySchema, RecreateAssetPosterSeriesResponseSchema, RecreateAssetTileSeriesBodySchema, RecreateAssetTileSeriesResponseSchema, RecreateAssetPrevueBodySchema, RecreateAssetPrevueResponseSchema, RecreateAssetPosterBodySchema, RecreateAssetPosterResponseSchema, GetUploadResponseSchema, ListUploadsResponseSchema, } from '@dsbunny/dam-schema';
const headers = z.object({
    'if-match': z.string().optional(), 'if-none-match': z.string().optional(),
    'if-modified-since': z.string().optional(), 'if-unmodified-since': z.string().optional(),
}).optional();
const statuses = {
    uploadInit: 201, uploadVersionInit: 201, uploadUrl: 201, registerPart: 202,
    completeUpload: 201, saveAsset: 201, saveAssetVersion: 201,
    deleteAsset: 204, deleteAssetVersion: 204,
    recreateMetadata: 202, recreatePoster: 202, recreateAnimatedPoster: 202,
    recreatePosterSeries: 202, recreateTileSeries: 202, recreatePrevue: 202,
};
function defineContract(options) {
    const mappings = damRouteErrors[options.operationId];
    const definitions = [mappings.default, ...Object.values(mappings.request),
        ...Object.values(mappings.response), ...Object.values(mappings.byName)];
    const errorMap = Object.fromEntries(definitions.map(definition => [
        definition.code, { ...definition, data: ErrorResponseSchema },
    ]));
    const toCodes = (map) => Object.fromEntries(Object.entries(map).map(([name, definition]) => [name, definition.code]));
    const routeErrors = {
        default: mappings.default.code, byName: toCodes(mappings.byName),
        request: { default: mappings.default.code, byName: toCodes(mappings.request) },
        response: { default: mappings.default.code, byName: toCodes(mappings.response) },
    };
    const status = statuses[options.operationId] ?? 200;
    const success = status === 204 ? z.object({ status: z.literal(204) })
        : z.object({ status: z.literal(status), body: options.response });
    const output = options.allowNotModified ? z.union([success, z.object({ status: z.literal(304) })]) : success;
    return oc.$meta({ routeErrors }).route({
        method: options.method, path: options.path, operationId: options.operationId, successStatus: status,
        inputStructure: 'detailed', outputStructure: 'detailed',
        spec: current => ({
            ...current,
            description: 'Requires a tenant:<tenant-id> scope. Array query parameters accept repeated or comma-separated values.',
            security: [{ OAuth2ClientCredentials: [options.method === 'GET' ? 'api:read' : 'api:write'] }],
            responses: { ...current.responses, '401': { description: 'Unauthorized' },
                ...(current.responses?.['403'] ? {} : { '403': { description: 'Forbidden' } }) },
        }),
    }).input(options.request).output(output).errors(errorMap);
}
const getAssetRequest = z.object({
    headers,
    params: AssetIdParamsSchema,
    query: GetAssetQuerySchema,
});
const getAssetContract = defineContract({
    operationId: 'getAsset', method: 'GET', path: '/api/v1/assets/{assetId}',
    request: getAssetRequest,
    response: GetAssetResponseSchema, allowNotModified: true,
});
const recoverAssetRequest = z.object({ headers, params: AssetIdParamsSchema, body: RecoverAssetBodySchema });
const recoverAssetContract = defineContract({
    operationId: 'recoverAsset', method: 'POST', path: '/api/v1/assets/{assetId}/recover',
    request: recoverAssetRequest,
    response: RecoverAssetResponseSchema,
});
const patchAssetRequest = z.object({ headers, params: AssetIdParamsSchema, body: PatchAssetBodySchema });
const patchAssetContract = defineContract({
    operationId: 'patchAsset', method: 'PATCH', path: '/api/v1/assets/{assetId}',
    request: patchAssetRequest,
    response: PatchAssetResponseSchema,
});
const damUploadContracts = {
    uploadInit: defineContract({
        operationId: 'uploadInit', method: 'POST', path: '/api/v1/upload/init',
        request: z.object({ headers, body: CreateUploadBodySchema }),
        response: CreateUploadResponseSchema,
    }),
    uploadVersionInit: defineContract({
        operationId: 'uploadVersionInit', method: 'POST', path: '/api/v1/assets/{assetId}/upload/init',
        request: z.object({ headers, params: AssetIdParamsSchema, body: CreateUploadVersionBodySchema }),
        response: CreateUploadVersionResponseSchema,
    }),
    uploadUrl: defineContract({
        operationId: 'uploadUrl', method: 'POST', path: '/api/v1/upload/{uploadId}/generate-url',
        request: z.object({ headers, params: UploadIdParamsSchema, body: CreateUploadUrlBodySchema }),
        response: CreateUploadUrlResponseSchema,
    }),
    registerPart: defineContract({
        operationId: 'registerPart', method: 'POST', path: '/api/v1/upload/{uploadId}/register-part',
        request: z.object({ headers, params: UploadIdParamsSchema, body: UploadPartBodySchema }),
        response: UploadPartResponseSchema,
    }),
    patchUpload: defineContract({
        operationId: 'patchUpload', method: 'PATCH', path: '/api/v1/upload/{uploadId}',
        request: z.object({ headers, params: UploadIdParamsSchema, body: PatchUploadBodySchema }),
        response: PatchUploadResponseSchema,
    }),
    completeUpload: defineContract({
        operationId: 'completeUpload', method: 'POST', path: '/api/v1/upload/{uploadId}/complete',
        request: z.object({ headers, params: UploadIdParamsSchema, body: UploadCompleteBodySchema }),
        response: UploadCompleteResponseSchema,
    }),
    pollUpload: defineContract({
        operationId: 'pollUpload', method: 'GET', path: '/api/v1/upload/poll',
        request: z.object({ headers, query: PollUploadQuerySchema }),
        response: UploadPollResponseSchema, allowNotModified: true,
    }),
    upload: defineContract({
        operationId: 'upload', method: 'GET', path: '/api/v1/upload/{uploadId}',
        request: z.object({ headers, params: UploadIdParamsSchema }),
        response: GetUploadResponseSchema,
    }),
    listUploads: defineContract({
        operationId: 'listUploads', method: 'GET', path: '/api/v1/uploads',
        request: z.object({ headers, query: ListUploadsQuerySchema }),
        response: ListUploadsResponseSchema, allowNotModified: true,
    }),
};
const damAssetQueryContracts = {
    listAssets: defineContract({
        operationId: 'listAssets', method: 'GET', path: '/api/v1/assets',
        request: z.object({ headers, query: ListAssetsQuerySchema }),
        response: ListAssetsResponseSchema, allowNotModified: true,
    }),
    listDeletedAssets: defineContract({
        operationId: 'listDeletedAssets', method: 'GET', path: '/api/v1/assets/deleted',
        request: z.object({ headers, query: ListDeletedAssetsQuerySchema }),
        response: ListAssetsResponseSchema, allowNotModified: true,
    }),
    suggestAsset: defineContract({
        operationId: 'suggestAsset', method: 'GET', path: '/api/v2/assets/suggest',
        request: z.object({ headers, query: GetAssetSuggestionsQuerySchema }),
        response: GetAssetSuggestionsResponseSchema,
    }),
    assetAvailability: defineContract({
        operationId: 'assetAvailability', method: 'GET', path: '/api/v1/assets/availability',
        request: z.object({ headers, query: GetAssetAvailabilityQuerySchema }),
        response: GetAssetAvailabilityResponseSchema,
    }),
};
const damAssetMutationContracts = {
    getAsset: getAssetContract,
    deleteAsset: defineContract({
        operationId: 'deleteAsset', method: 'DELETE', path: '/api/v1/assets/{assetId}',
        request: z.object({ headers, params: AssetIdParamsSchema }),
        response: z.void(),
    }),
    deleteAssetVersion: defineContract({
        operationId: 'deleteAssetVersion', method: 'DELETE', path: '/api/v1/assets/{assetId}/version/{versionNumber}',
        request: z.object({ headers, params: AssetVersionParamsSchema }),
        response: z.void(),
    }),
    recoverAsset: recoverAssetContract,
    patchAsset: patchAssetContract,
};
const damAssetMediaContracts = {
    downloadLocation: defineContract({
        operationId: 'downloadLocation', method: 'GET', path: '/api/v1/assets/{assetId}/download-location',
        request: z.object({ headers, params: AssetIdParamsSchema, query: GetAssetDownloadLocationQuerySchema }),
        response: GetAssetDownloadLocationResponseSchema,
    }),
    posters: defineContract({
        operationId: 'posters', method: 'GET', path: '/api/v1/assets/{assetId}/poster-series',
        request: z.object({ headers, params: AssetIdParamsSchema, query: ListAssetPostersQuerySchema }),
        response: ListAssetPostersResponseSchema,
    }),
    poster: defineContract({
        operationId: 'poster', method: 'GET', path: '/api/v1/assets/{assetId}/poster',
        request: z.object({ headers, params: AssetIdParamsSchema }), response: GetAssetPosterResponseSchema,
    }),
    thumbnail: defineContract({
        operationId: 'thumbnail', method: 'GET', path: '/api/v1/assets/{assetId}/thumbnail',
        request: z.object({ headers, params: AssetIdParamsSchema, query: GetAssetThumbnailQuerySchema }),
        response: GetAssetThumbnailResponseSchema,
    }),
};
const damAssetSaveContracts = {
    saveAsset: defineContract({
        operationId: 'saveAsset', method: 'POST', path: '/api/v1/assets/save/{uploadId}/',
        request: z.object({ headers, params: UploadIdParamsSchema, query: CreateAssetFromUploadQuerySchema, body: CreateAssetFromUploadBodySchema }),
        response: CreateAssetFromUploadResponseSchema,
    }),
    saveAssetVersion: defineContract({
        operationId: 'saveAssetVersion', method: 'POST', path: '/api/v1/assets/{assetId}/save/{uploadId}/',
        request: z.object({ headers, params: AssetUploadParamsSchema, query: CreateAssetFromUploadVersionQuerySchema, body: CreateAssetFromUploadVersionBodySchema }),
        response: CreateAssetFromUploadVersionResponseSchema,
    }),
};
const damAssetContracts = Object.assign({}, damAssetMutationContracts, damAssetMediaContracts, damAssetSaveContracts);
const damRecreateContracts = {
    recreateMetadata: defineContract({
        operationId: 'recreateMetadata', method: 'POST', path: '/api/v1/assets/{assetId}/metadata/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetMetadataBodySchema }),
        response: RecreateAssetMetadataResponseSchema,
    }),
    recreatePoster: defineContract({
        operationId: 'recreatePoster', method: 'POST', path: '/api/v1/assets/{assetId}/poster/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetPosterBodySchema }),
        response: RecreateAssetPosterResponseSchema,
    }),
    recreateAnimatedPoster: defineContract({
        operationId: 'recreateAnimatedPoster', method: 'POST', path: '/api/v1/assets/{assetId}/animated-poster/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetAnimatedPosterBodySchema }),
        response: RecreateAssetAnimatedPosterResponseSchema,
    }),
    recreatePosterSeries: defineContract({
        operationId: 'recreatePosterSeries', method: 'POST', path: '/api/v1/assets/{assetId}/poster-series/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetPosterSeriesBodySchema }),
        response: RecreateAssetPosterSeriesResponseSchema,
    }),
    recreateTileSeries: defineContract({
        operationId: 'recreateTileSeries', method: 'POST', path: '/api/v1/assets/{assetId}/tile-series/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetTileSeriesBodySchema }),
        response: RecreateAssetTileSeriesResponseSchema,
    }),
    recreatePrevue: defineContract({
        operationId: 'recreatePrevue', method: 'POST', path: '/api/v1/assets/{assetId}/prevue/recreate',
        request: z.object({ headers, params: AssetIdParamsSchema, body: RecreateAssetPrevueBodySchema }),
        response: RecreateAssetPrevueResponseSchema,
    }),
};
const combinedDamContracts = Object.assign({}, damUploadContracts, damAssetQueryContracts, damAssetContracts, damRecreateContracts);
export const damContracts = combinedDamContracts;
//# sourceMappingURL=dam.js.map