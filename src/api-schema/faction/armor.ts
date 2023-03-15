import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer, IntegerAndString } from "@/api-schema/common-types";
import { armoryItemSchema } from "@/api-schema/shared/armory";

const armorStructure: Structure = {
    id: "armor",
    name: "Armor",
    schema: {
        ...armoryItemSchema,
        available: { type: Integer },
        loaned: { type: Integer },
        loaned_to: {
            type: IntegerAndString,
            nullable: true,
            extra: "Integer when there is single player borrowing the item.",
            description: "Comma-seperated ids.",
        },
    },
};
const structures = [armorStructure];

const schema: Schema = {
    armor: fromStructure(armorStructure, { array: true }),
};

const ArmorSelection: Selection = {
    name: "armor",
    description: "View all armor available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default ArmorSelection;
