import { ArrayString, Integer } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    strength: { type: Integer },
    speed: { type: Integer },
    dexterity: { type: Integer },
    defense: { type: Integer },
    total: { type: Integer },
    strength_modifier: { type: Integer },
    defense_modifier: { type: Integer },
    speed_modifier: { type: Integer },
    dexterity_modifier: { type: Integer },
    strength_info: { type: ArrayString },
    defense_info: { type: ArrayString },
    speed_info: { type: ArrayString },
    dexterity_info: { type: ArrayString },
};

const BattleStatsSelection: Selection = {
    name: "battlestats",
    description: "Show your battle stats and the modifiers affecting them.",
    access: "limited",
    schema,
    structures: [],
    id: { optional: false },
};

export default BattleStatsSelection;
