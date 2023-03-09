import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer, String } from "@/api-schema/common-types";

const itemStructure: Structure = {
    id: "item",
    name: "Item",
    schema: {
        name: { type: String },
        type: { type: String },
        price: { type: Integer },
        in_stock: { type: Integer },
    },
};
const inventoryStructure: Structure = {
    id: "inventory",
    name: "Inventory",
    schema: {
        "<item-id>": fromStructure(itemStructure),
    },
};
const shopStructure: Structure = {
    id: "shop",
    name: "Shop",
    schema: {
        name: { type: String },
        inventory: fromStructure(inventoryStructure, { nullable: true, array: false }),
    },
};
const cityShopsStructure: Structure = {
    id: "cityshops",
    name: "City Shops",
    schema: {
        "<shop-id>": fromStructure(shopStructure),
    },
};
const structures = [cityShopsStructure, shopStructure, inventoryStructure, itemStructure];

const schema: Schema = {
    cityshops: fromStructure(cityShopsStructure),
};

const CityShopsSelection: Selection = {
    name: "cityshops",
    description: "View the stock of city shops.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default CityShopsSelection;
