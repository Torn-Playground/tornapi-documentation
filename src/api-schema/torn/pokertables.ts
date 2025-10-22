import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const pokerTableStructure: Structure = {
    id: "pokertable",
    name: "Poker Table",
    schema: {
        name: { type: String },
        big_blind: { type: Integer },
        small_blind: { type: Integer },
        speed: { type: Integer },
        current_players: { type: Integer },
        maximum_players: { type: Integer },
    },
};
const pokerTablesStructure: Structure = {
    id: "pokertables",
    name: "Poker Tables",
    schema: {
        "<id>": fromStructure(pokerTableStructure),
    },
};
const structures = [pokerTablesStructure, pokerTableStructure];

const schema: Schema = {
    pokertables: fromStructure(pokerTablesStructure),
};

const PokerTablesSelection: Selection = {
    name: "pokertables",
    description: "List the different poker tables.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default PokerTablesSelection;
