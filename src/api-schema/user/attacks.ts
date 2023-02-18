import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { EpochSeconds, Integer, IntegerAndEmptyString, Number, NumberBoolean, String } from "@/api-schema/common-types";
import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";

const attackResultEnum: StructureEnum<string> = {
    id: "attack_result",
    name: "Attack Result",
    values: ["Attacked", "Mugged", "Hospitalized", "Arrested", "Escape", "Lost", "Assist", "Stalemate", "Timeout", "Interrupted", "Looted", "Special"],
    type: String,
};

const modifiersStructure: Structure = {
    id: "modifiers",
    name: "Modifiers",
    schema: {
        fair_fight: { type: Number },
        war: { type: "1 or 2" },
        retaliation: { type: "1 or 1.5" },
        group_attack: { type: Number },
        overseas: { type: "1 or 1.25" },
        chain_bonus: { type: Number },
    },
};
const attackStructure: Structure = {
    id: "attack",
    name: "Attack",
    schema: {
        code: { type: String },
        timestamp_started: { type: EpochSeconds },
        timestamp_ended: { type: EpochSeconds },
        attacker_id: {
            type: IntegerAndEmptyString,
            extra: "Will be '' (empty string) when stealthed by the attacker.",
        },
        attacker_name: { type: String, extra: "Will be '' (empty string) when stealthed by the attacker." },
        attacker_faction: {
            type: IntegerAndEmptyString,
            extra: "Will be '' (empty string) when stealthed by the attacker.",
        },
        attacker_factionname: { type: String, extra: "Will be '' (empty string) when stealthed by the attacker." },
        defender_id: { type: Integer },
        defender_name: { type: String },
        defender_faction: { type: Integer, extra: "Will be 0 when not in a faction." },
        defender_factionname: { type: String, extra: "Will be '' (empty string) when not in a faction." },
        result: fromStructure(attackResultEnum),
        stealthed: { type: NumberBoolean },
        respect: { type: Number },
        chain: { type: Integer, extra: "Will be 0 when stealthed by the attacker." },
        raid: { type: NumberBoolean },
        ranked_war: { type: NumberBoolean },
        respect_gain: { type: Number },
        respect_loss: { type: Number },
        modifiers: fromStructure(modifiersStructure),
    },
};
const attacksStructure: Structure = {
    id: "attacks",
    name: "Attacks",
    schema: { "<attack id>": fromStructure(attackStructure) },
};

const structures = [attacksStructure, attackStructure, modifiersStructure, attackResultEnum];

const schema: Schema = {
    attacks: fromStructure(attacksStructure),
};

const AttacksSelection: Selection = {
    section: "user",
    name: "attacks",
    description: "Retrieves the last 100 attacks.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default AttacksSelection;
