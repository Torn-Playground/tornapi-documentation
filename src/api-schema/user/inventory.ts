import { String } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    inventory: { type: String, description: '"The inventory selection is no longer available"' },
};

const InventorySelection: Selection = {
    name: "inventory",
    description: "Discontinued; previously got all items that were in your inventory.",
    warning: "Should not be used, as it's no longer providing the information.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default InventorySelection;
