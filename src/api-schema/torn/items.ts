import { Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const coverageStructure: Structure = {
    id: "coverage",
    name: "Coverage",
    schema: {
        "Full Body Coverage": { type: Number },
        "Heart Coverage": { type: Number },
        "Stomach Coverage": { type: Number },
        "Chest Coverage": { type: Number },
        "Arm Coverage": { type: Number },
        "Leg Coverage": { type: Number },
        "Groin Coverage": { type: Number },
        "Hand Coverage": { type: Number },
        "Foot Coverage": { type: Number },
        "Head Coverage": { type: Number },
        "Throat Coverage": { type: Number },
    },
};
const itemStructure: Structure = {
    id: "item",
    name: "Item",
    schema: {
        name: { type: String },
        description: { type: String },
        effect: { type: String },
        requirement: { type: String },
        type: { type: String },
        weapon_type: { type: String, nullable: true },
        buy_price: { type: Integer },
        sell_price: { type: Integer },
        market_value: { type: Integer },
        circulation: { type: Integer },
        image: { type: String },
        coverage: fromStructure(coverageStructure, { nullable: true }),
    },
};
const itemsStructure: Structure = {
    id: "items",
    name: "Items",
    schema: {
        "<id>": fromStructure(itemStructure),
    },
};
const structures = [itemsStructure, itemStructure, coverageStructure];

const schema: Schema = {
    items: fromStructure(itemsStructure),
};

const ItemsSelection: Selection = {
    name: "items",
    description: "List all items.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default ItemsSelection;
