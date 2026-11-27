import * as z from 'zod';
export declare const viewportAgentContracts: {
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
    screenshot: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            viewportId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<200>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetScreenshotResponse">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            date: z.ZodUnion<readonly [z.ZodISODate, z.ZodISODateTime]>;
            uri: z.ZodURL;
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
                ViewportBadGatewayError: string;
                ViewportBadRequestError: string;
                ViewportForbiddenError: string;
                ViewportGoneError: string;
                ViewportNotFoundError: string;
                ViewportPreconditionFailedError: string;
                ZodError: string;
            };
        };
    } & Record<never, never>>;
};
//# sourceMappingURL=viewport-agent.d.ts.map