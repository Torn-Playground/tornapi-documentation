import { Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const rarityEnum: StructureEnum<string> = {
    id: "rarity",
    name: "Rarity",
    values: ["None", "Yellow", "Orange", "Red"],
    type: String,
};
const bonusStructure: Structure = {
    id: "bonus",
    name: "Bonus",
    schema: {
        bonus: { type: String },
        description: { type: String },
    },
};
const bonusesStructure: Structure = {
    id: "bonuses",
    name: "Bonuses",
    schema: {
        "<bonus id>": fromStructure(bonusStructure),
    },
};
const itemDetailStructure: Structure = {
    id: "item_detail",
    name: "Item Detail",
    schema: {
        ID: { type: Integer },
        UID: { type: Integer },
        name: { type: String },
        type: { type: String },
        rarity: fromStructure(rarityEnum),
        damage: { type: Number, nullable: true },
        accuracy: { type: Number, nullable: true },
        armor: { type: Number, nullable: true },
        quality: { type: Number },
        bonuses: fromStructure(bonusesStructure, { nullable: true }),
    },
};
const structures = [itemDetailStructure, bonusesStructure, bonusStructure];

const schema: Schema = {
    itemdetails: fromStructure(itemDetailStructure),
};

const ItemDetailsSelection: Selection = {
    name: "itemdetails",
    description: "View details for a specific weapon or armor piece, including bonuses.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default ItemDetailsSelection;
