import { EpochSeconds, Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const territoryWarStructure: Structure = {
    id: "territory_war",
    name: "Territory War",
    schema: {
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        started: { type: EpochSeconds },
        ends: { type: EpochSeconds },
    },
};
const territoryWarsStructure: Structure = {
    id: "territory_wars",
    name: "Territory Wars",
    schema: {
        "<territory>": fromStructure(territoryWarStructure),
    },
};
const structures = [territoryWarsStructure, territoryWarStructure];

const schema: Schema = {
    territorywars: fromStructure(territoryWarsStructure),
};

const TerritoryWarsSelection: Selection = {
    name: "territorywars",
    description: "List all ongoing territory wars.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default TerritoryWarsSelection;
