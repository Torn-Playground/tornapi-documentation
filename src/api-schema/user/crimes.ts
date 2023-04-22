import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const criminalrecordStructure: Structure = {
    id: "criminalrecord",
    name: "Criminal Record",
    schema: {
        selling_illegal_products: { type: Integer },
        theft: { type: Integer },
        auto_theft: { type: Integer },
        drug_deals: { type: Integer },
        computer_crimes: { type: Integer },
        murder: { type: Integer },
        fraud_crimes: { type: Integer },
        other: { type: Integer },
        total: { type: Integer },
    },
};
const structures = [criminalrecordStructure];

const schema: Schema = {
    criminalrecord: fromStructure(criminalrecordStructure),
};

const CrimesSelection: Selection = {
    name: "crimes",
    description: "Get the criminal record for a specific player.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default CrimesSelection;
