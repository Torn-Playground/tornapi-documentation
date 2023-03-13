import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer } from "@/api-schema/common-types";

const stockItemStructure: Structure = {
    id: "stock_item",
    name: "Stock Item",
    schema: {
        cost: { type: Integer },
        rrp: { type: Integer },
        price: { type: Integer },
        in_stock: { type: Integer },
        on_order: { type: Integer },
        sold_amount: { type: Integer },
        sold_worth: { type: Integer },
    },
};
const xStructure: Structure = {
    id: "",
    name: "",
    schema: {
        "<id>": fromStructure(stockItemStructure),
    },
};
const structures = [xStructure, stockItemStructure];

const schema: Schema = {
    cards: fromStructure(xStructure),
};

const SomeSelection: Selection = {
    name: "stock",
    // FIXME - Verify description.
    description: "Show the current stock of the company. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default SomeSelection;
