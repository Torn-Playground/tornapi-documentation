import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Structure, StructureEnum } from "@/api-schema/schema.types";

const reportTypeEnum: StructureEnum<string> = {
    id: "report_type",
    name: "Report Type",
    values: ["stats", "money", "friendorfoe", "mostwanted", "references"],
    type: String,
    incomplete: { missing: "anonymousbounties - truelevel - investment" },
};
const referenceStructure: Structure = {
    id: "reference",
    name: "Reference",
    schema: {
        ID: { type: Integer },
        name: { type: String },
        joined: { type: String, description: "Date ('dd-MM-yyyy') when they joined." },
        left: { type: String, description: "Date ('dd-MM-yyyy') or 'Present' when they joined." },
    },
};
const warantStructure: Structure = {
    id: "warrant",
    name: "Warrant",
    schema: {
        user_id: { type: Integer },
        name: { type: String },
        warrant: { type: Integer, description: "Amount of the warant on the user." },
    },
};
const friendFoeUserStructure: Structure = {
    id: "friend_foe_user",
    name: "Friend or Foe User",
    schema: {
        user_id: { type: Integer },
        name: { type: String },
    },
};
const reportDataStructure: Structure = {
    id: "report_data",
    name: "Report Data",
    schema: {
        strength: {
            type: Integer,
            nullable: true,
            extra: "Only present in stat reports, and only when it's included in the stat spy.",
        },
        speed: {
            type: Integer,
            nullable: true,
            extra: "Only present in stat reports, and only when it's included in the stat spy.",
        },
        dexterity: {
            type: Integer,
            nullable: true,
            extra: "Only present in stat reports, and only when it's included in the stat spy.",
        },
        defense: {
            type: Integer,
            nullable: true,
            extra: "Only present in stat reports, and only when it's included in the stat spy.",
        },
        total_battlestats: {
            type: Integer,
            nullable: true,
            extra: "Only present in stat reports, and only when it's included in the stat spy.",
        },
        money: { type: Integer, nullable: true, extra: "Only present in money reports." },
        friendlist: fromStructure(friendFoeUserStructure, {
            array: true,
            nullable: true,
            extra: "Only present in friend or foe reports.",
        }),
        enemylist: fromStructure(friendFoeUserStructure, {
            array: true,
            nullable: true,
            extra: "Only present in friend or foe reports.",
        }),
        toplist: fromStructure(warantStructure, {
            array: true,
            nullable: true,
            extra: "Only present in mostwanted reports.",
        }),
        otherlist: fromStructure(warantStructure, {
            array: true,
            nullable: true,
            extra: "Only present in mostwanted reports.",
        }),
        faction_history: fromStructure(referenceStructure, {
            array: true,
            nullable: true,
            extra: "Only present in references reports.",
        }),
        company_history: fromStructure(referenceStructure, {
            array: true,
            nullable: true,
            extra: "Only present in references reports.",
        }),
    },
};
const reportStructure: Structure = {
    id: "report",
    name: "Report",
    schema: {
        id: { type: String },
        user_id: { type: Integer },
        target: { type: Integer },
        type: fromStructure(reportTypeEnum),
        report: fromStructure(reportDataStructure),
        timestamp: { type: EpochSeconds },
    },
};
export const reportStructures: Array<Structure | StructureEnum<any>> = [
    referenceStructure,
    reportStructure,
    reportDataStructure,
    reportTypeEnum,
    friendFoeUserStructure,
    warantStructure,
];

export const reportSchema: Schema = { reports: fromStructure(reportStructure) };
