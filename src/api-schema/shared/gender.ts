import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

export const genderEnum: StructureEnum = {
    id: "gender",
    name: "Gender",
    values: ["Male", "Female", "Enby"],
    type: String,
};
