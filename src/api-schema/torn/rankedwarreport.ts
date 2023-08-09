import { EpochSeconds, Integer, Number, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

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
const userStructure: Structure = {
    id: "user",
    name: "User",
    schema: {
        name: { type: String },
        faction_id: { type: Integer },
        level: { type: Integer },
        attacks: { type: Integer },
        score: { type: Number },
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
        score: { type: Integer },
        attacks: { type: Integer },
        rank_before: { type: String },
        rank_after: { type: String },
        rewards: fromStructure(rewardsStructure),
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
const warStructure: Structure = {
    id: "war",
    name: "War",
    schema: {
        start: { type: EpochSeconds },
        end: { type: EpochSeconds },
        winner: { type: Integer },
        forfeit: { type: NumberBoolean },
    },
};
const rankedWarReportStructure: Structure = {
    id: "ranked_war_report",
    name: "Ranked War Report",
    schema: {
        factions: fromStructure(factionsStructure),
        war: fromStructure(warStructure),
    },
};
const structures = [
    rankedWarReportStructure,
    warStructure,
    membersStructure,
    userStructure,
    factionsStructure,
    factionStructure,
    rewardsStructure,
    itemsStructure,
    itemStructure,
];

const schema: Schema = {
    rankedwarreport: fromStructure(rankedWarReportStructure),
};

const RankedWarReportSelection: Selection = {
    name: "rankedwarreport",
    description: "View a specific ranked war report.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default RankedWarReportSelection;
