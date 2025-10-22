import { String } from "@/api-schema/common-types";
import type { StructureEnum } from "@/api-schema/schema.types";

export const roleEnum: StructureEnum = {
    id: "role",
    name: "Role",
    values: ["Civilian", "Reporter", "Wiki Contributor", "Wiki Editor", "Committee", "Helper", "Moderator", "Officer", "Admin", "NPC"],
    type: String,
};
