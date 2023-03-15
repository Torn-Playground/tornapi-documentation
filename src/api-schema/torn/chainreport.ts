import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { BugReportPending, EpochSeconds, Integer, Number } from "@/api-schema/common-types";

const bonusStructure: Structure = {
    id: "bonus_hit",
    name: "Bonus Hit",
    schema: {
        chain: { type: Integer },
        attacker: { type: Integer },
        defender: { type: Integer },
        respect: { type: Integer },
    },
};
const memberStructure: Structure = {
    id: "member",
    name: "Member",
    schema: {
        userID: { type: Integer },
        attacks: { type: Integer },
        respect: { type: Number },
        avg: { type: Number },
        leave: { type: Integer },
        mug: { type: Integer },
        hosp: { type: Integer },
        war: { type: Integer },
        bonus: { type: Integer },
        assist: { type: Integer },
        retal: { type: Integer },
        overseas: { type: Integer },
        draw: { type: Integer },
        escape: { type: Integer },
        loss: { type: Integer },
        best: { type: Number },
        level: { type: Integer },
        factionID: { type: Integer },
    },
};
const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(memberStructure),
    },
};
const chainReportStructure: Structure = {
    id: "chain_report",
    name: "Chain Report",
    schema: {
        success: { type: BugReportPending, nullable: true, extra: "Only present if the id is correct." },
        msg: { type: BugReportPending, nullable: true, extra: "Only present if the id is correct." },
        factionID: { type: Integer, nullable: true },
        chain: { type: Integer, nullable: true },
        start: { type: EpochSeconds, nullable: true },
        end: { type: EpochSeconds, nullable: true },
        leave: { type: Integer, nullable: true },
        mug: { type: Integer, nullable: true },
        hospitalize: { type: Integer, nullable: true },
        assists: { type: Integer, nullable: true },
        overseas: { type: Integer, nullable: true },
        draws: { type: Integer, nullable: true },
        escapes: { type: Integer, nullable: true },
        losses: { type: Integer, nullable: true },
        respect: { type: Number, nullable: true },
        targets: { type: Integer, nullable: true },
        warhits: { type: Integer, nullable: true },
        besthit: { type: Integer, nullable: true },
        retaliations: { type: Integer, nullable: true },
        members: fromStructure(membersStructure),
        bonuses: fromStructure(bonusStructure, { array: true }),
    },
};
const structures = [chainReportStructure, membersStructure, memberStructure, bonusStructure];

const schema: Schema = {
    chainreport: fromStructure(chainReportStructure),
};

const ChainReportSelection: Selection = {
    name: "chainreport",
    description: "View a chain report.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default ChainReportSelection;
