import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { Integer, String } from "@/api-schema/common-types";

const eliminationStatusEnum: StructureEnum<string> = {
    id: "elimination_status",
    name: "Elimination Status",
    values: ["eliminated", "before-eliminated", "<unknown>"],
    type: String,
};
const eliminationTeamStructure: Structure = {
    id: "elimination_team",
    name: "Elimination Team",
    schema: {
        name: { type: String },
        team: { type: String },
        status: fromStructure(eliminationStatusEnum),
        wins: { type: Integer },
        losses: { type: Integer },
        lives: { type: Integer },
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
    },
};
const structures = [competitionStructure, eliminationTeamStructure, eliminationStatusEnum];

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
