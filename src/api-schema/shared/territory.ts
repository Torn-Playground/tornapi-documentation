import { EpochSeconds, Integer } from "@/api-schema/common-types";
import { Structure } from "@/api-schema/schema.types";

export const territoryWarStructure: Structure = {
    id: "territory_war",
    name: "Territory War",
    schema: {
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        score: { type: Integer },
        score_required: { type: Integer },
        started: { type: EpochSeconds },
        ends: { type: EpochSeconds },
    },
};
