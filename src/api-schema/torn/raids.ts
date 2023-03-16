import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const raidStructure: Structure = {
    id: "raid",
    name: "Raid",
    schema: {
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        assaulting_score: { type: Number },
        defending_score: { type: Number },
        started: { type: EpochSeconds },
    },
};
const raidsStructure: Structure = {
    id: "raids",
    name: "Raids",
    schema: {
        "<id>": fromStructure(raidStructure),
    },
};
const structures = [raidsStructure, raidStructure];

const schema: Schema = {
    raids: fromStructure(raidsStructure),
};

const RaidsSelection: Selection = {
    name: "raids",
    description: "All currently ongoing raids.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default RaidsSelection;
