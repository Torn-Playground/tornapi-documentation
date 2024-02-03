import { EpochSeconds, Integer, Number, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Structure, StructureEnum } from "@/api-schema/schema.types";
import { lastActionStatusEnum } from "@/api-schema/shared/last-action";

export const reviveResultEnum: StructureEnum = {
    id: "revive_result",
    name: "Revive Result",
    values: ["success", "failure"],
    type: String,
};

export const reviveLastActionStructure: Structure = {
    id: "revive_last_action",
    name: "Revive Last Action",
    schema: {
        status: fromStructure(lastActionStatusEnum),
        timestamp: { type: EpochSeconds },
    },
};

const reviveSchema: Schema = {
    timestamp: { type: EpochSeconds },
    result: fromStructure(reviveResultEnum),
    chance: { type: Number },
    reviver_id: { type: Integer },
    reviver_faction: { type: Integer, extra: "Will be 0 when not in a faction." },
    target_id: { type: Integer },
    target_faction: { type: Integer, extra: "Will be 0 when not in a faction." },
    target_hospital_reason: { type: String },
    target_early_discharge: { type: NumberBoolean },
    target_last_action: fromStructure(reviveLastActionStructure),
};
export const reviveStructure: Structure = {
    id: "revive",
    name: "Revive",
    schema: {
        ...reviveSchema,
        reviver_name: { type: String },
        reviver_factionname: { type: String, extra: "Will be '' (empty string) when not in a faction." },
        target_name: { type: String },
        target_factionname: { type: String, extra: "Will be '' (empty string) when not in a faction." },
    },
};
export const revivesStructure: Structure = {
    id: "revives",
    name: "Revives",
    schema: { "<user id>": fromStructure(reviveStructure) },
};
export const reviveFullStructure: Structure = {
    id: "revive_full",
    name: "Revive Full",
    schema: reviveSchema,
};
export const revivesFullStructure: Structure = {
    id: "revives_full",
    name: "Revives Full",
    schema: { "<user id>": fromStructure(reviveFullStructure) },
};
