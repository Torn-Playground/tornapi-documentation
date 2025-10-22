import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Structure, type StructureEnum } from "@/api-schema/schema.types";

export const statusEnum: StructureEnum = {
    id: "status",
    name: "Status",
    values: ["active", "declined", "withdrawn", "accepted"],
    type: String,
    incomplete: { missing: "Missing value for expired applications." },
};

export function buildApplicationStructure(statsStructure: Structure): Structure {
    return {
        id: "application",
        name: "Application",
        schema: {
            userID: { type: Integer },
            name: { type: String },
            level: { type: Integer },
            stats: fromStructure(statsStructure, { nullable: true, extra: "Will be null when stats aren't shared." }),
            message: { type: String },
            expires: { type: EpochSeconds },
            status: fromStructure(statusEnum),
        },
    };
}

export function buildApplicationsStructure(applicationStructure: Structure): Structure {
    return {
        id: "applications",
        name: "Applications",
        schema: {
            "<user id>": fromStructure(applicationStructure),
        },
    };
}

export function buildApplicationsSchema(applicationsStructure: Structure): Schema {
    return { applications: fromStructure(applicationsStructure) };
}
