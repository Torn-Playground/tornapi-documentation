import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

// eslint-disable-next-line import/prefer-default-export
export const branchEnum: StructureEnum<string> = {
    id: "Branch",
    name: "Branch",
    values: ["Core", "Criminality", "Fortitude", "Voracity", "Toleration", "Excursion", "Steadfast", "Aggression", "Suppression"],
    type: String,
};
