import * as z from 'zod';
export declare const transcoderThreeContracts: {
    getJobs: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            id: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            '@type': z.ZodLiteral<"GetJobStatusErrorResponse">;
            job_id: z.ZodUUID;
            status: z.ZodLiteral<"error">;
            error: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetJobStatusFailedResponse">;
            job_id: z.ZodUUID;
            status: z.ZodLiteral<"failed">;
            error_code: z.ZodString;
            error_message: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetJobStatusSucceededResponse">;
            job_id: z.ZodUUID;
            status: z.ZodLiteral<"succeeded">;
            progress: z.ZodLiteral<100>;
            file: z.ZodObject<{
                "@type": z.ZodLiteral<"FileStatAndChecksums">;
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetJobStatusRejectedResponse">;
            job_id: z.ZodUUID;
            status: z.ZodLiteral<"rejected">;
            reason: z.ZodString;
            issues: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetJobStatusCreatedResponse">;
            job_id: z.ZodUUID;
            status: z.ZodLiteral<"created">;
            progress: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"TranscodeProgress">;
                lengthComputable: z.ZodBoolean;
                loaded: z.ZodNumber;
                total: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
        [k: string]: {
            status: number;
            message: string;
            data: z.ZodObject<{
                '@type': z.ZodLiteral<"ErrorResponse">;
                code: z.ZodString;
                message: z.ZodString;
                detail: z.ZodString;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        };
    }>, {
        routeErrors: {
            default: string;
            byName: {
                [k: string]: string;
            };
            response: {
                default: string;
                byName: {
                    [x: string]: string;
                };
            };
        };
    } & Record<never, never>>;
    createImage: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateTranscodeImageRequest">;
            image_request: z.ZodObject<{
                reference_id: z.ZodString;
                input: z.ZodObject<{
                    "@type": z.ZodLiteral<"TranscoderThreeInput">;
                    url: z.ZodURL;
                    expires: z.ZodISODateTime;
                    s3_uri: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    content_length: z.ZodNumber;
                }, z.core.$strip>;
                client_request_token: z.ZodOptional<z.ZodString>;
                "@type": z.ZodLiteral<"TranscodeImageRequest">;
                type: z.ZodLiteral<"image">;
                output: z.ZodObject<{
                    "@type": z.ZodLiteral<"TranscoderThreeImageOutput">;
                    s3_target: z.ZodObject<{
                        "@type": z.ZodLiteral<"S3Target">;
                        content_type: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_filename: z.ZodString;
                        url: z.ZodURL;
                    }, z.core.$strip>;
                    mime_type: z.ZodLiteral<"image">;
                    mime_subtype: z.ZodEnum<{
                        png: "png";
                        jpeg: "jpeg";
                        webp: "webp";
                        avif: "avif";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    filter: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"TranscoderThreeFilter">;
                        crop: z.ZodOptional<z.ZodObject<{
                            w: z.ZodNumber;
                            h: z.ZodNumber;
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                        }, z.core.$strip>>;
                        scale: z.ZodOptional<z.ZodObject<{
                            w: z.ZodNumber;
                            h: z.ZodNumber;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodObject<{
            job_id: z.ZodUUID;
            reference_id: z.ZodString;
            type: z.ZodEnum<{
                image: "image";
                video: "video";
            }>;
            timestamp: z.ZodISODateTime;
            '@type': z.ZodLiteral<"CreateTranscodeResponse">;
        }, z.core.$strip>;
    }, z.core.$strip>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
        [k: string]: {
            status: number;
            message: string;
            data: z.ZodObject<{
                '@type': z.ZodLiteral<"ErrorResponse">;
                code: z.ZodString;
                message: z.ZodString;
                detail: z.ZodString;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        };
    }>, {
        routeErrors: {
            default: string;
            byName: {
                [k: string]: string;
            };
            response: {
                default: string;
                byName: {
                    [x: string]: string;
                };
            };
        };
    } & Record<never, never>>;
    createVideo: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateTranscodeVideoRequest">;
            video_request: z.ZodObject<{
                reference_id: z.ZodString;
                input: z.ZodObject<{
                    "@type": z.ZodLiteral<"TranscoderThreeInput">;
                    url: z.ZodURL;
                    expires: z.ZodISODateTime;
                    s3_uri: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    content_length: z.ZodNumber;
                }, z.core.$strip>;
                client_request_token: z.ZodOptional<z.ZodString>;
                "@type": z.ZodLiteral<"TranscodeVideoRequest">;
                type: z.ZodLiteral<"video">;
                output: z.ZodObject<{
                    "@type": z.ZodLiteral<"TranscoderThreeVideoOutput">;
                    s3_target: z.ZodObject<{
                        "@type": z.ZodLiteral<"S3Target">;
                        content_type: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_filename: z.ZodString;
                        url: z.ZodURL;
                    }, z.core.$strip>;
                    mime_type: z.ZodLiteral<"video">;
                    mime_subtype: z.ZodEnum<{
                        mp4: "mp4";
                        webm: "webm";
                    }>;
                    video_codec: z.ZodString;
                    audio_codec: z.ZodString;
                    audio_channels: z.ZodEnum<{
                        mono: "mono";
                        stereo: "stereo";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    frame_rate: z.ZodNumber;
                    filter: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"TranscoderThreeFilter">;
                        crop: z.ZodOptional<z.ZodObject<{
                            w: z.ZodNumber;
                            h: z.ZodNumber;
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                        }, z.core.$strip>>;
                        scale: z.ZodOptional<z.ZodObject<{
                            w: z.ZodNumber;
                            h: z.ZodNumber;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodObject<{
            job_id: z.ZodUUID;
            reference_id: z.ZodString;
            type: z.ZodEnum<{
                image: "image";
                video: "video";
            }>;
            timestamp: z.ZodISODateTime;
            '@type': z.ZodLiteral<"CreateTranscodeResponse">;
        }, z.core.$strip>;
    }, z.core.$strip>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
        [k: string]: {
            status: number;
            message: string;
            data: z.ZodObject<{
                '@type': z.ZodLiteral<"ErrorResponse">;
                code: z.ZodString;
                message: z.ZodString;
                detail: z.ZodString;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        };
    }>, {
        routeErrors: {
            default: string;
            byName: {
                [k: string]: string;
            };
            response: {
                default: string;
                byName: {
                    [x: string]: string;
                };
            };
        };
    } & Record<never, never>>;
};
//# sourceMappingURL=transcoder-three.d.ts.map