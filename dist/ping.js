// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { oc } from '@orpc/contract';
import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
export function definePingContract(response, errorCode) {
    const errorMessage = 'An unexpected error occurred while pinging the server.';
    const routeErrors = {
        default: errorCode,
        byName: {},
        response: { default: errorCode, byName: {} },
    };
    const errorMap = {
        [errorCode]: {
            status: 500,
            message: errorMessage,
            data: ErrorResponseSchema,
        },
    };
    const contract = oc.$meta({ routeErrors }).route({
        method: 'GET',
        path: '/api/v1/ping',
        operationId: 'ping',
        summary: 'Ping the service.',
        successStatus: 200,
        inputStructure: 'detailed',
        outputStructure: 'detailed',
        spec: current => ({ ...current, security: [] }),
    }).input(z.object({})).output(z.object({
        status: z.literal(200).meta({ description: 'OK' }),
        body: response,
    })).errors(errorMap);
    return contract;
}
//# sourceMappingURL=ping.js.map