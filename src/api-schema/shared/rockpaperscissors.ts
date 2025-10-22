import { String } from "@/api-schema/common-types";
import type { StructureEnum } from "@/api-schema/schema.types";

export const rpsStatusEnum: StructureEnum = {
    id: "rock_paper_scissors_status",
    name: "Rock, Paper, Scissors Status",
    values: ["rock", "paper", "scissors"],
    type: String,
};
