import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

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
    cache: "Global cache of 30 seconds, not able to be bypassed. Requesting your own bazaar does not hit this global cache.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default BazaarSelection;
