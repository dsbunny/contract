export declare const rmmAdminRouteErrors: {
    readonly updateAgent: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3058";
            readonly message: "An error occurred while updating the agent.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3091";
                readonly message: "Invalid agent";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3057";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3146";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3056";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3145";
                readonly message: "Invalid agent";
            };
        };
    };
    readonly patchAgent: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3061";
            readonly message: "An error occurred while patching the agent.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3059";
                readonly message: "Invalid patch operation";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3060";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3148";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3139";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3147";
                readonly message: "Invalid agent patch request";
            };
        };
    };
    readonly getAgent: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3133";
            readonly message: "An error occurred while retrieving the agent.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3150";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E3066";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E3068";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E3067";
                readonly message: "Agent not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3149";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3069";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly deleteAgent: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3134";
            readonly message: "An error occurred while deleting the agent.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3152";
                readonly message: "Invalid agent request";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3062";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3151";
                readonly message: "Invalid response for DELETE /api/v1/agents/:agentId";
            };
        };
    };
    readonly listAgents: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3065";
            readonly message: "An error occurred while retrieving the agents.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3105";
                readonly message: "Bad request while retrieving the agents.";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3153";
                readonly message: "Invalid response for GET /api/v1/agents";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3216";
                readonly message: "Precondition failed while retrieving the agents.";
            };
        };
    };
    readonly suggestAgents: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3116";
            readonly message: "An error occurred while retrieving agent suggestions";
        };
        readonly byName: {
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E3115";
                readonly message: "Forbidden while retrieving agent suggestions";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3154";
                readonly message: "Invalid response for GET /api/v2/agents/suggest";
            };
        };
    };
    readonly agentAvailability: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3118";
            readonly message: "An unexpected error occurred while checking agent name availability.";
        };
        readonly byName: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3155";
                readonly message: "Invalid response for GET /api/v1/agents/availability";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3117";
                readonly message: "Invalid agent name";
            };
        };
    };
    readonly getAgentDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3125";
            readonly message: "An error occurred while retrieving the agent desired state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3157";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E3124";
                readonly message: "Forbidden while retrieving the agent desired state.";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E3072";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E3071";
                readonly message: "Agent not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3156";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId/desired-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3073";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly updateAgentDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3077";
            readonly message: "An error occurred while updating the agent desired state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3092";
                readonly message: "Invalid desired state";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3076";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3159";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId/desired-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3075";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId/desired-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3158";
                readonly message: "Invalid desired state";
            };
        };
    };
    readonly patchAgentDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3080";
            readonly message: "An error occurred while updating the agent desired state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3127";
                readonly message: "Invalid agent desired state patch request.";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3128";
                readonly message: "Precondition failed while patching the desired state";
            };
            readonly JsonPatchError: {
                readonly status: 400;
                readonly code: "E3078";
                readonly message: "Invalid patch operation";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3161";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId/desired-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3140";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId/desired-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3160";
                readonly message: "Invalid agent desired state patch request";
            };
        };
    };
    readonly getAgentRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3085";
            readonly message: "An error occurred while retrieving the agent runtime state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3113";
                readonly message: "Exactly one agent ID must be specified while fetching the runtime state.";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3162";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId/runtime-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3114";
                readonly message: "Precondition failed while fetching the runtime state";
            };
        };
    };
    readonly getAgentRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3090";
            readonly message: "An error occurred while retrieving the agent runtime status.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3164";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E3086";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E3088";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E3087";
                readonly message: "Agent not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3163";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId/runtime-status";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3089";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly updateDevice: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3219";
            readonly message: "An error occurred while responding to the unsupported device update.";
        };
        readonly byName: {};
    };
    readonly patchDevice: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3006";
            readonly message: "An error occurred while patching the device.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3001";
                readonly message: "Invalid patch operation";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3002";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3004";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3003";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3005";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3166";
                readonly message: "Invalid response for PATCH /api/v1/devices/:deviceId";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3094";
                readonly message: "Invalid request for PATCH /api/v1/devices/:deviceId";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3165";
                readonly message: "Invalid request";
            };
        };
    };
    readonly deleteDevice: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3011";
            readonly message: "An error occurred while deleting the device.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3168";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3007";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3009";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3008";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3010";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3167";
                readonly message: "Invalid response for DELETE /api/v1/devices/:deviceId";
            };
        };
    };
    readonly listDevices: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3013";
            readonly message: "An error occurred while retrieving the devices.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3170";
                readonly message: "Invalid device request";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3169";
                readonly message: "Invalid response for GET /api/v1/devices";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3012";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly suggestDevices: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3107";
            readonly message: "An error occurred while retrieving device suggestions";
        };
        readonly byName: {
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3106";
                readonly message: "Forbidden while retrieving device suggestions";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3171";
                readonly message: "Invalid response for GET /api/v2/devices/suggest";
            };
        };
    };
    readonly deviceAvailability: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3109";
            readonly message: "An unexpected error occurred while checking device name availability.";
        };
        readonly byName: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3172";
                readonly message: "Invalid response for GET /api/v1/devices/availability";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3108";
                readonly message: "Invalid device name";
            };
        };
    };
    readonly getDevice: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3020";
            readonly message: "An error occurred while retrieving the device.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3174";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3016";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3018";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3017";
                readonly message: "Device not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3173";
                readonly message: "Invalid response for GET /api/v1/devices/:deviceId";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3019";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly getDeviceDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3027";
            readonly message: "An error occurred while retrieving the device desired state.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3176";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3023";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3025";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3024";
                readonly message: "Device not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3175";
                readonly message: "Invalid response for GET /api/v1/devices/:deviceId/desired-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3026";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly updateDeviceDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3033";
            readonly message: "An error occurred while updating the device desired state.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3179";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3029";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3031";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3030";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3032";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3178";
                readonly message: "Invalid response for PUT /api/v1/devices/:deviceId/desired-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3028";
                readonly message: "Invalid request for PUT /api/v1/devices/:deviceId/desired-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3177";
                readonly message: "Invalid desired state";
            };
        };
    };
    readonly patchDeviceDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3039";
            readonly message: "An error occurred while updating the device desired state.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3034";
                readonly message: "Invalid patch operation";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3035";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3037";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3036";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3038";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3181";
                readonly message: "Invalid response for PATCH /api/v1/devices/:deviceId/desired-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3138";
                readonly message: "Invalid request for PATCH /api/v1/devices/:deviceId/desired-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3180";
                readonly message: "Invalid device desired state patch request";
            };
        };
    };
    readonly getDeviceRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3044";
            readonly message: "An error occurred while retrieving the device runtime state.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3183";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3040";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3042";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3041";
                readonly message: "Device not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3182";
                readonly message: "Invalid response for GET /api/v1/devices/:deviceId/runtime-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3043";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly getDeviceRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3049";
            readonly message: "An error occurred while retrieving the device runtime status.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3185";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3045";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3047";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3046";
                readonly message: "Device not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3184";
                readonly message: "Invalid response for GET /api/v1/devices/:deviceId/runtime-status";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3048";
                readonly message: "Precondition failed";
            };
        };
    };
    readonly createDeviceAgent: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3055";
            readonly message: "An error occurred while registering the agent.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3217";
                readonly message: "Invalid agent registration request";
            };
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3188";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3051";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3053";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3052";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E3054";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3187";
                readonly message: "Invalid response for POST /api/v1/devices/:deviceId/agent";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3050";
                readonly message: "Invalid request for POST /api/v1/devices/:deviceId/agent";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3186";
                readonly message: "Invalid agent";
            };
        };
    };
};
export declare const rmmDeviceUpdateNotImplemented: {
    readonly status: 501;
    readonly code: "E3218";
    readonly message: "Updating a device is not implemented.";
};
export declare const rmmRouteErrors: {
    readonly getAgentDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2038";
            readonly message: "An unexpected error occurred while fetching the agent desired state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3126";
                readonly message: "Bad request while fetching the agent desired state.";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E2034";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E2036";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E2035";
                readonly message: "Agent not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3189";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId/desired-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2037";
                readonly message: "Precondition failed";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3126";
                readonly message: "Bad request while fetching the agent desired state.";
            };
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3126";
                readonly message: "Bad request while fetching the agent desired state.";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3189";
                readonly message: "Invalid response for GET /api/v1/agents/:agentId/desired-state";
            };
        };
    };
    readonly agentDesiredStateEvents: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2040";
            readonly message: "An unexpected error occurred while establishing the SSE connection.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E2039";
                readonly message: "Bad request";
            };
        };
        readonly request: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E2039";
                readonly message: "Bad request";
            };
        };
        readonly response: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E2039";
                readonly message: "Bad request";
            };
        };
    };
    readonly updateAgentRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2046";
            readonly message: "An unexpected error occurred while updating the agent runtime state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3192";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E2042";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E2044";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E2043";
                readonly message: "Agent not found";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2045";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3191";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId/runtime-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2041";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId/runtime-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3190";
                readonly message: "Invalid request body";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2041";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId/runtime-state";
            };
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3192";
                readonly message: "Invalid agent request";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3191";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId/runtime-state";
            };
        };
    };
    readonly patchAgentRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2052";
            readonly message: "An unexpected error occurred while updating the agent runtime state.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3195";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E2048";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E2050";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E2049";
                readonly message: "Agent not found";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2051";
                readonly message: "Precondition failed";
            };
            readonly JsonPatchError: {
                readonly status: 400;
                readonly code: "E2047";
                readonly message: "Invalid patch operation";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3194";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId/runtime-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3143";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId/runtime-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3193";
                readonly message: "Invalid agent runtime state patch request";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3143";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId/runtime-state";
            };
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3195";
                readonly message: "Invalid agent request";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3194";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId/runtime-state";
            };
        };
    };
    readonly updateAgentRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2058";
            readonly message: "An unexpected error occurred while updating the agent runtime status.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3198";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E2054";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E2056";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E2055";
                readonly message: "Agent not found";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2057";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3197";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId/runtime-status";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2053";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId/runtime-status";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3196";
                readonly message: "Invalid request body";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2053";
                readonly message: "Invalid request for PUT /api/v1/agents/:agentId/runtime-status";
            };
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3198";
                readonly message: "Invalid agent request";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3197";
                readonly message: "Invalid response for PUT /api/v1/agents/:agentId/runtime-status";
            };
        };
    };
    readonly patchAgentRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2064";
            readonly message: "An unexpected error occurred while updating the agent runtime status.";
        };
        readonly byName: {
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3201";
                readonly message: "Invalid agent request";
            };
            readonly AgentForbiddenError: {
                readonly status: 403;
                readonly code: "E2060";
                readonly message: "Agent forbidden";
            };
            readonly AgentGoneError: {
                readonly status: 410;
                readonly code: "E2062";
                readonly message: "Agent gone";
            };
            readonly AgentNotFoundError: {
                readonly status: 404;
                readonly code: "E2061";
                readonly message: "Agent not found";
            };
            readonly AgentPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2063";
                readonly message: "Precondition failed";
            };
            readonly JsonPatchError: {
                readonly status: 400;
                readonly code: "E2059";
                readonly message: "Invalid patch operation";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3200";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId/runtime-status";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3144";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId/runtime-status";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3199";
                readonly message: "Invalid agent runtime status patch request";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3144";
                readonly message: "Invalid request for PATCH /api/v1/agents/:agentId/runtime-status";
            };
            readonly AgentBadRequestError: {
                readonly status: 400;
                readonly code: "E3201";
                readonly message: "Invalid agent request";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3200";
                readonly message: "Invalid response for PATCH /api/v1/agents/:agentId/runtime-status";
            };
        };
    };
    readonly getDeviceDesiredState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2007";
            readonly message: "An unexpected error occurred while fetching the device desired state.";
        };
        readonly byName: {
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E2003";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E2005";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E2004";
                readonly message: "Device not found";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3202";
                readonly message: "Invalid response for GET /api/v1/devices/desired-state";
            };
            readonly RmmPreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2006";
                readonly message: "Precondition failed";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 500;
                readonly code: "E2007";
                readonly message: "An unexpected error occurred while fetching the device desired state.";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3202";
                readonly message: "Invalid response for GET /api/v1/devices/desired-state";
            };
        };
    };
    readonly deviceDesiredStateEvents: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2009";
            readonly message: "An unexpected error occurred while establishing the SSE connection.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3137";
                readonly message: "Invalid device SSE request";
            };
        };
        readonly request: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3137";
                readonly message: "Invalid device SSE request";
            };
        };
        readonly response: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3137";
                readonly message: "Invalid device SSE request";
            };
        };
    };
    readonly registerDevice: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2002";
            readonly message: "An unexpected error occurred while registering the device.";
        };
        readonly byName: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3204";
                readonly message: "Invalid response for POST /api/v1/devices";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2001";
                readonly message: "Invalid request for POST /api/v1/devices";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3203";
                readonly message: "Invalid request body while registering the device";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2001";
                readonly message: "Invalid request for POST /api/v1/devices";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3204";
                readonly message: "Invalid response for POST /api/v1/devices";
            };
        };
    };
    readonly updateDeviceRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2015";
            readonly message: "An unexpected error occurred while updating the device runtime state.";
        };
        readonly byName: {
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E2017";
                readonly message: "Device forbidden while updating runtime state";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E2013";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E2012";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2014";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3206";
                readonly message: "Invalid response for PUT /api/v1/devices/runtime-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3119";
                readonly message: "Invalid request for PUT /api/v1/devices/runtime-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3205";
                readonly message: "Invalid runtime state request body";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3119";
                readonly message: "Invalid request for PUT /api/v1/devices/runtime-state";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3206";
                readonly message: "Invalid response for PUT /api/v1/devices/runtime-state";
            };
        };
    };
    readonly patchDeviceRuntimeState: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2021";
            readonly message: "An unexpected error occurred while updating the device runtime state.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3209";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E3120";
                readonly message: "Device forbidden while patching runtime state";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E2019";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E2018";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2020";
                readonly message: "Precondition failed";
            };
            readonly JsonPatchError: {
                readonly status: 400;
                readonly code: "E2016";
                readonly message: "Invalid patch operation";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3208";
                readonly message: "Invalid response for PATCH /api/v1/devices/runtime-state";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3141";
                readonly message: "Invalid request for PATCH /api/v1/devices/runtime-state";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3207";
                readonly message: "Invalid device runtime state patch request";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3141";
                readonly message: "Invalid request for PATCH /api/v1/devices/runtime-state";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3208";
                readonly message: "Invalid response for PATCH /api/v1/devices/runtime-state";
            };
        };
    };
    readonly updateDeviceRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2027";
            readonly message: "An unexpected error occurred while updating the device runtime status.";
        };
        readonly byName: {
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E2023";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E2025";
                readonly message: "Device gone";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E2024";
                readonly message: "Device not found";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2026";
                readonly message: "Precondition failed";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3211";
                readonly message: "Invalid response for PUT /api/v1/devices/runtime-status";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2022";
                readonly message: "Invalid request for PUT /api/v1/devices/runtime-status";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3210";
                readonly message: "Invalid request body";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E2022";
                readonly message: "Invalid request for PUT /api/v1/devices/runtime-status";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3211";
                readonly message: "Invalid response for PUT /api/v1/devices/runtime-status";
            };
        };
    };
    readonly patchDeviceRuntimeStatus: {
        readonly default: {
            readonly status: 500;
            readonly code: "E3136";
            readonly message: "An unexpected error occurred while updating the device runtime status.";
        };
        readonly byName: {
            readonly DeviceBadRequestError: {
                readonly status: 400;
                readonly code: "E3214";
                readonly message: "Invalid device request";
            };
            readonly DeviceForbiddenError: {
                readonly status: 403;
                readonly code: "E2029";
                readonly message: "Device forbidden";
            };
            readonly DeviceGoneError: {
                readonly status: 410;
                readonly code: "E3122";
                readonly message: "Device gone while updating runtime status";
            };
            readonly DeviceNotFoundError: {
                readonly status: 404;
                readonly code: "E3121";
                readonly message: "Device not found while updating runtime status";
            };
            readonly DevicePreconditionFailedError: {
                readonly status: 412;
                readonly code: "E2032";
                readonly message: "Precondition failed";
            };
            readonly JsonPatchError: {
                readonly status: 400;
                readonly code: "E2028";
                readonly message: "Invalid patch operation";
            };
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3213";
                readonly message: "Invalid response for PATCH /api/v1/devices/runtime-status";
            };
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3142";
                readonly message: "Invalid request for PATCH /api/v1/devices/runtime-status";
            };
            readonly ZodError: {
                readonly status: 400;
                readonly code: "E3212";
                readonly message: "Invalid device runtime status patch request";
            };
        };
        readonly request: {
            readonly RmmBadRequestError: {
                readonly status: 400;
                readonly code: "E3142";
                readonly message: "Invalid request for PATCH /api/v1/devices/runtime-status";
            };
        };
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3213";
                readonly message: "Invalid response for PATCH /api/v1/devices/runtime-status";
            };
        };
    };
    readonly ping: {
        readonly default: {
            readonly status: 500;
            readonly code: "E2065";
            readonly message: "An unexpected error occurred while pinging the server.";
        };
        readonly byName: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3215";
                readonly message: "Invalid response for GET /api/v1/ping";
            };
        };
        readonly request: {};
        readonly response: {
            readonly RmmBadGatewayError: {
                readonly status: 502;
                readonly code: "E3215";
                readonly message: "Invalid response for GET /api/v1/ping";
            };
        };
    };
};
//# sourceMappingURL=rmm-errors.d.ts.map