import { type ContractProcedure } from '@orpc/contract';
import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
export declare const rmmEventDataSchema: z.ZodString;
export declare const rmmAdminContracts: {
    listAgents: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_dir: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            q: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            uri: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodString>;
            projection: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "ListAgentsResponse";
            agents: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[];
            next_token: string | null;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "ListAgentsResponse";
            agents: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[];
            next_token: string | null;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getAgent: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            projection: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateAgent: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateAgentRequest">;
            agent_data: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchAgent: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchAgentRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchAgentResponse";
            agent: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    deleteAgent: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: void | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: void | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    suggestAgents: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            q: z.ZodString;
            uri: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            c: string;
            s: string[];
            '@type'?: "GetAgentSuggestionsResponse" | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            c: string;
            s: string[];
            '@type'?: "GetAgentSuggestionsResponse" | undefined;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    agentAvailability: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            name: z.ZodString;
            uri: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            is_available: boolean;
            '@type'?: "GetAgentAvailabilityResponse" | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            is_available: boolean;
            '@type'?: "GetAgentAvailabilityResponse" | undefined;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getAgentDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateAgentDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateAgentStateRequest">;
            agent_state: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                pull_interval: z.ZodNullable<z.ZodNumber>;
                push_interval: z.ZodNullable<z.ZodNumber>;
                min_backoff_interval: z.ZodNullable<z.ZodNumber>;
                max_backoff_interval: z.ZodNullable<z.ZodNumber>;
                detail: z.ZodJSONSchema;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchAgentDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchAgentStateRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getAgentRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getAgentRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    listDevices: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
            sort_by: z.ZodOptional<z.ZodString>;
            sort_dir: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deviceId: z.ZodOptional<z.ZodArray<z.ZodString>>;
            q: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            status: z.ZodOptional<z.ZodString>;
            projection: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "ListDevicesResponse";
            devices: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[];
            next_token: string | null;
            agents?: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[] | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "ListDevicesResponse";
            devices: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[];
            next_token: string | null;
            agents?: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[] | undefined;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getDevice: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            projection: z.ZodOptional<z.ZodArray<z.ZodString>>;
            max_results: z.ZodOptional<z.ZodString>;
            next_token: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceResponse";
            device: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
            next_token: string | null;
            agents?: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[] | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceResponse";
            device: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
            next_token: string | null;
            agents?: {
                name: string;
                tags: string[];
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    detail: z.core.util.JSONType;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    detail: z.core.util.JSONType;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            }[] | undefined;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateDevice: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchDevice: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchDeviceRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchDeviceResponse";
            device: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchDeviceResponse";
            device: {
                name: string;
                tags: string[];
                user_tags: string[];
                system_tags: string[];
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                is_in_desired_state: boolean;
                '@type': string;
                desired_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_state: {
                    uri: string | null;
                    pull_interval: number | null;
                    push_interval: number | null;
                    min_backoff_interval: number | null;
                    max_backoff_interval: number | null;
                    agent_ids: string[] | null;
                    is_maintenance: boolean;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
                runtime_status: {
                    uri: string | null;
                    user_agent: string | null;
                    device_memory: number | null;
                    hardware_concurrency: number | null;
                    vendor_webgl: string | null;
                    renderer_webgl: string | null;
                    screen_details: {
                        '@type': "ScreenDetails";
                        screens: {
                            '@type': "ScreenDetailed";
                            label: string;
                            left: number;
                            top: number;
                            width: number;
                            height: number;
                            devicePixelRatio: number;
                            orientation: {
                                '@type': "ScreenOrientation";
                                angle: number;
                                type: string;
                            };
                        }[];
                    } | null;
                    cool: {
                        '@type': "CoolReport";
                        eventHistory: {
                            '@type': "EventHistory";
                            history_size: number;
                            history_msgs_flushed: number;
                            history: {
                                '@type': "HistoryEntry";
                                index: number;
                                status: "UP" | "DOWN";
                                time: string;
                                interval: number;
                            }[];
                        };
                        objectOutage: {
                            '@type': "ObjectOutage";
                            status: "UP" | "DOWN";
                            time: string;
                            aot: number;
                            naf: number;
                        };
                    } | null;
                    has_error: boolean;
                    error_stack: string | null;
                    create_timestamp: string;
                    modify_timestamp: string;
                    is_deleted: boolean;
                    '@type': string;
                } | null;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    deleteDevice: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: void | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: void | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    suggestDevices: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            q: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            c: string;
            s: string[];
            '@type'?: "GetDeviceSuggestionsResponse" | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            c: string;
            s: string[];
            '@type'?: "GetDeviceSuggestionsResponse" | undefined;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    deviceAvailability: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceAvailabilityResponse";
            is_available: boolean;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceAvailabilityResponse";
            is_available: boolean;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getDeviceDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateDeviceDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateDeviceStateRequest">;
            device_state: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                pull_interval: z.ZodNullable<z.ZodNumber>;
                push_interval: z.ZodNullable<z.ZodNumber>;
                min_backoff_interval: z.ZodNullable<z.ZodNumber>;
                max_backoff_interval: z.ZodNullable<z.ZodNumber>;
                agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
                is_maintenance: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchDeviceDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchDeviceStateRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getDeviceRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getDeviceRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    createDeviceAgent: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            deviceId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateDeviceAgentRequest">;
            agent_data: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "CreateDeviceAgentResponse";
            agent_registration: {
                '@type': "AgentRegistration";
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "CreateDeviceAgentResponse";
            agent_registration: {
                '@type': "AgentRegistration";
                tenant_id: string;
                device_id: string;
                agent_id: string;
                create_timestamp: string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
};
export declare const rmmContracts: {
    ping: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            ping: "pong";
            timestamp: string;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            ping: "pong";
            timestamp: string;
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    registerDevice: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateDeviceRequest">;
            device_data: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "CreateDeviceResponse";
            device_registration: {
                '@type': "DeviceRegistration";
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "CreateDeviceResponse";
            device_registration: {
                '@type': "DeviceRegistration";
                tenant_id: string;
                device_id: string;
                create_timestamp: string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getAgentDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    agentDesiredStateEvents: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            token: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: string | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: string | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    getDeviceDesiredState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "GetDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    deviceDesiredStateEvents: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodObject<{
            token: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: string | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: string | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateAgentRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateAgentStateRequest">;
            agent_state: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                pull_interval: z.ZodNullable<z.ZodNumber>;
                push_interval: z.ZodNullable<z.ZodNumber>;
                min_backoff_interval: z.ZodNullable<z.ZodNumber>;
                max_backoff_interval: z.ZodNullable<z.ZodNumber>;
                detail: z.ZodJSONSchema;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchAgentRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchAgentStateRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchAgentStateResponse";
            agent_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                detail: z.core.util.JSONType;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentState";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateAgentRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateAgentStatusRequest">;
            agent_status: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                detail: z.ZodJSONSchema;
                has_error: z.ZodDefault<z.ZodBoolean>;
                error_stack: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchAgentRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            agentId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchAgentStatusRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchAgentStatusResponse";
            agent_status: {
                uri: string | null;
                detail: z.core.util.JSONType;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': "AgentStatus";
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateDeviceRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateDeviceStateRequest">;
            device_state: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                pull_interval: z.ZodNullable<z.ZodNumber>;
                push_interval: z.ZodNullable<z.ZodNumber>;
                min_backoff_interval: z.ZodNullable<z.ZodNumber>;
                max_backoff_interval: z.ZodNullable<z.ZodNumber>;
                agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
                is_maintenance: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchDeviceRuntimeState: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchDeviceStateRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchDeviceStateResponse";
            device_state: {
                uri: string | null;
                pull_interval: number | null;
                push_interval: number | null;
                min_backoff_interval: number | null;
                max_backoff_interval: number | null;
                agent_ids: string[] | null;
                is_maintenance: boolean;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    updateDeviceRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"UpdateDeviceStatusRequest">;
            device_status: z.ZodObject<{
                "@type": z.ZodDefault<z.ZodString>;
                uri: z.ZodNullable<z.ZodString>;
                user_agent: z.ZodNullable<z.ZodString>;
                device_memory: z.ZodNullable<z.ZodNumber>;
                hardware_concurrency: z.ZodNullable<z.ZodNumber>;
                vendor_webgl: z.ZodNullable<z.ZodString>;
                renderer_webgl: z.ZodNullable<z.ZodString>;
                screen_details: z.ZodNullable<z.ZodObject<{
                    "@type": z.ZodLiteral<"ScreenDetails">;
                    screens: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScreenDetailed">;
                        label: z.ZodString;
                        left: z.ZodNumber;
                        top: z.ZodNumber;
                        width: z.ZodNumber;
                        height: z.ZodNumber;
                        devicePixelRatio: z.ZodNumber;
                        orientation: z.ZodObject<{
                            "@type": z.ZodLiteral<"ScreenOrientation">;
                            angle: z.ZodNumber;
                            type: z.ZodString;
                        }, z.core.$strip>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                cool: z.ZodNullable<z.ZodObject<{
                    "@type": z.ZodLiteral<"CoolReport">;
                    eventHistory: z.ZodObject<{
                        "@type": z.ZodLiteral<"EventHistory">;
                        history_size: z.ZodNumber;
                        history_msgs_flushed: z.ZodNumber;
                        history: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"HistoryEntry">;
                            index: z.ZodNumber;
                            status: z.ZodEnum<{
                                UP: "UP";
                                DOWN: "DOWN";
                            }>;
                            time: z.ZodString;
                            interval: z.ZodNumber;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                    objectOutage: z.ZodObject<{
                        "@type": z.ZodLiteral<"ObjectOutage">;
                        status: z.ZodEnum<{
                            UP: "UP";
                            DOWN: "DOWN";
                        }>;
                        time: z.ZodString;
                        aot: z.ZodNumber;
                        naf: z.ZodNumber;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                has_error: z.ZodDefault<z.ZodBoolean>;
                error_stack: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "UpdateDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
    patchDeviceRuntimeStatus: ContractProcedure<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchDeviceStatusRequest">;
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
    }, z.core.$strip>, z.ZodType<{
        status: number;
        body?: {
            '@type': "PatchDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        status: number;
        body?: {
            '@type': "PatchDeviceStatusResponse";
            device_status: {
                uri: string | null;
                user_agent: string | null;
                device_memory: number | null;
                hardware_concurrency: number | null;
                vendor_webgl: string | null;
                renderer_webgl: string | null;
                screen_details: {
                    '@type': "ScreenDetails";
                    screens: {
                        '@type': "ScreenDetailed";
                        label: string;
                        left: number;
                        top: number;
                        width: number;
                        height: number;
                        devicePixelRatio: number;
                        orientation: {
                            '@type': "ScreenOrientation";
                            angle: number;
                            type: string;
                        };
                    }[];
                } | null;
                cool: {
                    '@type': "CoolReport";
                    eventHistory: {
                        '@type': "EventHistory";
                        history_size: number;
                        history_msgs_flushed: number;
                        history: {
                            '@type': "HistoryEntry";
                            index: number;
                            status: "UP" | "DOWN";
                            time: string;
                            interval: number;
                        }[];
                    };
                    objectOutage: {
                        '@type': "ObjectOutage";
                        status: "UP" | "DOWN";
                        time: string;
                        aot: number;
                        naf: number;
                    };
                } | null;
                has_error: boolean;
                error_stack: string | null;
                create_timestamp: string;
                modify_timestamp: string;
                is_deleted: boolean;
                '@type': string;
            };
        } | undefined;
    }, unknown>>, Record<string, {
        code: string;
        status: number;
        message: string;
        data: typeof ErrorResponseSchema;
    }>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: Record<string, string>;
            };
            response: {
                default: string;
                byName: Record<string, string>;
            };
        };
    }>;
};
//# sourceMappingURL=rmm.d.ts.map