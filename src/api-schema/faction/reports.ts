import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const reportTypeEnum: StructureEnum<string> = {
    id: "report_type",
    name: "Report Type",
    values: ["stats"],
    type: String,
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
const structures = [reportStructure, reportDataStructure, reportTypeEnum];

const schema: Schema = {
    reports: fromStructure(reportStructure),
};

const ReportsSelection: Selection = {
    name: "reports",
    description: "List last 100 reports. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default ReportsSelection;
