import { Integer } from "@/api-schema/common-types";
import { Selection, Structure } from "@/api-schema/schema.types";
import { applicationsSchema, applicationsStructure, buildApplicationStructure, statusEnum } from "@/api-schema/shared/applications";

const statsStructure: Structure = {
    id: "stats",
    name: "Stats",
    schema: {
        strength: { type: Integer },
        speed: { type: Integer },
        dexterity: { type: Integer },
        defense: { type: Integer },
    },
};

const structures = [applicationsStructure, buildApplicationStructure(statsStructure), statsStructure, statusEnum];

const ApplicationsSelection: Selection = {
    name: "applications",
    description: "List faction applications. Only available with faction API Access and application permissions.",
    access: "limited",
    schema: applicationsSchema,
    structures,
    id: { optional: false },
};

export default ApplicationsSelection;
