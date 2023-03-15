import { Schema, Structure } from "@/api-schema/schema.types";
import { Integer, IntegerAndString, String } from "@/api-schema/common-types";

export const armoryItemSchema: Schema = {
    ID: { type: Integer },
    name: { type: String },
    type: { type: String },
    quantity: { type: Integer },
};

export const armoryItemStructure: Structure = {
    id: "armory_item",
    name: "Armory Item",
    schema: armoryItemSchema,
};

export const loanableArmoryItemStructure: Structure = {
    id: "loanable_armory_item",
    name: "Loanable Armory Item",
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
