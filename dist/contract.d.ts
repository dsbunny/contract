import * as z from "zod";
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
/**
 * The shape every request schema must parse to. Each part is optional so a
 * contract only declares what the endpoint actually uses.
 */
export interface RequestParts {
    /** Absolute URL for contracts explicitly permitting an externally supplied resource. */
    url?: string;
    /** Values substituted into `:name` segments of the path. */
    params?: Record<string, string | number | boolean>;
    /** Serialised to the query string. Arrays become repeated keys. */
    query?: Record<string, unknown>;
    headers?: Record<string, string>;
    /** JSON-serialised. Ignored for GET. */
    body?: unknown;
}
export interface EndpointContract<TRequest extends z.ZodTypeAny, TResponse extends z.ZodTypeAny, TError extends z.ZodTypeAny> {
    /** Used as the breaker name and in diagnostics. */
    name: string;
    method: HttpMethod;
    /** e.g. "/users/:id" */
    path: string;
    /** Validates caller input *before* anything is sent. Must parse to RequestParts. */
    request: TRequest;
    /** Validates the body of 2xx responses. Use z.void()/z.undefined() for 204. */
    response: TResponse;
    /** Validates the body of non-2xx responses. */
    error: TError;
    /** How the successful response body is decoded. */
    responseFormat?: "auto" | "text" | "binary" | "event-stream";
    /** Additional fetch options that cannot override the method, body, headers or signal. */
    requestOptions?: Pick<RequestInit, "cache" | "mode" | "redirect">;
    /** Validates the data of each message in an event stream. */
    eventData?: z.ZodTypeAny;
    /** Treat a conditional 304 response as a bodyless success. */
    allowNotModified?: boolean;
    /** When specified, reject otherwise successful statuses not listed here. */
    successStatuses?: readonly number[];
}
/** Identity helper that gives you full inference when declaring a contract. */
export declare function defineContract<Req extends z.ZodTypeAny, Res extends z.ZodTypeAny, Err extends z.ZodTypeAny>(contract: EndpointContract<Req, Res, Err>): EndpointContract<Req, Res, Err>;
//# sourceMappingURL=contract.d.ts.map