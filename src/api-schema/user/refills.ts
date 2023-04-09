import { Boolean, Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const rootStructure: Structure = {
    id: "refills",
    name: "Refills",
    schema: {
        energy_refill_used: { type: Boolean },
        nerve_refill_used: { type: Boolean },
        token_refill_used: { type: Boolean },
        special_refills_available: { type: Integer },
    },
};
const structures = [rootStructure];

const schema: Schema = {
    refills: fromStructure(rootStructure),
};

const RefillsSelection: Selection = {
    name: "refills",
    description: "Get your refill status.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default RefillsSelection;
