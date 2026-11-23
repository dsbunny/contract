import * as z from 'zod';
export declare const enclaveContracts: {
    ping: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            ping: z.ZodLiteral<"pong">;
            timestamp: z.ZodISODateTime;
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
        };
    } & Record<never, never>>;
    addToken: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"AddTokenRequest">;
            ref_id: z.ZodString;
            token: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"AddTokenResponse">;
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
        };
    } & Record<never, never>>;
    revokeToken: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"RevokeTokenRequest">;
            ref_id: z.ZodString;
            token: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"RevokeTokenResponse">;
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
        };
    } & Record<never, never>>;
};
//# sourceMappingURL=enclave.d.ts.map