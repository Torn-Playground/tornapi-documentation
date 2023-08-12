import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const itemStructure: Structure = {
    id: "item",
    name: "Item",
    schema: {
        name: { type: String },
        quantity: { type: Integer },
    },
};
const itemsStructure: Structure = {
    id: "items",
    name: "Items",
    schema: {
        "<item id>": fromStructure(itemStructure),
    },
};
const userStructure: Structure = {
    id: "user",
    name: "User",
    schema: {
        name: { type: String },
        level: { type: Integer },
        faction_id: { type: Integer },
        attacks: { type: Integer },
        damage: { type: Number },
    },
};
const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(userStructure),
    },
};
const raidTypeEnum: StructureEnum<string> = {
    id: "raid_type",
    name: "Raid Type",
    values: ["aggressor", "defender"],
    type: String,
};
const factionStructure: Structure = {
    id: "faction",
    name: "Faction",
    schema: {
        name: { type: String },
        type: fromStructure(raidTypeEnum),
        score: { type: Integer },
        attacks: { type: Integer },
        members: fromStructure(membersStructure),
    },
};
const factionsStructure: Structure = {
    id: "factions",
    name: "Factions",
    schema: {
        "<faction id 1>": fromStructure(factionStructure),
        "<faction id 2>": fromStructure(factionStructure),
    },
};
const raidWarStructure: Structure = {
    id: "raid_war",
    name: "Raid War",
    schema: {
        start: { type: EpochSeconds },
        end: { type: EpochSeconds },
    },
};
const raidReportStructure: Structure = {
    id: "raid_report",
    name: "Raid Report",
    schema: {
        war: fromStructure(raidWarStructure),
        factions: fromStructure(factionsStructure),
    },
};
const structures = [
    raidReportStructure,
    raidWarStructure,
    membersStructure,
    userStructure,
    factionsStructure,
    factionStructure,
    itemsStructure,
    itemStructure,
    raidTypeEnum,
];

const schema: Schema = {
    raidreport: fromStructure(raidReportStructure),
};

const RaidReportSelection: Selection = {
    name: "raidreport",
    description: "View a specific raid report.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default RaidReportSelection;
