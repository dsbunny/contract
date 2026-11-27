import * as z from 'zod';
export declare function definePingContract<TResponse extends z.ZodType>(response: TResponse, errorCode: string): import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<200>;
    body: TResponse;
}, z.core.$strip>, import("@orpc/contract").MergedErrorMap<Record<never, never>, {
    [errorCode]: {
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
    "~orpc": {
        inputSchema: z.ZodType;
        outputSchema: z.ZodType;
        errorMap: {
            [errorCode]: {
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
//# sourceMappingURL=ping.d.ts.map