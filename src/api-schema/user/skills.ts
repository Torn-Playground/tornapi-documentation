import { Integer, String } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    reviving: { type: String, extra: "in Number format, but it's a string" },
    search_for_cash: { type: String, nullable: true, extra: "in Number format, but it's a string; Only present for players that migrated to crimes 2.0." },
    hunting: { type: String, extra: "in Number format, but it's a string" },
    bootlegging: { type: String, nullable: true, extra: "in Number format, but it's a string; Only present for players that migrated to crimes 2.0." },
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
