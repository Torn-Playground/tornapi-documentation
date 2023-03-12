import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { BugReportPending, Integer, Number, String } from "@/api-schema/common-types";

const rarityEnum: StructureEnum<string> = {
    id: "rarity",
    name: "Rarity",
    values: ["Yellow", "Orange", "Red"],
    type: String,
};
const bonusStructure: Structure = {
    id: "bonus",
    name: "Bonus",
    schema: {
        desc: { type: String },
        title: { type: String },
        hoverover: { type: String },
        icon: { type: String },
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
        damage: { type: Number },
        accuracy: { type: Number },
        quality: { type: Number },
        bonuses: fromStructure(bonusesStructure),
    },
};
const itemDetailsStructure: Structure = {
    id: "item_details",
    name: "Item Details",
    schema: {
        ignore: {
            type: BugReportPending,
            description: "Not an actual field, but this selection has not been working so can't actually verify the schema.",
        },
        "<id>": fromStructure(itemDetailStructure),
    },
};
const structures = [itemDetailsStructure, itemDetailStructure, bonusesStructure, bonusStructure];

const schema: Schema = {
    itemdetails: fromStructure(itemDetailsStructure),
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
