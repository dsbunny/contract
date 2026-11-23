// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from 'zod';
import { GetJobStatusQuerySchema, CreateTranscodeImageBodySchema, CreateTranscodeVideoBodySchema, CreateTranscodeResponseSchema, GetJobStatusResponseSchema, } from '@dsbunny/transcoder-three-schema';
import { defineTranscoderContract, transcoderError as error } from './transcoder.js';
export const transcoderThreeContracts = {
    getJobs: defineTranscoderContract({
        errorPrefix: 'TranscoderThree',
        method: 'GET', path: '/api/v1/job', operationId: 'getJobs',
        input: z.object({ query: GetJobStatusQuerySchema }), body: z.array(GetJobStatusResponseSchema),
        request: error('E2005', 400, 'Bad request while querying job status'),
        response: error('E2115', 502, 'Bad gateway error while querying job status'),
        defaultError: error('E2102', 500, 'Unexpected error while processing a transcoder job query request'),
        validation: error('E2118', 500, 'Internal server error while querying job status'),
        byName: { TranscoderThreeNotFoundError: error('E2006', 404, 'Task not found while querying job status') },
    }),
    createImage: defineTranscoderContract({
        errorPrefix: 'TranscoderThree',
        method: 'POST', path: '/api/v1/image', operationId: 'createImageJob',
        input: z.object({ body: CreateTranscodeImageBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2107', 400, 'Bad request while creating an image transcoding job'),
        response: error('E2116', 502, 'Bad gateway error while creating an image transcoding job'),
        defaultError: error('E2108', 500, 'Unexpected error while processing the image transcoding job request'),
        validation: error('E2119', 500, 'Internal server error while creating an image transcoding job'),
    }),
    createVideo: defineTranscoderContract({
        errorPrefix: 'TranscoderThree',
        method: 'POST', path: '/api/v1/video', operationId: 'createVideoJob',
        input: z.object({ body: CreateTranscodeVideoBodySchema }), body: CreateTranscodeResponseSchema,
        request: error('E2113', 400, 'Bad request while creating a video transcoding job'),
        response: error('E2117', 502, 'Bad gateway error while creating a video transcoding job'),
        defaultError: error('E2114', 500, 'Unexpected error while processing the video transcoding job request'),
        validation: error('E2120', 500, 'Internal server error while creating a video transcoding job'),
    }),
};
//# sourceMappingURL=transcoder-three.js.map