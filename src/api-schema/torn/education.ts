import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { ArrayInteger, ArrayString, Integer, String } from "@/api-schema/common-types";

const resultsStructure: Structure = {
    id: "results",
    name: "Results",
    schema: {
        perk: { type: ArrayString, nullable: true },
        manual_labor: { type: ArrayString, nullable: true },
        intelligence: { type: ArrayString, nullable: true },
        endurance: { type: ArrayString, nullable: true },
    },
};
const educationStructure: Structure = {
    id: "education",
    name: "Education",
    schema: {
        name: { type: String },
        description: { type: String },
        code: { type: String },
        money_cost: { type: Integer },
        tier: { type: Integer },
        duration: { type: Integer },
        results: fromStructure(resultsStructure),
        prerequisites: { type: ArrayInteger },
    },
};
const educationsStructure: Structure = {
    id: "educations",
    name: "Educations",
    schema: {
        "<id>": fromStructure(educationStructure),
    },
};
const structures = [educationsStructure, educationStructure, resultsStructure];

const schema: Schema = {
    education: fromStructure(educationsStructure),
};

const EducationSelection: Selection = {
    name: "education",
    description: "List the existing educations.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default EducationSelection;
