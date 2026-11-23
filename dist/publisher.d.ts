import * as z from 'zod';
export declare const publisherContracts: {
    publish: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreatePublishRequest">;
            publish_request: z.ZodObject<{
                "@type": z.ZodLiteral<"PublishRequest">;
                tenant_id: z.ZodUUID;
                reference_id: z.ZodString;
                recipe_template: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeTemplate">;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"PlaylistTemplate">;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            media_templates: z.ZodArray<z.ZodObject<{
                                "@type": z.ZodLiteral<"MediaTemplate">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                duration_seconds: z.ZodNumber;
                            }, z.core.$strip>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
                            frequency: z.ZodEnum<{
                                secondly: "secondly";
                                minutely: "minutely";
                                hourly: "hourly";
                                daily: "daily";
                                weekly: "weekly";
                                monthly: "monthly";
                                yearly: "yearly";
                            }>;
                            interval: z.ZodOptional<z.ZodNumber>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                "@type": z.ZodLiteral<"NDay">;
                                day: z.ZodEnum<{
                                    mo: "mo";
                                    tu: "tu";
                                    we: "we";
                                    th: "th";
                                    fr: "fr";
                                    sa: "sa";
                                    su: "su";
                                }>;
                                nthOfPeriod: z.ZodOptional<z.ZodNumber>;
                            }, z.core.$strip>>>;
                            byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                canvas_ids: z.ZodArray<z.ZodUUID>;
                identity: z.ZodString;
                client_request_token: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodObject<{
            publish_id: z.ZodUUID;
            reference_id: z.ZodString;
            timestamp: z.ZodISODateTime;
            '@type': z.ZodLiteral<"CreatePublishResponse">;
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
            response: {
                default: string;
                byName: {
                    PublisherBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    uuids: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            count: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateUUIDsResponse">;
            uuids: z.ZodArray<z.ZodString>;
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
            response: {
                default: string;
                byName: {
                    PublisherBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    job: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            id: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
            publish_id: z.ZodString;
            error: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
            publish_id: z.ZodString;
            status: z.ZodLiteral<"failed">;
            error_code: z.ZodString;
            error_message: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
            publish_id: z.ZodString;
            status: z.ZodLiteral<"succeeded">;
            progress: z.ZodLiteral<100>;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
            publish_id: z.ZodString;
            status: z.ZodLiteral<"rejected">;
            reason: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
            publish_id: z.ZodString;
            status: z.ZodLiteral<"created">;
            progress: z.ZodNumber;
        }, z.core.$strip>]>>;
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
                    PublisherBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    recipe: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        params: z.ZodObject<{
            recipeId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<200 | 202>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeResponse">;
            recipe: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeTemplate">;
                scheduled_playlists: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                    priority: z.ZodNumber;
                    start: z.ZodISODateTime;
                    timeZone: z.ZodString;
                    duration: z.ZodString;
                    playlist: z.ZodObject<{
                        "@type": z.ZodLiteral<"PlaylistTemplate">;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        media_templates: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"MediaTemplate">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            duration_seconds: z.ZodNumber;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                    recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
                        frequency: z.ZodEnum<{
                            secondly: "secondly";
                            minutely: "minutely";
                            hourly: "hourly";
                            daily: "daily";
                            weekly: "weekly";
                            monthly: "monthly";
                            yearly: "yearly";
                        }>;
                        interval: z.ZodOptional<z.ZodNumber>;
                        byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"NDay">;
                            day: z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>;
                            nthOfPeriod: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>>;
                        byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        times: z.ZodOptional<z.ZodNumber>;
                        until: z.ZodOptional<z.ZodISODateTime>;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
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
            response: {
                default: string;
                byName: {
                    PublisherBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
};
//# sourceMappingURL=publisher.d.ts.map