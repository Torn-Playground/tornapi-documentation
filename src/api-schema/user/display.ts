import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const displayItemStructure: Structure = {
    id: "display_item",
    name: "Display Item",
    schema: {
        ID: { type: Integer },
        UID: { type: Integer, nullable: true, extra: "Only present on weapons and armor." },
        name: { type: String },
        type: { type: String },
        quantity: { type: Integer },
        circulation: { type: Integer },
        market_price: { type: Integer },
    },
};
const structures = [displayItemStructure];

const schema: Schema = {
    display: fromStructure(displayItemStructure, { array: true }),
};

const DisplaySelection: Selection = {
    name: "display",
    description: "List all items available from a display case.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default DisplaySelection;
