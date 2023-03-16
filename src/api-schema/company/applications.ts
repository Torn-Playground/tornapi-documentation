import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const statusEnum: StructureEnum<string> = {
    id: "status",
    name: "Status",
    values: ["active", "declined", "withdrawn"],
    type: String,
    incomplete: { missing: "Missing values for expired and accepted applications." },
};
const statsStructure: Structure = {
    id: "stats",
    name: "Stats",
    schema: {
        intelligence: { type: Integer },
        endurance: { type: Integer },
        manual_labor: { type: Integer },
    },
};
const applicationStructure: Structure = {
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
const applicationsStructure: Structure = {
    id: "applications",
    name: "Applications",
    schema: {
        "<id>": fromStructure(applicationStructure),
    },
};
const structures = [applicationsStructure, applicationStructure, statsStructure, statusEnum];

const schema: Schema = {
    applications: fromStructure(applicationsStructure),
};

const ApplicationsSelection: Selection = {
    name: "applications",
    description: "List company applications. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default ApplicationsSelection;
