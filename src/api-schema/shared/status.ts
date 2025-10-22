import { EpochSeconds, String } from "@/api-schema/common-types";
import { fromStructure, type Structure, type StructureEnum } from "@/api-schema/schema.types";

export const statusStateEnum: StructureEnum = {
    id: "status_state",
    name: "Status State",
    values: ["Okay", "Traveling", "Abroad", "Hospital", "Jail", "Fallen", "Federal"],
    type: String,
};
export const statusColorEnum: StructureEnum = {
    id: "status_color",
    name: "Status Color",
    values: ["green", "blue", "red"],
    type: String,
};
export const statusStructure: Structure = {
    id: "status",
    name: "Status",
    schema: {
        description: { type: String },
        details: { type: String },
        state: fromStructure(statusStateEnum),
        color: fromStructure(statusColorEnum),
        until: { type: EpochSeconds, extra: "Will be 0 when not applicable." },
    },
};
