import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { rpsStatusEnum } from "@/api-schema/shared/rockpaperscissors";

const rpsScoreStructure: Structure = {
    id: "rps_score",
    name: "Rock, Paper, Scissors Score",
    schema: {
        type: fromStructure(rpsStatusEnum),
        count: { type: Integer },
    },
};
const structures = [rpsScoreStructure, rpsStatusEnum];

const schema: Schema = {
    rockpaperscissors: fromStructure(rpsScoreStructure, { array: true }),
};

const RockPaperScissorsSelection: Selection = {
    name: "rockpaperscissors",
    description: "Information about the rock paper scissors event.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default RockPaperScissorsSelection;
