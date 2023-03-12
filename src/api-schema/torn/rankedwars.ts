import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";

const warStructure: Structure = {
    id: "war",
    name: "War",
    schema: {
        start: { type: EpochSeconds },
        end: { type: EpochSeconds, extra: "Will be 0 if there the war has yet to finish." },
        target: { type: Integer },
        winner: { type: Number, extra: "Will be 0 if there is no winner yet." },
    },
};
const factionStructure: Structure = {
    id: "faction",
    name: "Faction",
    schema: {
        name: { type: String },
        score: { type: Integer },
        chain: { type: Integer },
    },
};
const factionsStructure: Structure = {
    id: "factions",
    name: "Factions",
    schema: {
        "<faction id>": fromStructure(factionStructure),
    },
};
const rankedWarStructure: Structure = {
    id: "ranked_war",
    name: "Ranked War",
    schema: {
        factions: fromStructure(factionsStructure),
        war: fromStructure(warStructure),
    },
};
const rankedWarsStructure: Structure = {
    id: "ranked_wars",
    name: "Ranked Wars",
    schema: {
        "<id>": fromStructure(rankedWarStructure),
    },
};
const structures = [rankedWarsStructure, rankedWarStructure, factionsStructure, factionStructure];

const schema: Schema = {
    rankedwars: fromStructure(rankedWarsStructure),
};

const RankedWarsSelection: Selection = {
    name: "rankedwars",
    description: "List all ongoing ranked wars.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default RankedWarsSelection;
