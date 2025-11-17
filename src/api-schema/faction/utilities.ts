import { Integer, IntegerAndString } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { armoryItemSchema } from "@/api-schema/shared/armory";

const utilitiesStructure: Structure = {
    id: "utility",
    name: "Utility",
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
const structures = [utilitiesStructure];

const schema: Schema = {
    utilities: fromStructure(utilitiesStructure, { array: true }),
};

const UtilitiesSelection: Selection = {
    name: "utilities",
    description: "View all utility items available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default UtilitiesSelection;
