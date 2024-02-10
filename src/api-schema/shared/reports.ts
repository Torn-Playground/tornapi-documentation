import { ArrayString, EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Structure, StructureEnum } from "@/api-schema/schema.types";

const reportTypeEnum: StructureEnum = {
    id: "report_type",
    name: "Report Type",
    values: ["anonymousbounties", "stats", "money", "friendorfoe", "mostwanted", "references", "truelevel", "investment"],
    type: String,
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
const warrantStructure: Structure = {
    id: "warrant",
    name: "Warrant",
    schema: {
        user_id: { type: Integer },
        name: { type: String },
        warrant: { type: Integer, description: "Amount of the warrant on the user." },
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
        toplist: fromStructure(warrantStructure, {
            array: true,
            nullable: true,
            extra: "Only present in mostwanted reports.",
        }),
        otherlist: fromStructure(warrantStructure, {
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
        truelevel: { type: Integer, nullable: true, extra: "Only present in truelevel reports." },
        invested_amount: { type: Integer, nullable: true, extra: "Only present in investment reports." },
        invested_completion: {
            type: String,
            nullable: true,
            extra: "Only present in investment reports.",
            description: "Date of completion as 'HH:mm:ss - dd/MM/yy'.",
        },
        bounties: {
            type: ArrayString,
            nullable: true,
            extra: "Only present in anonymousbounties reports.",
            description: "Bounties as 'Username [ID] @ $price'. Blocked reveals will show as 'FIREWALL [BLOCKED]'",
        },
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
        report: fromStructure(reportDataStructure, { extra: "Old reports might not follow this structure, resulting in it breaking." }),
        timestamp: { type: EpochSeconds },
    },
};
export const reportStructures: (Structure | StructureEnum)[] = [
    referenceStructure,
    reportStructure,
    reportDataStructure,
    reportTypeEnum,
    friendFoeUserStructure,
    warrantStructure,
];

export const reportSchema: Schema = { reports: fromStructure(reportStructure) };
