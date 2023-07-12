import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

export const competitionTypeEnum: StructureEnum<string> = {
    id: "competition_type",
    name: "Competition Type",
    values: ["Halloween", "Elimination", "Easter Egg Hunt", "Dog Tags", "Mr & Ms Torn"],
    type: String,
};
