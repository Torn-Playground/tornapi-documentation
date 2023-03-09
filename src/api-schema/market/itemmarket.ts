import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer } from "@/api-schema/common-types";

const itemStructure: Structure = {
    id: "item",
    name: "Item",
    schema: {
        ID: { type: Integer },
        cost: { type: Integer },
        quantity: { type: Integer, extra: "Items on the item market are always a single item (1)." },
    },
};
const structures = [itemStructure];

const schema: Schema = {
    property: fromStructure(itemStructure, { array: true, nullable: false }),
};

const ItemMarketSelection: Selection = {
    name: "itemmarket",
    description: "List the available offers for a single item on the item market.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default ItemMarketSelection;
