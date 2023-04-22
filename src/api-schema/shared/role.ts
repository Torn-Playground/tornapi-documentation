import { String } from "@/api-schema/common-types";
import { StructureEnum } from "@/api-schema/schema.types";

// eslint-disable-next-line import/prefer-default-export
export const roleEnum: StructureEnum<string> = {
    id: "role",
    name: "Role",
    values: ["Civilian", "Reporter", "Wiki Contributor", "Wiki Editor", "Committee", "Helper", "Moderator", "Officer", "Admin", "NPC"],
    type: String,
};
