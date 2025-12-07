import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const itemStructure: Structure = {
    id: "shop_item",
    name: "Shop Item",
    schema: {
        name: { type: String },
        type: { type: String },
        price: { type: Integer },
        in_stock: { type: Integer },
    },
};
const inventoryStructure: Structure = {
    id: "shop_inventory",
    name: "Shop Inventory",
    schema: {
        "<item-id>": fromStructure(itemStructure),
    },
};
const shopStructure: Structure = {
    id: "shop",
    name: "Shop",
    schema: {
        name: { type: String },
        inventory: fromStructure(inventoryStructure, { nullable: true }),
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
