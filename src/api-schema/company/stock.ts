import { Integer } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

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
const stockStructure: Structure = {
    id: "stock",
    name: "Stock",
    schema: {
        "<stock item name>": fromStructure(stockItemStructure),
    },
};
const structures = [stockStructure, stockItemStructure];

const schema: Schema = {
    company_stock: fromStructure(stockStructure),
};

const StockSelection: Selection = {
    name: "stock",
    description: "Show the current stock of the company. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default StockSelection;
