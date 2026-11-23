import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
export declare const canvasDbContracts: {
    list: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            canvas_type: z.ZodOptional<z.ZodString>;
            viewport_range: z.ZodOptional<z.ZodString>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_dir: z.ZodOptional<z.ZodString>;
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
            q: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
            tags: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                headers: z.ZodOptional<z.ZodObject<{
                    'if-match': z.ZodOptional<z.ZodString>;
                    'if-none-match': z.ZodOptional<z.ZodString>;
                    'if-modified-since': z.ZodOptional<z.ZodString>;
                    'if-unmodified-since': z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                query: z.ZodObject<{
                    canvas_type: z.ZodOptional<z.ZodString>;
                    viewport_range: z.ZodOptional<z.ZodString>;
                    sort_by: z.ZodOptional<z.ZodString>;
                    sort_dir: z.ZodOptional<z.ZodString>;
                    max_results: z.ZodOptional<z.ZodString>;
                    next_token: z.ZodOptional<z.ZodString>;
                    q: z.ZodOptional<z.ZodString>;
                    id: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
                    tags: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    suggest: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            q: z.ZodOptional<z.ZodString>;
            c: z.ZodOptional<z.ZodString>;
            t: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                query: z.ZodObject<{
                    q: z.ZodOptional<z.ZodString>;
                    c: z.ZodOptional<z.ZodString>;
                    t: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    availability: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                query: z.ZodObject<{
                    name: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    get: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            canvasId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                headers: z.ZodOptional<z.ZodObject<{
                    'if-match': z.ZodOptional<z.ZodString>;
                    'if-none-match': z.ZodOptional<z.ZodString>;
                    'if-modified-since': z.ZodOptional<z.ZodString>;
                    'if-unmodified-since': z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                params: z.ZodObject<{
                    canvasId: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    delete: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            canvasId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                headers: z.ZodOptional<z.ZodObject<{
                    'if-match': z.ZodOptional<z.ZodString>;
                    'if-none-match': z.ZodOptional<z.ZodString>;
                    'if-modified-since': z.ZodOptional<z.ZodString>;
                    'if-unmodified-since': z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                params: z.ZodObject<{
                    canvasId: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    patch: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            canvasId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchCanvasRequest">;
            patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"add">;
                value: z.ZodAny;
            }, z.core.$strip>, z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"remove">;
            }, z.core.$strip>, z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"replace">;
                value: z.ZodAny;
            }, z.core.$strip>, z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"move">;
                from: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"copy">;
                from: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                path: z.ZodString;
                op: z.ZodLiteral<"test">;
                value: z.ZodAny;
                not: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>], "op">>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                headers: z.ZodOptional<z.ZodObject<{
                    'if-match': z.ZodOptional<z.ZodString>;
                    'if-none-match': z.ZodOptional<z.ZodString>;
                    'if-modified-since': z.ZodOptional<z.ZodString>;
                    'if-unmodified-since': z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                params: z.ZodObject<{
                    canvasId: z.ZodString;
                }, z.core.$strip>;
                body: z.ZodObject<{
                    '@type': z.ZodLiteral<"PatchCanvasRequest">;
                    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"add">;
                        value: z.ZodAny;
                    }, z.core.$strip>, z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"remove">;
                    }, z.core.$strip>, z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"replace">;
                        value: z.ZodAny;
                    }, z.core.$strip>, z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"move">;
                        from: z.ZodString;
                    }, z.core.$strip>, z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"copy">;
                        from: z.ZodString;
                    }, z.core.$strip>, z.ZodObject<{
                        path: z.ZodString;
                        op: z.ZodLiteral<"test">;
                        value: z.ZodAny;
                        not: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>], "op">>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
    create: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateCanvasRequest">;
            canvas_data: z.ZodObject<{
                "@type": z.ZodLiteral<"CanvasBase">;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                frame_rate: z.ZodNumber;
                viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"Viewport">;
                    reference_id: z.ZodString;
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                }, z.core.$strip>>;
                capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
                }, z.core.$strip>, z.ZodObject<{
                    mime_subtype: z.ZodString;
                    is_supported: z.ZodBoolean;
                    is_smooth: z.ZodBoolean;
                    is_power_efficient: z.ZodBoolean;
                    "@type": z.ZodLiteral<"CapabilityAudio">;
                    mime_type: z.ZodLiteral<"audio">;
                    codec: z.ZodString;
                    sample_rate: z.ZodNumber;
                    channels: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    mime_subtype: z.ZodString;
                    is_supported: z.ZodBoolean;
                    "@type": z.ZodLiteral<"CapabilityImage">;
                    mime_type: z.ZodLiteral<"image">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    is_smooth: z.ZodLiteral<false>;
                    is_power_efficient: z.ZodLiteral<true>;
                }, z.core.$strip>], "mime_type">>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, {
        status: number;
        message: string;
        code: string;
        data: typeof ErrorResponseSchema;
    }>>, Record<never, never>> & {
        '~orpc': {
            inputSchema: z.ZodObject<{
                body: z.ZodObject<{
                    '@type': z.ZodLiteral<"CreateCanvasRequest">;
                    canvas_data: z.ZodObject<{
                        "@type": z.ZodLiteral<"CanvasBase">;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        width: z.ZodNumber;
                        height: z.ZodNumber;
                        frame_rate: z.ZodNumber;
                        viewports: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"Viewport">;
                            reference_id: z.ZodString;
                            x: z.ZodNumber;
                            y: z.ZodNumber;
                            width: z.ZodNumber;
                            height: z.ZodNumber;
                        }, z.core.$strip>>;
                        capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
                        }, z.core.$strip>, z.ZodObject<{
                            mime_subtype: z.ZodString;
                            is_supported: z.ZodBoolean;
                            is_smooth: z.ZodBoolean;
                            is_power_efficient: z.ZodBoolean;
                            "@type": z.ZodLiteral<"CapabilityAudio">;
                            mime_type: z.ZodLiteral<"audio">;
                            codec: z.ZodString;
                            sample_rate: z.ZodNumber;
                            channels: z.ZodString;
                        }, z.core.$strip>, z.ZodObject<{
                            mime_subtype: z.ZodString;
                            is_supported: z.ZodBoolean;
                            "@type": z.ZodLiteral<"CapabilityImage">;
                            mime_type: z.ZodLiteral<"image">;
                            width: z.ZodNumber;
                            height: z.ZodNumber;
                            is_smooth: z.ZodLiteral<false>;
                            is_power_efficient: z.ZodLiteral<true>;
                        }, z.core.$strip>], "mime_type">>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            outputSchema: z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
                status: z.ZodLiteral<204>;
            }, z.core.$strip> | z.ZodObject<{
                status: z.ZodLiteral<200 | 201>;
                body: z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<304>;
            }, z.core.$strip>]>;
            errorMap: Record<string, {
                status: number;
                message: string;
                code: string;
                data: typeof ErrorResponseSchema;
            }>;
            meta: {
                routeErrors: {
                    default: string;
                    byName: Record<string, string>;
                    request: {
                        default: string;
                        byName: {
                            CanvasDbBadRequestError: string;
                        };
                    };
                    response: {
                        default: string;
                        byName: Record<string, string>;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=canvasdb.d.ts.map