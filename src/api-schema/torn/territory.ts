import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { ArrayString, EpochSeconds, Integer, String } from "@/api-schema/common-types";

const warStructure: Structure = {
    id: "war",
    name: "War",
    schema: {
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        started: { type: EpochSeconds },
        ends: { type: EpochSeconds },
    },
};
const territoryStructure: Structure = {
    id: "territory",
    name: "Territory",
    schema: {
        sector: { type: Integer },
        size: { type: Integer },
        density: { type: Integer },
        slots: { type: Integer },
        daily_respect: { type: Integer },
        faction: { type: Integer },
        coordinate_x: { type: String },
        coordinate_y: { type: String },
        neighbors: { type: ArrayString },
        war: fromStructure(warStructure, { nullable: true, extra: "Only present if there is war ongoing." }),
    },
};
const territoriesStructure: Structure = {
    id: "territories",
    name: "Territories",
    schema: {
        "<territory>": fromStructure(territoryStructure),
    },
};
const structures = [territoriesStructure, territoryStructure, warStructure];

const schema: Schema = {
    territory: fromStructure(territoriesStructure, {
        extra: "Will be null if the territory does not exist. Providing no territory will give a warning in a string.",
    }),
};

const TerritorySelection: Selection = {
    name: "territory",
    description: "Details for a specific territory.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default TerritorySelection;
