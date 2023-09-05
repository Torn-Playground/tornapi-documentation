import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { Structure } from "@/api-schema/schema.types";

export const territoryWarStructure: Structure = {
    id: "territory_war",
    name: "Territory War",
    schema: {
        territory_war_id: { type: Integer },
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        score: { type: Integer },
        required_score: { type: Integer },
        started: { type: EpochSeconds },
        ends: { type: EpochSeconds },
    },
};

export const racketStructure: Structure = {
    id: "territory_racket",
    name: "Racket",
    schema: {
        name: { type: String },
        level: { type: Integer },
        reward: { type: String },
        created: { type: EpochSeconds },
        changed: { type: EpochSeconds },
    },
};
