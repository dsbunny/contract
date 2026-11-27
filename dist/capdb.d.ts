import * as z from 'zod';
export declare const capDbContracts: {
    ping: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200>;
        body: z.ZodObject<{
            ping: z.ZodLiteral<"pong">;
            timestamp: z.ZodISODateTime;
        }, z.core.$strip>;
    }, z.core.$strip>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
        [x: string]: {
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
            byName: {};
            response: {
                default: string;
                byName: {};
            };
        };
    } & Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodType;
            outputSchema: z.ZodType;
            errorMap: {
                [x: string]: {
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
            };
            meta: {
                routeErrors: {
                    default: string;
                    byName: {};
                    response: {
                        default: string;
                        byName: {};
                    };
                };
            };
        };
    };
    createVideo: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateVideoCapabilityRequest">;
            video_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityVideo">;
                mime_type: z.ZodLiteral<"video">;
                codec: z.ZodString;
                width: z.ZodNumber;
                height: z.ZodNumber;
                frame_rate: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateVideoCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateVideoCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    createAudio: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateAudioCapabilityRequest">;
            audio_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityAudio">;
                mime_type: z.ZodLiteral<"audio">;
                codec: z.ZodString;
                sample_rate: z.ZodNumber;
                channels: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateAudioCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateAudioCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    createImage: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateImageCapabilityRequest">;
            image_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityImage">;
                mime_type: z.ZodLiteral<"image">;
                width: z.ZodNumber;
                height: z.ZodNumber;
                is_smooth: z.ZodLiteral<false>;
                is_power_efficient: z.ZodLiteral<true>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateImageCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateImageCapabilityResponse">;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listVideo: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetVideoCapabiltiesResponse">;
            video_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityVideo">;
                mime_type: z.ZodLiteral<"video">;
                codec: z.ZodString;
                width: z.ZodNumber;
                height: z.ZodNumber;
                frame_rate: z.ZodNumber;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetVideoCapabiltiesResponse">;
            video_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityVideo">;
                mime_type: z.ZodLiteral<"video">;
                codec: z.ZodString;
                width: z.ZodNumber;
                height: z.ZodNumber;
                frame_rate: z.ZodNumber;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listAudio: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetAudioCapabiltiesResponse">;
            audio_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityAudio">;
                mime_type: z.ZodLiteral<"audio">;
                codec: z.ZodString;
                sample_rate: z.ZodNumber;
                channels: z.ZodString;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetAudioCapabiltiesResponse">;
            audio_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                is_smooth: z.ZodBoolean;
                is_power_efficient: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityAudio">;
                mime_type: z.ZodLiteral<"audio">;
                codec: z.ZodString;
                sample_rate: z.ZodNumber;
                channels: z.ZodString;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listImage: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetImageCapabiltiesResponse">;
            image_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityImage">;
                mime_type: z.ZodLiteral<"image">;
                width: z.ZodNumber;
                height: z.ZodNumber;
                is_smooth: z.ZodLiteral<false>;
                is_power_efficient: z.ZodLiteral<true>;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetImageCapabiltiesResponse">;
            image_capabilities: z.ZodArray<z.ZodObject<{
                mime_subtype: z.ZodString;
                is_supported: z.ZodBoolean;
                "@type": z.ZodLiteral<"CapabilityImage">;
                mime_type: z.ZodLiteral<"image">;
                width: z.ZodNumber;
                height: z.ZodNumber;
                is_smooth: z.ZodLiteral<false>;
                is_power_efficient: z.ZodLiteral<true>;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
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
                    CapDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
};
//# sourceMappingURL=capdb.d.ts.map