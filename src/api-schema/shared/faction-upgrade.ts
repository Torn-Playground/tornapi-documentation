import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

export const branchEnum: StructureEnum<string> = {
    id: "branch",
    name: "Branch",
    values: ["Core", "Criminality", "Fortitude", "Voracity", "Toleration", "Excursion", "Steadfast", "Aggression", "Suppression"],
    type: String,
};
