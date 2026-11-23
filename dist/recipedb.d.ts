import * as z from 'zod';
import { ErrorResponseSchema } from '@dsbunny/error-schema';
type ErrorDefinition = {
    code: string;
    status: number;
    message: string;
};
export declare const recipeDbContracts: {
    getRecipe: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            recipe_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            recipe_id: z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeResponse">;
            recipe_output: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputRecord">;
                tenant_id: z.ZodUUID;
                recipe_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                recipe_data: z.ZodObject<{
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    recipe_id: z.ZodUUID;
                    publish_id: z.ZodUUID;
                    publisher_identity: z.ZodString;
                    canvas_id: z.ZodUUID;
                    viewport_id: z.ZodString;
                    create_timestamp: z.ZodISODateTime;
                    modify_timestamp: z.ZodISODateTime;
                    expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
                    "@type": z.ZodLiteral<"Recipe">;
                }, z.core.$strip>;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                s3_uri: z.ZodString;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeResponse">;
            recipe_output: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputRecord">;
                tenant_id: z.ZodUUID;
                recipe_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                recipe_data: z.ZodObject<{
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    recipe_id: z.ZodUUID;
                    publish_id: z.ZodUUID;
                    publisher_identity: z.ZodString;
                    canvas_id: z.ZodUUID;
                    viewport_id: z.ZodString;
                    create_timestamp: z.ZodISODateTime;
                    modify_timestamp: z.ZodISODateTime;
                    expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
                    "@type": z.ZodLiteral<"Recipe">;
                }, z.core.$strip>;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                s3_uri: z.ZodString;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    getRecipeLink: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            recipe_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            recipe_id: z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeLinkResponse">;
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                ref_id: z.ZodOptional<z.ZodString>;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeLinkResponse">;
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                ref_id: z.ZodOptional<z.ZodString>;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    getRecipeInput: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            recipe_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            recipe_id: z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeInputResponse">;
            recipe_input: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeInputRecord">;
                tenant_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                publisher_identity: z.ZodString;
                canvas_viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"CanvasViewport">;
                    canvas_id: z.ZodUUID;
                    viewport_ids: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                playlist_ids: z.ZodArray<z.ZodUUID>;
                asset_ids: z.ZodArray<z.ZodUUID>;
                recipe_data: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeBase">;
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetRecipeInputResponse">;
            recipe_input: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeInputRecord">;
                tenant_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                publisher_identity: z.ZodString;
                canvas_viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"CanvasViewport">;
                    canvas_id: z.ZodUUID;
                    viewport_ids: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                playlist_ids: z.ZodArray<z.ZodUUID>;
                asset_ids: z.ZodArray<z.ZodUUID>;
                recipe_data: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeBase">;
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listInputs: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
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
            validity: z.ZodOptional<z.ZodString>;
            recipe_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            publish_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            canvas_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            playlist_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            asset_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListRecipeInputsResponse">;
            recipe_inputs: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeInputRecord">;
                tenant_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                publisher_identity: z.ZodString;
                canvas_viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"CanvasViewport">;
                    canvas_id: z.ZodUUID;
                    viewport_ids: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                playlist_ids: z.ZodArray<z.ZodUUID>;
                asset_ids: z.ZodArray<z.ZodUUID>;
                recipe_data: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeBase">;
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListRecipeInputsResponse">;
            recipe_inputs: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeInputRecord">;
                tenant_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                publisher_identity: z.ZodString;
                canvas_viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"CanvasViewport">;
                    canvas_id: z.ZodUUID;
                    viewport_ids: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                playlist_ids: z.ZodArray<z.ZodUUID>;
                asset_ids: z.ZodArray<z.ZodUUID>;
                recipe_data: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeBase">;
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listRecipes: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
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
            recipe_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            publish_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            canvas_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListRecipesResponse">;
            recipes: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputRecord">;
                tenant_id: z.ZodUUID;
                recipe_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                recipe_data: z.ZodObject<{
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    recipe_id: z.ZodUUID;
                    publish_id: z.ZodUUID;
                    publisher_identity: z.ZodString;
                    canvas_id: z.ZodUUID;
                    viewport_id: z.ZodString;
                    create_timestamp: z.ZodISODateTime;
                    modify_timestamp: z.ZodISODateTime;
                    expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
                    "@type": z.ZodLiteral<"Recipe">;
                }, z.core.$strip>;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                s3_uri: z.ZodString;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListRecipesResponse">;
            recipes: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputRecord">;
                tenant_id: z.ZodUUID;
                recipe_id: z.ZodUUID;
                publish_id: z.ZodUUID;
                recipe_data: z.ZodObject<{
                    transition: z.ZodObject<{
                        "@type": z.ZodLiteral<"Transition">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>;
                    scheduled_playlists: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"ScheduledPlaylist">;
                        scheduled_playlist_id: z.ZodUUID;
                        priority: z.ZodNumber;
                        start: z.ZodISODateTime;
                        timeZone: z.ZodString;
                        duration: z.ZodString;
                        playlist: z.ZodObject<{
                            "@type": z.ZodLiteral<"Playlist">;
                            playlist_id: z.ZodUUID;
                            name: z.ZodString;
                            tags: z.ZodArray<z.ZodString>;
                            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"CustomElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                duration: z.ZodNumber;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLImageElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                                }, z.core.$strip>, z.ZodObject<{
                                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                                    asset_id: z.ZodUUID;
                                    version: z.ZodNumber;
                                    name: z.ZodString;
                                    href: z.ZodURL;
                                    expires: z.ZodOptional<z.ZodISODateTime>;
                                    size: z.ZodNumber;
                                    hash: z.ZodObject<{
                                        "@type": z.ZodLiteral<"HashValue">;
                                        method: z.ZodLiteral<"SHA256">;
                                        hex: z.ZodString;
                                    }, z.core.$strip>;
                                    md5: z.ZodString;
                                    integrity: z.ZodString;
                                }, z.core.$strip>]>>>;
                            }, z.core.$strip>]>>;
                        }, z.core.$strip>;
                        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"RecurrenceRule">;
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
                            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                                mo: "mo";
                                tu: "tu";
                                we: "we";
                                th: "th";
                                fr: "fr";
                                sa: "sa";
                                su: "su";
                            }>>;
                            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                            timeZone: z.ZodOptional<z.ZodString>;
                            times: z.ZodOptional<z.ZodNumber>;
                            until: z.ZodOptional<z.ZodISODateTime>;
                        }, z.core.$strip>>>;
                        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                        onceOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        enableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                        disableOn: z.ZodOptional<z.ZodObject<{
                            "@type": z.ZodLiteral<"DOMEvent">;
                            type: z.ZodString;
                            match: z.ZodObject<{
                                "@type": z.ZodLiteral<"MatchPattern">;
                                code: z.ZodString;
                            }, z.core.$strip>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>>>;
                    cluster: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"Cluster">;
                        label: z.ZodString;
                        cluster_id: z.ZodUUID;
                        peers: z.ZodArray<z.ZodUUID>;
                        iceServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"IceServer">;
                            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                            username: z.ZodOptional<z.ZodString>;
                            credential: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        signalingServers: z.ZodArray<z.ZodObject<{
                            "@type": z.ZodLiteral<"SignalingServer">;
                            url: z.ZodURL;
                        }, z.core.$strip>>;
                        enableLoopback: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    recipe_id: z.ZodUUID;
                    publish_id: z.ZodUUID;
                    publisher_identity: z.ZodString;
                    canvas_id: z.ZodUUID;
                    viewport_id: z.ZodString;
                    create_timestamp: z.ZodISODateTime;
                    modify_timestamp: z.ZodISODateTime;
                    expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
                    "@type": z.ZodLiteral<"Recipe">;
                }, z.core.$strip>;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                s3_uri: z.ZodString;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
                expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
                is_expired: z.ZodBoolean;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    createRecipe: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateRecipeRequest">;
            tenant_id: z.ZodUUID;
            recipe_input: z.ZodObject<{
                transition: z.ZodObject<{
                    "@type": z.ZodLiteral<"Transition">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>;
                scheduled_playlists: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"ScheduledPlaylist">;
                    scheduled_playlist_id: z.ZodUUID;
                    priority: z.ZodNumber;
                    start: z.ZodISODateTime;
                    timeZone: z.ZodString;
                    duration: z.ZodString;
                    playlist: z.ZodObject<{
                        "@type": z.ZodLiteral<"Playlist">;
                        playlist_id: z.ZodUUID;
                        name: z.ZodString;
                        tags: z.ZodArray<z.ZodString>;
                        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"CustomElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            duration: z.ZodNumber;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLImageElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLVideoElement">;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                            }, z.core.$strip>, z.ZodObject<{
                                "@type": z.ZodLiteral<"HTMLScriptElement">;
                                asset_id: z.ZodUUID;
                                version: z.ZodNumber;
                                name: z.ZodString;
                                href: z.ZodURL;
                                expires: z.ZodOptional<z.ZodISODateTime>;
                                size: z.ZodNumber;
                                hash: z.ZodObject<{
                                    "@type": z.ZodLiteral<"HashValue">;
                                    method: z.ZodLiteral<"SHA256">;
                                    hex: z.ZodString;
                                }, z.core.$strip>;
                                md5: z.ZodString;
                                integrity: z.ZodString;
                            }, z.core.$strip>]>>>;
                        }, z.core.$strip>]>>;
                    }, z.core.$strip>;
                    recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"RecurrenceRule">;
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
                        firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                            mo: "mo";
                            tu: "tu";
                            we: "we";
                            th: "th";
                            fr: "fr";
                            sa: "sa";
                            su: "su";
                        }>>;
                        byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                        byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                        timeZone: z.ZodOptional<z.ZodString>;
                        times: z.ZodOptional<z.ZodNumber>;
                        until: z.ZodOptional<z.ZodISODateTime>;
                    }, z.core.$strip>>>;
                    recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                    onceOn: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"DOMEvent">;
                        type: z.ZodString;
                        match: z.ZodObject<{
                            "@type": z.ZodLiteral<"MatchPattern">;
                            code: z.ZodString;
                        }, z.core.$strip>;
                    }, z.core.$strip>>;
                    enableOn: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"DOMEvent">;
                        type: z.ZodString;
                        match: z.ZodObject<{
                            "@type": z.ZodLiteral<"MatchPattern">;
                            code: z.ZodString;
                        }, z.core.$strip>;
                    }, z.core.$strip>>;
                    disableOn: z.ZodOptional<z.ZodObject<{
                        "@type": z.ZodLiteral<"DOMEvent">;
                        type: z.ZodString;
                        match: z.ZodObject<{
                            "@type": z.ZodLiteral<"MatchPattern">;
                            code: z.ZodString;
                        }, z.core.$strip>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>>>;
                cluster: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"Cluster">;
                    label: z.ZodString;
                    cluster_id: z.ZodUUID;
                    peers: z.ZodArray<z.ZodUUID>;
                    iceServers: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"IceServer">;
                        urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                        username: z.ZodOptional<z.ZodString>;
                        credential: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    signalingServers: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"SignalingServer">;
                        url: z.ZodURL;
                    }, z.core.$strip>>;
                    enableLoopback: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                "@type": z.ZodLiteral<"RecipeInput">;
                publish_id: z.ZodUUID;
                publisher_identity: z.ZodString;
                canvas_viewports: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"CanvasViewport">;
                    canvas_id: z.ZodUUID;
                    viewport_ids: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            expires: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateRecipeResponse">;
            recipe_outputs: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputDescriptor">;
                canvas_id: z.ZodUUID;
                viewport_id: z.ZodString;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreateRecipeResponse">;
            recipe_outputs: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeOutputDescriptor">;
                canvas_id: z.ZodUUID;
                viewport_id: z.ZodString;
                recipe_link: z.ZodObject<{
                    "@type": z.ZodLiteral<"RecipeLink">;
                    recipe_id: z.ZodUUID;
                    ref_id: z.ZodOptional<z.ZodString>;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    suggestPlaylist: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            q: z.ZodOptional<z.ZodString>;
            c: z.ZodOptional<z.ZodString>;
            t: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodOptional<z.ZodLiteral<"GetPlaylistSuggestionsResponse">>;
            c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
            s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodOptional<z.ZodLiteral<"GetPlaylistSuggestionsResponse">>;
            c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
            s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    playlistAvailability: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        query: z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetPlaylistAvailabilityResponse">;
            is_available: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetPlaylistAvailabilityResponse">;
            is_available: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    getPlaylist: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            playlist_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            playlist_id: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetPlaylistResponse">;
            playlist_record: z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"GetPlaylistResponse">;
            playlist_record: z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    patchPlaylist: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            playlist_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            playlist_id: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchPlaylistRequest">;
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
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchPlaylistResponse">;
            playlist_record: z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"PatchPlaylistResponse">;
            playlist_record: z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    deletePlaylist: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        params: z.ZodObject<{
            playlist_id: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            playlist_id: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodVoid;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodVoid;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    listPlaylists: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
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
            id: z.ZodOptional<z.ZodString>;
            playlist_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
            q: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListPlaylistsResponse">;
            playlist_records: z.ZodArray<z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"ListPlaylistsResponse">;
            playlist_records: z.ZodArray<z.ZodObject<{
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistRecord">;
                tenant_id: z.ZodUUID;
                create_timestamp: z.ZodISODateTime;
                modify_timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            next_token: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    createPlaylist: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreatePlaylistRequest">;
            tenant_id: z.ZodUUID;
            playlist_input: z.ZodObject<{
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
                "@type": z.ZodLiteral<"PlaylistInput">;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreatePlaylistResponse">;
            playlist_id: z.ZodUUID;
            create_timestamp: z.ZodISODateTime;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"CreatePlaylistResponse">;
            playlist_id: z.ZodUUID;
            create_timestamp: z.ZodISODateTime;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
    queryPlaylistByTemplate: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        headers: z.ZodOptional<z.ZodObject<{
            'if-match': z.ZodOptional<z.ZodString>;
            'if-none-match': z.ZodOptional<z.ZodString>;
            'if-modified-since': z.ZodOptional<z.ZodString>;
            'if-unmodified-since': z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"QueryPlaylistByTemplateRequest">;
            tenant_id: z.ZodUUID;
            playlist_template: z.ZodObject<{
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
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"QueryPlaylistByTemplateResponse">;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip> | z.ZodUnion<readonly [z.ZodObject<{
        status: z.ZodLiteral<204>;
    }, z.core.$strip> | z.ZodObject<{
        status: z.ZodLiteral<200 | 201>;
        body: z.ZodObject<{
            '@type': z.ZodLiteral<"QueryPlaylistByTemplateResponse">;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<304>;
    }, z.core.$strip>]>, import("@orpc/contract").MergedErrorMap<Record<never, never>, Record<string, ErrorDefinition & {
        data: typeof ErrorResponseSchema;
    }>>, {
        routeErrors: {
            default: string;
            byName: Record<string, string>;
            request: {
                default: string;
                byName: {
                    RecipeDbBadRequestError: string;
                };
            };
            response: {
                default: string;
                byName: {
                    RecipeDbBadGatewayError: string;
                };
            };
        };
    } & Record<never, never>>;
};
export {};
//# sourceMappingURL=recipedb.d.ts.map