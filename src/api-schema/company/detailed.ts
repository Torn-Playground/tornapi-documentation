import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const upgradesStructure: Structure = {
    id: "upgrades",
    name: "Upgrades",
    schema: {
        company_size: { type: Integer },
        staffroom_size: { type: String },
        storage_size: { type: String },
        storage_space: { type: Integer },
    },
};
const structures = [upgradesStructure];

const schema: Schema = {
    ID: { type: Integer },
    company_funds: { type: Integer },
    company_bank: { type: Integer },
    popularity: { type: Integer },
    efficiency: { type: Integer },
    environment: { type: Integer },
    trains_available: { type: Integer },
    advertising_budget: { type: Integer },
    upgrades: fromStructure(upgradesStructure),
    value: { type: Integer },
};

const DetailedSelection: Selection = {
    name: "detailed",
    description: "Detailed information about the company. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default DetailedSelection;
