// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from 'zod';
import { GetJobStatusQuerySchema, CreateTranscodeFileBodySchema, CreateTranscodeImageBodySchema, CreateTranscodeTextureBodySchema, CreateTranscodeVideoBodySchema, CreateTranscodeResponseSchema, GetJobStatusResponseSchema, } from '@dsbunny/transcoder-one-schema';
import { defineTranscoderContract, transcoderError as error } from './transcoder.js';
export const transcoderOneContracts = {
    getJobs: defineTranscoderContract({
        errorPrefix: 'TranscoderOne',
        method: 'GET', path: '/api/v1/job', operationId: 'getJobs',
        input: z.object({ query: GetJobStatusQuerySchema }), body: z.array(GetJobStatusResponseSchema),
        request: error('E2005', 400, 'Bad request while querying job status'),
        response: error('E2115', 502, 'Bad gateway error while querying job status'),
        defaultError: error('E2102', 500, 'Unexpected error while processing a transcoder job query request'),
        validation: error('E2120', 500, 'Internal server error while querying job status'),
        byName: { TranscoderOneNotFoundError: error('E2006', 404, 'Task not found while querying job status') },
    }),
    createFile: defineTranscoderContract({
        errorPrefix: 'TranscoderOne',
        method: 'POST', path: '/api/v1/file', operationId: 'createFileJob',
        input: z.object({ body: CreateTranscodeFileBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2104', 400, 'Bad request while creating a file transcoding job'),
        response: error('E2116', 502, 'Bad gateway error while creating a file transcoding job'),
        defaultError: error('E2105', 500, 'Unexpected error while processing the file transcoding job request'),
        validation: error('E2121', 500, 'Internal server error while creating a file transcoding job'),
    }),
    createImage: defineTranscoderContract({
        errorPrefix: 'TranscoderOne',
        method: 'POST', path: '/api/v1/image', operationId: 'createImageJob',
        input: z.object({ body: CreateTranscodeImageBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2107', 400, 'Bad request while creating an image transcoding job'),
        response: error('E2117', 502, 'Bad gateway error while creating an image transcoding job'),
        defaultError: error('E2108', 500, 'Unexpected error while processing the image transcoding job request'),
        validation: error('E2122', 500, 'Internal server error while creating an image transcoding job'),
    }),
    createTexture: defineTranscoderContract({
        errorPrefix: 'TranscoderOne',
        method: 'POST', path: '/api/v1/texture', operationId: 'createTextureJob',
        input: z.object({ body: CreateTranscodeTextureBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2110', 400, 'Bad request while creating a texture transcoding job'),
        response: error('E2118', 502, 'Bad gateway error while creating a texture transcoding job'),
        defaultError: error('E2111', 500, 'Unexpected error while processing the texture transcoding job request'),
        validation: error('E2123', 500, 'Internal server error while creating a texture transcoding job'),
    }),
    createVideo: defineTranscoderContract({
        errorPrefix: 'TranscoderOne',
        method: 'POST', path: '/api/v1/video', operationId: 'createVideoJob',
        input: z.object({ body: CreateTranscodeVideoBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2113', 400, 'Bad request while creating a video transcoding job'),
        response: error('E2119', 502, 'Bad gateway error while creating a video transcoding job'),
        defaultError: error('E2114', 500, 'Unexpected error while processing the video transcoding job request'),
        validation: error('E2124', 500, 'Internal server error while creating a video transcoding job'),
    }),
};
//# sourceMappingURL=transcoder-one.js.map