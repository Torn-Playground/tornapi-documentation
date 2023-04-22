import { Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const inventoryStructure: Structure = {
    id: "inventory_item",
    name: "Inventory Item",
    schema: {
        ID: { type: Integer },
        UID: { type: Integer, nullable: true, extra: "Only present on weapons and armor." },
        name: { type: String },
        type: { type: String },
        equipped: { type: NumberBoolean },
        market_price: { type: Integer },
        quantity: { type: Integer },
    },
};
const structures = [inventoryStructure];

const schema: Schema = {
    inventory: fromStructure(inventoryStructure, { array: true }),
};

const InventorySelection: Selection = {
    name: "inventory",
    description: "Get all items that are currently in your inventory.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default InventorySelection;
