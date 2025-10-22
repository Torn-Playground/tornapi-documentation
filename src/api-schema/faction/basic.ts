import { EpochSeconds, Integer, IntegerAndString, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure, type StructureEnum } from "@/api-schema/schema.types";
import { lastActionStatusEnum, lastActionStructure } from "@/api-schema/shared/last-action";
import { factionsStructure, rankedWarFactionStructure, rankedWarStructure, rankedWarsStructure, warStructure } from "@/api-schema/shared/ranked-wars";
import { statusColorEnum, statusStateEnum, statusStructure } from "@/api-schema/shared/status";

const raidStructure: Structure = {
    id: "raid",
    name: "Raid",
    schema: {
        raiding_faction: { type: Integer },
        defending_faction: { type: Integer },
        raider_score: { type: String },
        defender_score: { type: Integer },
        start_time: { type: EpochSeconds },
    },
};
const territoryWarStructure: Structure = {
    id: "territory_war",
    name: "Territory War",
    schema: {
        territory_war_id: { type: Integer },
        territory: { type: String },
        assaulting_faction: { type: Integer },
        defending_faction: { type: Integer },
        score: { type: Integer },
        required_score: { type: Integer },
        start_time: { type: EpochSeconds },
        end_time: { type: EpochSeconds },
    },
};
const memberStructure: Structure = {
    id: "member",
    name: "Member",
    schema: {
        name: { type: String },
        level: { type: Integer },
        days_in_faction: { type: Integer },
        last_action: fromStructure(lastActionStructure),
        status: fromStructure(statusStructure),
        position: { type: String },
    },
};
const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(memberStructure),
    },
};
const peaceStructure: Structure = {
    id: "peace",
    name: "Peace Treaties",
    schema: {
        "<faction id>": { type: EpochSeconds },
    },
};
const rankEnum: StructureEnum = {
    id: "rank",
    name: "Rank",
    values: ["Unranked", "Bronze", "Silver", "Gold", "Platinum", "Diamond"],
    type: String,
};
const rankStructure: Structure = {
    id: "ranking",
    name: "Ranking",
    schema: {
        level: { type: Integer },
        name: fromStructure(rankEnum),
        division: { type: Integer },
        position: { type: Integer },
        wins: { type: Integer },
    },
};

const structures = [
    rankEnum,
    rankStructure,
    membersStructure,
    memberStructure,
    lastActionStructure,
    lastActionStatusEnum,
    statusStructure,
    statusColorEnum,
    statusStateEnum,
    rankedWarsStructure,
    rankedWarStructure,
    factionsStructure,
    rankedWarFactionStructure,
    warStructure,
    territoryWarStructure,
    raidStructure,
    peaceStructure,
];

const schema: Schema = {
    ID: { type: Integer },
    name: { type: String },
    tag: { type: IntegerAndString },
    tag_image: { type: String },
    leader: { type: Integer },
    "co-leader": { type: Integer, extra: "Will be 0 if there is no co-leader." },
    respect: { type: Integer },
    age: { type: Integer },
    capacity: { type: Integer },
    best_chain: { type: Integer },
    ranked_wars: fromStructure(rankedWarsStructure),
    territory_wars: fromStructure(territoryWarStructure, {
        array: true,
        extra: "Empty object when there is no territory war.",
    }),
    raid_wars: fromStructure(raidStructure, {
        array: true,
        extra: "Empty object when there is no raid.",
    }),
    peace: fromStructure(peaceStructure, {
        extra: "Empty object when there are no peace treaties.",
    }),
    rank: fromStructure(rankStructure),
    members: fromStructure(membersStructure),
};

const BasicSelection: Selection = {
    name: "basic",
    description: "Information about a faction.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default BasicSelection;
