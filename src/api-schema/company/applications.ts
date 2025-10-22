import { Integer } from "@/api-schema/common-types";
import type { Selection, Structure } from "@/api-schema/schema.types";
import { buildApplicationStructure, buildApplicationsSchema, buildApplicationsStructure, statusEnum } from "@/api-schema/shared/applications";

const statsStructure: Structure = {
    id: "stats",
    name: "Stats",
    schema: {
        intelligence: { type: Integer },
        endurance: { type: Integer },
        manual_labor: { type: Integer },
    },
};

const applicationStructure = buildApplicationStructure(statsStructure);
const applicationsStructure = buildApplicationsStructure(applicationStructure);

const structures = [applicationsStructure, applicationStructure, statsStructure, statusEnum];

const ApplicationsSelection: Selection = {
    name: "applications",
    description: "List company applications. Only available for directors.",
    access: "limited",
    schema: buildApplicationsSchema(applicationsStructure),
    structures,
    id: { optional: false },
};

export default ApplicationsSelection;
