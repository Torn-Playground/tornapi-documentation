import { Integer, Number } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    bootlegging: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    burglary: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    card_skimming: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    cracking: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    disposal: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    graffiti: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    hustling: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    pickpocketing: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    reviving: { type: Number },
    search_for_cash: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    shoplifting: { type: Number, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
    hunting: { type: Number },
    racing: { type: Number },
    player_id: { type: Integer },
};

const SkillsSelection: Selection = {
    name: "skills",
    description: "Show your skill levels.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default SkillsSelection;
