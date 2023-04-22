import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const bazaarItemStructure: Structure = {
    id: "bazaar_item",
    name: "Bazaar Item",
    schema: {
        ID: { type: Integer },
        UID: { type: Integer, nullable: true, extra: "Only present on weapons and armor." },
        name: { type: String },
        type: { type: String },
        quantity: { type: Integer },
        price: { type: Integer },
        market_price: { type: Integer },
    },
};
const structures = [bazaarItemStructure];

const schema: Schema = {
    bazaar: fromStructure(bazaarItemStructure, { array: true }),
};

const BazaarSelection: Selection = {
    name: "bazaar",
    description: "List all items available from a bazaar, when opened.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default BazaarSelection;
