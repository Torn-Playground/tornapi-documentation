import { Integer } from "@/api-schema/common-types";
import type { Selection, Structure } from "@/api-schema/schema.types";
import { buildApplicationStructure, buildApplicationsSchema, buildApplicationsStructure, statusEnum } from "@/api-schema/shared/applications";

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

const applicationStructure = buildApplicationStructure(statsStructure);
const applicationsStructure = buildApplicationsStructure(applicationStructure);

const structures = [applicationsStructure, applicationStructure, statsStructure, statusEnum];

const ApplicationsSelection: Selection = {
    name: "applications",
    description: "List faction applications. Only available with faction API Access and application permissions.",
    access: "limited",
    schema: buildApplicationsSchema(applicationsStructure),
    structures,
    id: { optional: false },
};

export default ApplicationsSelection;
