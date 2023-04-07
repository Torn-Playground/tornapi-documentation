import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

// eslint-disable-next-line import/prefer-default-export
export const genderEnum: StructureEnum<string> = {
    id: "gender",
    name: "Gender",
    values: ["Male", "Female", "Enby"],
    type: String,
};
