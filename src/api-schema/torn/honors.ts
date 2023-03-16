import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const rarityEnum: StructureEnum<string> = {
    id: "rarity",
    name: "Rarity",
    values: ["Very Common", "Common", "Uncommon", "Limited", "Rare", "Very Rare", "Extremely Rare"],
    type: String,
};
const honorStructure: Structure = {
    id: "honor",
    name: "Honor",
    schema: {
        name: { type: String },
        description: { type: String },
        type: { type: Integer },
        circulation: { type: Integer, extra: "Will be null for default honors.", nullable: true },
        equipped: { type: String, extra: "Will be null for default honors.", nullable: true },
        rarity: fromStructure(rarityEnum, { nullable: true }),
    },
};
const honorsStructure: Structure = {
    id: "honors",
    name: "honors",
    schema: {
        "<id>": fromStructure(honorStructure),
    },
};
const structures = [honorsStructure, honorStructure, rarityEnum];

const schema: Schema = {
    honors: fromStructure(honorsStructure),
};

const HonorsSelection: Selection = {
    name: "honors",
    description: "List all honors.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default HonorsSelection;
