import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const itemStructure: Structure = {
    id: "item",
    name: "Item",
    schema: {
        ID: { type: Integer },
        cost: { type: Integer },
        quantity: { type: Integer },
    },
};
const structures = [itemStructure];

const schema: Schema = {
    bazaar: fromStructure(itemStructure, { array: true, nullable: true, extra: "Will be null when there are no bazaar entries." }),
};

const BazaarSelection: Selection = {
    name: "bazaar",
    description: "List the available offers for a single item in bazaars.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default BazaarSelection;
