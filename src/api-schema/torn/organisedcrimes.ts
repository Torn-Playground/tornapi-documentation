import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const organisedCrimeStructure: Structure = {
    id: "organised_crime",
    name: "Organised Crime",
    schema: {
        name: { type: String },
        members: { type: Integer },
        time: { type: Integer, description: "Amount of hours needed for preparation." },
        min_cash: { type: Integer },
        max_cash: { type: Integer },
        min_respect: { type: Integer },
        max_respect: { type: Integer },
    },
};
const organisedCrimesStructure: Structure = {
    id: "organised_crimes",
    name: "Organised Crimes",
    schema: {
        "<id>": fromStructure(organisedCrimeStructure),
    },
};
const structures = [organisedCrimesStructure, organisedCrimeStructure];

const schema: Schema = {
    organisedcrimes: fromStructure(organisedCrimesStructure),
};

const OrganisedCrimesSelection: Selection = {
    name: "organisedcrimes",
    description: "",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default OrganisedCrimesSelection;
