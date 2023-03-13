import { fromStructure, Structure } from "@/api-schema/schema.types";
import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";

export const warStructure: Structure = {
    id: "war",
    name: "War",
    schema: {
        start: { type: EpochSeconds },
        end: { type: EpochSeconds, extra: "Will be 0 if there the war has yet to finish." },
        target: { type: Integer },
        winner: { type: Number, extra: "Will be 0 if there is no winner yet." },
    },
};
export const rankedWarFactionStructure: Structure = {
    id: "faction",
    name: "Faction",
    schema: {
        name: { type: String },
        score: { type: Integer },
        chain: { type: Integer },
    },
};
export const factionsStructure: Structure = {
    id: "factions",
    name: "Factions",
    schema: {
        "<faction id>": fromStructure(rankedWarFactionStructure),
    },
};
export const rankedWarStructure: Structure = {
    id: "ranked_war",
    name: "Ranked War",
    schema: {
        factions: fromStructure(factionsStructure),
        war: fromStructure(warStructure),
    },
};
export const rankedWarsStructure: Structure = {
    id: "ranked_wars",
    name: "Ranked Wars",
    schema: {
        "<war id>": fromStructure(rankedWarStructure),
    },
};
