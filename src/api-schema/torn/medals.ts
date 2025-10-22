import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure, type StructureEnum } from "@/api-schema/schema.types";

const rarityEnum: StructureEnum = {
    id: "rarity",
    name: "Rarity",
    values: ["Very Common", "Common", "Uncommon", "Limited", "Rare", "Very Rare", "Extremely Rare"],
    type: String,
};
const medalStructure: Structure = {
    id: "medal",
    name: "Medal",
    schema: {
        name: { type: String },
        description: { type: String },
        type: { type: String },
        circulation: { type: Integer },
        equipped: { type: String },
        rarity: fromStructure(rarityEnum),
    },
};
const medalsStructure: Structure = {
    id: "medals",
    name: "Medals",
    schema: {
        "<id>": fromStructure(medalStructure),
    },
};
const structures = [medalsStructure, medalStructure, rarityEnum];

const schema: Schema = {
    medals: fromStructure(medalsStructure),
};

const MedalsSelection: Selection = {
    name: "medals",
    description: "List all medals.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default MedalsSelection;
