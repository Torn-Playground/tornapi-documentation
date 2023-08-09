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
const rewardsStructure: Structure = {
    id: "rewards",
    name: "Rewards",
    schema: {
        respect: { type: Integer },
        points: { type: Integer },
        items: fromStructure(itemsStructure),
    },
};
const factionTypeEnum: StructureEnum<string> = {
    id: "faction_type",
    name: "Faction Type",
    values: ["aggressor", "defender"],
    type: String,
};
const userStructure: Structure = {
    id: "user",
    name: "User",
    schema: {
        name: { type: String },
        level: { type: Integer },
        faction_id: { type: Integer },
        points: { type: Integer },
        joins: { type: Number },
        clears: { type: Number },
    },
};
const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(userStructure),
    },
};
const factionStructure: Structure = {
    id: "faction",
    name: "Faction",
    schema: {
        name: { type: String },
        type: { type: String },
        score: { type: Integer },
        joins: { type: Integer },
        clears: { type: Integer },
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
const warResultEnum: StructureEnum<string> = {
    id: "war_result",
    name: "War Result",
    values: ["success_assault", "fail_assault", "end_with_peace_treaty"],
    type: String,
};
const warStructure: Structure = {
    id: "war",
    name: "War",
    schema: {
        end: { type: EpochSeconds },
        result: fromStructure(warResultEnum),
        start: { type: EpochSeconds },
        winner: { type: Integer },
    },
};
const territoryStructure: Structure = {
    id: "territory",
    name: "Territory",
    schema: {
        name: { type: String },
    },
};
const territoryWarReportStructure: Structure = {
    id: "territory_war_report",
    name: "Territory War Report",
    schema: {
        factions: fromStructure(factionsStructure),
        territory: fromStructure(territoryStructure),
        war: fromStructure(warStructure),
    },
};
const structures = [
    territoryWarReportStructure,
    warStructure,
    territoryStructure,
    warResultEnum,
    membersStructure,
    userStructure,
    factionTypeEnum,
    factionsStructure,
    factionStructure,
    rewardsStructure,
    itemsStructure,
    itemStructure,
];

const schema: Schema = {
    territorywarreport: fromStructure(territoryWarReportStructure),
};

const TerritoryWarReportSelection: Selection = {
    name: "territorywarreport",
    description: "View a specific territory war report.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default TerritoryWarReportSelection;
