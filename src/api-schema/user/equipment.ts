import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const equippedItemStructure: Structure = {
    id: "equipped_item",
    name: "Equipped Item",
    schema: {
        ID: { type: Integer, description: "ID of the item." },
        UID: { type: Integer, description: "Unique ID of the item." },
        name: { type: String },
        type: { type: String },
        equipped: { type: Integer, description: "Slot where this item is equipped." },
        market_price: { type: Integer },
        quantity: { type: Integer, description: "Will always be 1 single you can only equip a single item." },
    },
};
const structures = [equippedItemStructure];

const schema: Schema = {
    equipment: fromStructure(equippedItemStructure, { array: true }),
};

const EquipmentSelection: Selection = {
    name: "equipment",
    description: "Lists your currently equipped items.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default EquipmentSelection;
