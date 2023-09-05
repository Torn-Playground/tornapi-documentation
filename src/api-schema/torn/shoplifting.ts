import { Boolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const shopliftingStatusStructure: Structure = {
    id: "shoplifting_status",
    name: "Shoplifting Status",
    schema: {
        title: { type: String },
        disabled: { type: Boolean },
    },
};
const shopliftingStructure: Structure = {
    id: "shoplifting",
    name: "Shoplifting",
    schema: {
        "<subcrime name>": fromStructure(shopliftingStatusStructure, { array: true }),
    },
};
const structures = [shopliftingStructure, shopliftingStatusStructure];

const schema: Schema = {
    shoplifting: fromStructure(shopliftingStructure),
};

const ShopliftingSelection: Selection = {
    name: "shoplifting",
    description: "Check shoplifting status.",
    access: "public",
    schema,
    structures,
    id: { optional: false },
};

export default ShopliftingSelection;
