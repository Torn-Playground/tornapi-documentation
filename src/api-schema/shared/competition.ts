import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

const HALLOWEEN_EVENT = "Halloween";
const ELIMINATION_EVENT = "Elimination";
const EASTER_EGG_EVENT = "Easter Egg Hunt";
const DOG_TAGS_EVENT = "Dog Tags";
const MR_MS_TORN_EVENT = "Mr & Ms Torn";
const RPS_EVENT = "Rock, Paper, Scissors";

export const globalCompetitionTypes = [HALLOWEEN_EVENT, ELIMINATION_EVENT, EASTER_EGG_EVENT, DOG_TAGS_EVENT, MR_MS_TORN_EVENT];
export const profileCompetitionTypes = [...globalCompetitionTypes, RPS_EVENT];

export const competitionTypeEnum: StructureEnum = {
    id: "competition_type",
    name: "Competition Type",
    values: globalCompetitionTypes,
    type: String,
};
export const profileCompetitionTypeEnum: StructureEnum = {
    id: "competition_type_profile",
    name: "Competition Type",
    values: profileCompetitionTypes,
    type: String,
};
