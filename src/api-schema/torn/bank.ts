import { Number } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const bankStructure: Structure = {
    id: "bank",
    name: "Bank",
    schema: {
        "1w": { type: Number },
        "2w": { type: Number },
        "1m": { type: Number },
        "2m": { type: Number },
        "3m": { type: Number },
    },
};
const structures = [bankStructure];

const schema: Schema = {
    bank: fromStructure(bankStructure),
};

const BankSelection: Selection = {
    name: "bank",
    description: "See the bank investment ROI rates.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default BankSelection;
