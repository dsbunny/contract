// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import * as Rmm from '@dsbunny/rmm-schema';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
import { rmmAdminRouteErrors, rmmDeviceUpdateNotImplemented, rmmRouteErrors } from './rmm-errors.js';
import { definePingContract } from './ping.js';
const headers = z.object({
    'if-match': z.string().optional(), 'if-none-match': z.string().optional(),
    'if-modified-since': z.string().optional(), 'if-unmodified-since': z.string().optional(),
}).optional();
export const rmmEventDataSchema = z.string();
function defineContract(options) {
    const [group, name] = options.name.split('.');
    const routes = group === 'rmmAdmin' ? rmmAdminRouteErrors : rmmRouteErrors;
    const mappings = routes[name];
    if (!mappings)
        throw new Error(`Missing RMM error mappings for ${options.name}`);
    const requestErrors = mappings.request ?? mappings.byName;
    const responseErrors = mappings.response ?? mappings.byName;
    const definitions = [mappings.default, ...Object.values(mappings.byName), ...Object.values(requestErrors), ...Object.values(responseErrors),
        ...(options.name === 'rmmAdmin.updateDevice' ? [rmmDeviceUpdateNotImplemented] : [])];
    const errorMap = Object.fromEntries(definitions.map(definition => [definition.code, { ...definition, data: ErrorResponseSchema }]));
    const toCodes = (map) => Object.fromEntries(Object.entries(map).map(([key, definition]) => [key, definition.code]));
    const routeErrors = {
        default: mappings.default.code, byName: toCodes(mappings.byName),
        request: { default: mappings.default.code, byName: toCodes(requestErrors) },
        response: { default: mappings.default.code, byName: toCodes(responseErrors) },
    };
    const status = ['rmmAdmin.deleteAgent', 'rmmAdmin.deleteDevice'].includes(options.name) ? 204
        : ['rmmAdmin.createDeviceAgent', 'rmm.registerDevice'].includes(options.name) ? 201 : 200;
    const success = status === 204 ? z.object({ status: z.literal(204) })
        : z.object({ status: z.literal(status), body: options.response });
    const output = options.allowNotModified ? z.union([success, z.object({ status: z.literal(304) })]) : success;
    const eventStream = name.endsWith('Events');
    return oc.$meta({ routeErrors }).route({
        method: options.method, path: options.path, operationId: options.name, successStatus: status,
        inputStructure: 'detailed', outputStructure: 'detailed',
        spec: current => {
            const responses = {
                ...current.responses,
                ...(eventStream ? { '200': { description: 'Server-sent events', content: { 'text/event-stream': { schema: { type: 'string' } } } } } : {}),
                '401': { description: 'Unauthorized' },
                ...(current.responses?.['403'] ? {} : { '403': { description: 'Forbidden' } }),
            };
            if (options.name === 'rmmAdmin.updateDevice')
                delete responses['200'];
            return {
                ...current,
                security: group === 'rmmAdmin'
                    ? [{ OAuth2ClientCredentials: [options.method === 'GET' ? 'api:read' : 'api:write'] }]
                    : eventStream ? [{ QueryToken: [] }] : [{ DeviceBearer: [] }],
                responses,
            };
        },
    }).input(options.request).output(output).errors(errorMap);
}
const pingContract = definePingContract(Rmm.RmmPingResponseSchema, 'E2065');
export const rmmAdminContracts = {
    ping: pingContract,
    listAgents: defineContract({
        name: 'rmmAdmin.listAgents', method: 'GET', path: '/api/v1/agents',
        request: z.object({ headers, query: Rmm.ListAgentsQuerySchema }),
        response: Rmm.ListAgentsResponseSchema, allowNotModified: true,
    }),
    getAgent: defineContract({
        name: 'rmmAdmin.getAgent', method: 'GET', path: '/api/v1/agents/{agentId}',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, query: Rmm.GetAgentQuerySchema }),
        response: Rmm.GetAgentResponseSchema, allowNotModified: true,
    }),
    updateAgent: defineContract({
        name: 'rmmAdmin.updateAgent', method: 'PUT', path: '/api/v1/agents/{agentId}',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.UpdateAgentBodySchema }),
        response: Rmm.UpdateAgentResponseSchema,
    }),
    patchAgent: defineContract({
        name: 'rmmAdmin.patchAgent', method: 'PATCH', path: '/api/v1/agents/{agentId}',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.PatchAgentBodySchema }),
        response: Rmm.PatchAgentResponseSchema,
    }),
    deleteAgent: defineContract({
        name: 'rmmAdmin.deleteAgent', method: 'DELETE', path: '/api/v1/agents/{agentId}',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema }),
        response: z.void(),
    }),
    suggestAgents: defineContract({
        name: 'rmmAdmin.suggestAgents', method: 'GET', path: '/api/v2/agents/suggest',
        request: z.object({ headers, query: Rmm.GetAgentSuggestionsQuerySchema }),
        response: Rmm.GetAgentSuggestionsResponseSchema,
    }),
    agentAvailability: defineContract({
        name: 'rmmAdmin.agentAvailability', method: 'GET', path: '/api/v1/agents/availability',
        request: z.object({ headers, query: Rmm.GetAgentAvailabilityQuerySchema }),
        response: Rmm.GetAgentAvailabilityResponseSchema,
    }),
    getAgentDesiredState: defineContract({
        name: 'rmmAdmin.getAgentDesiredState', method: 'GET', path: '/api/v1/agents/{agentId}/desired-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema }),
        response: Rmm.GetAgentStateResponseSchema, allowNotModified: true,
    }),
    updateAgentDesiredState: defineContract({
        name: 'rmmAdmin.updateAgentDesiredState', method: 'PUT', path: '/api/v1/agents/{agentId}/desired-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.UpdateAgentStateBodySchema }),
        response: Rmm.UpdateAgentStateResponseSchema,
    }),
    patchAgentDesiredState: defineContract({
        name: 'rmmAdmin.patchAgentDesiredState', method: 'PATCH', path: '/api/v1/agents/{agentId}/desired-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.PatchAgentStateBodySchema }),
        response: Rmm.PatchAgentStateResponseSchema,
    }),
    getAgentRuntimeState: defineContract({
        name: 'rmmAdmin.getAgentRuntimeState', method: 'GET', path: '/api/v1/agents/{agentId}/runtime-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema }),
        response: Rmm.GetAgentStateResponseSchema, allowNotModified: true,
    }),
    getAgentRuntimeStatus: defineContract({
        name: 'rmmAdmin.getAgentRuntimeStatus', method: 'GET', path: '/api/v1/agents/{agentId}/runtime-status',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema }),
        response: Rmm.GetAgentStatusResponseSchema, allowNotModified: true,
    }),
    listDevices: defineContract({
        name: 'rmmAdmin.listDevices', method: 'GET', path: '/api/v1/devices',
        request: z.object({ headers, query: Rmm.ListDevicesQuerySchema }),
        response: Rmm.ListDevicesResponseSchema, allowNotModified: true,
    }),
    getDevice: defineContract({
        name: 'rmmAdmin.getDevice', method: 'GET', path: '/api/v1/devices/{deviceId}',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema, query: Rmm.GetDeviceQuerySchema }),
        response: Rmm.GetDeviceResponseSchema, allowNotModified: true,
    }),
    updateDevice: defineContract({
        name: 'rmmAdmin.updateDevice', method: 'PUT', path: '/api/v1/devices/{deviceId}',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema }),
        response: z.never(),
    }),
    patchDevice: defineContract({
        name: 'rmmAdmin.patchDevice', method: 'PATCH', path: '/api/v1/devices/{deviceId}',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema, body: Rmm.PatchDeviceBodySchema }),
        response: Rmm.PatchDeviceResponseSchema,
    }),
    deleteDevice: defineContract({
        name: 'rmmAdmin.deleteDevice', method: 'DELETE', path: '/api/v1/devices/{deviceId}',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema }),
        response: z.void(),
    }),
    suggestDevices: defineContract({
        name: 'rmmAdmin.suggestDevices', method: 'GET', path: '/api/v2/devices/suggest',
        request: z.object({ headers, query: Rmm.GetDeviceSuggestionsQuerySchema }),
        response: Rmm.GetDeviceSuggestionsResponseSchema,
    }),
    deviceAvailability: defineContract({
        name: 'rmmAdmin.deviceAvailability', method: 'GET', path: '/api/v1/devices/availability',
        request: z.object({ headers, query: Rmm.GetDeviceAvailabilityQuerySchema }),
        response: Rmm.GetDeviceAvailabilityResponseSchema,
    }),
    getDeviceDesiredState: defineContract({
        name: 'rmmAdmin.getDeviceDesiredState', method: 'GET', path: '/api/v1/devices/{deviceId}/desired-state',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema }),
        response: Rmm.GetDeviceStateResponseSchema, allowNotModified: true,
    }),
    updateDeviceDesiredState: defineContract({
        name: 'rmmAdmin.updateDeviceDesiredState', method: 'PUT', path: '/api/v1/devices/{deviceId}/desired-state',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema, body: Rmm.UpdateDeviceStateBodySchema }),
        response: Rmm.UpdateDeviceStateResponseSchema,
    }),
    patchDeviceDesiredState: defineContract({
        name: 'rmmAdmin.patchDeviceDesiredState', method: 'PATCH', path: '/api/v1/devices/{deviceId}/desired-state',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema, body: Rmm.PatchDeviceStateBodySchema }),
        response: Rmm.PatchDeviceStateResponseSchema,
    }),
    getDeviceRuntimeState: defineContract({
        name: 'rmmAdmin.getDeviceRuntimeState', method: 'GET', path: '/api/v1/devices/{deviceId}/runtime-state',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema }),
        response: Rmm.GetDeviceStateResponseSchema, allowNotModified: true,
    }),
    getDeviceRuntimeStatus: defineContract({
        name: 'rmmAdmin.getDeviceRuntimeStatus', method: 'GET', path: '/api/v1/devices/{deviceId}/runtime-status',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema }),
        response: Rmm.GetDeviceStatusResponseSchema, allowNotModified: true,
    }),
    createDeviceAgent: defineContract({
        name: 'rmmAdmin.createDeviceAgent', method: 'POST', path: '/api/v1/devices/{deviceId}/agent',
        request: z.object({ headers, params: Rmm.DeviceIdParamsSchema, body: Rmm.CreateDeviceAgentBodySchema }),
        response: Rmm.CreateDeviceAgentResponseSchema,
    }),
};
export const rmmContracts = {
    ping: pingContract,
    registerDevice: defineContract({
        name: 'rmm.registerDevice', method: 'POST', path: '/api/v1/devices',
        request: z.object({ headers, body: Rmm.CreateDeviceBodySchema }),
        response: Rmm.CreateDeviceResponseSchema,
    }),
    getAgentDesiredState: defineContract({
        name: 'rmm.getAgentDesiredState', method: 'GET', path: '/api/v1/agents/{agentId}/desired-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema }),
        response: Rmm.GetAgentStateResponseSchema, allowNotModified: true,
    }),
    agentDesiredStateEvents: defineContract({
        name: 'rmm.agentDesiredStateEvents', method: 'GET', path: '/api/v1/agents/{agentId}/desired-state/events',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, query: Rmm.DesiredStateEventsQuerySchema }),
        response: rmmEventDataSchema,
    }),
    getDeviceDesiredState: defineContract({
        name: 'rmm.getDeviceDesiredState', method: 'GET', path: '/api/v1/devices/desired-state',
        request: z.object({ headers }),
        response: Rmm.GetDeviceStateResponseSchema, allowNotModified: true,
    }),
    deviceDesiredStateEvents: defineContract({
        name: 'rmm.deviceDesiredStateEvents', method: 'GET', path: '/api/v1/devices/desired-state/events',
        request: z.object({ headers, query: Rmm.DesiredStateEventsQuerySchema }),
        response: rmmEventDataSchema,
    }),
    updateAgentRuntimeState: defineContract({
        name: 'rmm.updateAgentRuntimeState', method: 'PUT', path: '/api/v1/agents/{agentId}/runtime-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.UpdateAgentStateBodySchema }),
        response: Rmm.UpdateAgentStateResponseSchema,
    }),
    patchAgentRuntimeState: defineContract({
        name: 'rmm.patchAgentRuntimeState', method: 'PATCH', path: '/api/v1/agents/{agentId}/runtime-state',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.PatchAgentStateBodySchema }),
        response: Rmm.PatchAgentStateResponseSchema,
    }),
    updateAgentRuntimeStatus: defineContract({
        name: 'rmm.updateAgentRuntimeStatus', method: 'PUT', path: '/api/v1/agents/{agentId}/runtime-status',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.UpdateAgentStatusBodySchema }),
        response: Rmm.UpdateAgentStatusResponseSchema,
    }),
    patchAgentRuntimeStatus: defineContract({
        name: 'rmm.patchAgentRuntimeStatus', method: 'PATCH', path: '/api/v1/agents/{agentId}/runtime-status',
        request: z.object({ headers, params: Rmm.AgentIdParamsSchema, body: Rmm.PatchAgentStatusBodySchema }),
        response: Rmm.PatchAgentStatusResponseSchema,
    }),
    updateDeviceRuntimeState: defineContract({
        name: 'rmm.updateDeviceRuntimeState', method: 'PUT', path: '/api/v1/devices/runtime-state',
        request: z.object({ headers, body: Rmm.UpdateDeviceStateBodySchema }),
        response: Rmm.UpdateDeviceStateResponseSchema,
    }),
    patchDeviceRuntimeState: defineContract({
        name: 'rmm.patchDeviceRuntimeState', method: 'PATCH', path: '/api/v1/devices/runtime-state',
        request: z.object({ headers, body: Rmm.PatchDeviceStateBodySchema }),
        response: Rmm.PatchDeviceStateResponseSchema,
    }),
    updateDeviceRuntimeStatus: defineContract({
        name: 'rmm.updateDeviceRuntimeStatus', method: 'PUT', path: '/api/v1/devices/runtime-status',
        request: z.object({ headers, body: Rmm.UpdateDeviceStatusBodySchema }),
        response: Rmm.UpdateDeviceStatusResponseSchema,
    }),
    patchDeviceRuntimeStatus: defineContract({
        name: 'rmm.patchDeviceRuntimeStatus', method: 'PATCH', path: '/api/v1/devices/runtime-status',
        request: z.object({ headers, body: Rmm.PatchDeviceStatusBodySchema }),
        response: Rmm.PatchDeviceStatusResponseSchema,
    }),
};
//# sourceMappingURL=rmm.js.map