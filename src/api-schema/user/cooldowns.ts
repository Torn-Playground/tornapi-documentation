import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const cooldownsStructure: Structure = {
    id: "cooldowns",
    name: "Cooldowns",
    schema: {
        drug: { type: Integer, description: "Seconds until you can take a new drug." },
        medical: { type: Integer, description: "Seconds until you can take a new medical item." },
        booster: { type: Integer, description: "Seconds until you can take a new booster." },
    },
};
const structures = [cooldownsStructure];

const schema: Schema = {
    cooldowns: fromStructure(cooldownsStructure),
};

const CooldownsSelection: Selection = {
    name: "cooldowns",
    description: "List your cooldown times.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
};

export default CooldownsSelection;
