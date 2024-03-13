import { Integer, String } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    bootlegging: { type: String, nullable: true, extra: "in Number format, but it's a string; Only present for players that migrated to crimes 2.0." },
    burglary: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    card_skimming: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    cracking: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    disposal: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    forgery: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    graffiti: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    hustling: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    pickpocketing: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    reviving: { type: String, extra: "in Number format, but it's a string" },
    search_for_cash: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    shoplifting: { type: String, nullable: true, extra: "in Number format, Only present for players that migrated to crimes 2.0." },
    hunting: { type: String, extra: "in Number format, but it's a string" },
    racing: { type: String, extra: "in Number format, but it's a string" },
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
