import { EpochSeconds, Integer, IntegerAndEmptyString, Number, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Structure, StructureEnum } from "@/api-schema/schema.types";

export const attackResultEnum: StructureEnum = {
    id: "attack_result",
    name: "Attack Result",
    values: ["Attacked", "Mugged", "Hospitalized", "Arrested", "Escape", "Lost", "Assist", "Stalemate", "Timeout", "Interrupted", "Looted", "Special"],
    type: String,
};

export const modifiersStructure: Structure = {
    id: "modifiers",
    name: "Modifiers",
    schema: {
        fair_fight: { type: Number },
        war: { type: "1 or 2" },
        retaliation: { type: "1 or 1.5" },
        group_attack: { type: Number },
        overseas: { type: "1 or 1.25" },
        chain_bonus: { type: Number },
        warlord_bonus: { type: String, optional: true },
    },
};

const attackSchema: Schema = {
    code: { type: String },
    timestamp_started: { type: EpochSeconds },
    timestamp_ended: { type: EpochSeconds },
    attacker_id: { type: IntegerAndEmptyString, extra: "Will be '' (empty string) when stealthed by the attacker." },
    attacker_faction: {
        type: IntegerAndEmptyString,
        extra: "Will be '' (empty string) when stealthed by the attacker.",
    },
    defender_id: { type: Integer },
    defender_faction: { type: Integer, extra: "Will be 0 when not in a faction." },
    result: fromStructure(attackResultEnum),
    stealthed: { type: NumberBoolean },
    respect: { type: Number },
};
export const attackStructure: Structure = {
    id: "attack",
    name: "Attack",
    schema: {
        ...attackSchema,
        attacker_name: { type: String, extra: "Will be '' (empty string) when stealthed by the attacker." },
        attacker_factionname: { type: String, extra: "Will be '' (empty string) when stealthed by the attacker." },
        defender_name: { type: String },
        defender_factionname: { type: String, extra: "Will be '' (empty string) when not in a faction." },
        chain: { type: Integer, extra: "Will be 0 when stealthed by the attacker." },
        raid: { type: NumberBoolean },
        ranked_war: { type: NumberBoolean },
        respect_gain: { type: Number },
        respect_loss: { type: Number },
        modifiers: fromStructure(modifiersStructure),
    },
};
export const attacksStructure: Structure = {
    id: "attacks",
    name: "Attacks",
    schema: { "<attack id>": fromStructure(attackStructure) },
};
export const attackFullStructure: Structure = {
    id: "attack_full",
    name: "Attack Full",
    schema: attackSchema,
};
export const attacksFullStructure: Structure = {
    id: "attacks_full",
    name: "Attacks Full",
    schema: { "<attack id>": fromStructure(attackFullStructure) },
};
