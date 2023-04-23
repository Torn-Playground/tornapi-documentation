import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Structure, StructureEnum } from "@/api-schema/schema.types";

export const statusEnum: StructureEnum<string> = {
    id: "status",
    name: "Status",
    values: ["active", "declined", "withdrawn"],
    type: String,
    incomplete: { missing: "Missing values for expired and accepted applications." },
};

export function buildApplicationStructure(statsStructure: Structure): Structure {
    return {
        id: "application",
        name: "Application",
        schema: {
            userID: { type: Integer },
            name: { type: String },
            level: { type: Integer },
            stats: fromStructure(statsStructure, { nullable: true }),
            message: { type: String },
            expires: { type: EpochSeconds },
            status: fromStructure(statusEnum),
        },
    };
}

export const applicationsStructure: Structure = {
    id: "applications",
    name: "Applications",
    schema: {
        "<user id>": fromStructure({ id: "application", name: "Application", type: "object" }),
    },
};

export const applicationsSchema: Schema = { applications: fromStructure(applicationsStructure) };
