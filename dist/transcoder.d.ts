import * as z from 'zod';
type Definition = {
    code: string;
    status: number;
    message: string;
};
export declare const transcoderError: (code: string, status: number, message: string) => Definition;
export declare function defineTranscoderContract<TInput extends z.ZodType, TBody extends z.ZodType>(options: {
    errorPrefix: 'TranscoderOne' | 'TranscoderThree';
    method: 'GET' | 'POST';
    path: `/${string}`;
    operationId: string;
    input: TInput;
    body: TBody;
    request: Definition;
    response: Definition;
    defaultError: Definition;
    validation: Definition;
    byName?: Record<string, Definition>;
}): import("@orpc/contract").ContractProcedureBuilderWithInputOutput<TInput, z.ZodObject<{
    status: z.ZodLiteral<200 | 202>;
    body: TBody;
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
export {};
//# sourceMappingURL=transcoder.d.ts.map