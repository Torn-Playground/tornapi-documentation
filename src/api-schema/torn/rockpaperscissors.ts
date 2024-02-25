import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const rpsTypeEnum: StructureEnum = {
    id: "rps_type",
    name: "RPS Type",
    values: ["rock", "paper", "scissors"],
    type: String,
};
const rpsScoreStructure: Structure = {
    id: "rps_score",
    name: "RPS Score",
    schema: {
        type: fromStructure(rpsTypeEnum),
        count: { type: Integer },
    },
};
const structures = [rpsScoreStructure, rpsTypeEnum];

const schema: Schema = {
    rockpaperscissors: fromStructure(rpsScoreStructure, {array: true}),
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
