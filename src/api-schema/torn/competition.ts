import { Integer, Number, String, Unknown } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { competitionTypeEnum } from "@/api-schema/shared/competition";

const leaderboardPositionStructure: Structure = {
    id: "leaderboard_position",
    name: "Leaderboard Position",
    schema: {
        user_id: { type: Integer },
        score: { type: Number },
        position: { type: Integer },
    },
};
const eliminationStatusEnum: StructureEnum = {
    id: "elimination_status",
    name: "Elimination Status",
    values: ["eliminated", "before-eliminated", "<unknown>"],
    type: String,
};
const eliminationTeamStructure: Structure = {
    id: "elimination_team",
    name: "Elimination Team",
    schema: {
        position: { type: Integer },
        lives: { type: Integer },
        losses: { type: Integer, extra: "Null before the competition starts." },
        name: { type: String },
        score: { type: Integer },
        status: fromStructure(eliminationStatusEnum),
        team: { type: String },
        participants: { type: Unknown, extra: "Null before the competition starts." },
        wins: { type: Integer, extra: "Null before the competition starts." },
    },
};
const competitionStructure: Structure = {
    id: "competition",
    name: "Competition",
    schema: {
        teams: fromStructure(eliminationTeamStructure, {
            array: true,
            nullable: true,
            extra: "Only present during elimination.",
        }),
        name: fromStructure(competitionTypeEnum),
        leaderboardmrs: fromStructure(leaderboardPositionStructure, {
            array: true,
            nullable: true,
            extra: "Only present during Mr & Ms Torn.",
            description: "Leaderboard for the Ms Torn crown.",
        }),
        leaderboardmr: fromStructure(leaderboardPositionStructure, {
            array: true,
            nullable: true,
            extra: "Only present during Mr & Ms Torn.",
            description: "Leaderboard for the Mr Torn crown.",
        }),
    },
};
const structures = [competitionStructure, competitionTypeEnum, eliminationTeamStructure, eliminationStatusEnum, leaderboardPositionStructure];

const schema: Schema = {
    competition: fromStructure(competitionStructure, { nullable: true, extra: "Null when no competition is going on." }),
};

const CompetitionSelection: Selection = {
    name: "competition",
    description: "Display the currently ongoing competition.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default CompetitionSelection;
