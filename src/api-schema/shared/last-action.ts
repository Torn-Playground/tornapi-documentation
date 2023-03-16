import { EpochSeconds, String } from "@/api-schema/common-types";
import { fromStructure, Structure, StructureEnum } from "@/api-schema/schema.types";

export const lastActionStatusEnum: StructureEnum<string> = {
    id: "last_action_status",
    name: "Last Action Status",
    values: ["Online", "Idle", "Offline"],
    type: String,
};
export const lastActionStructure: Structure = {
    id: "last_action",
    name: "Last Action",
    schema: {
        status: fromStructure(lastActionStatusEnum),
        timestamp: { type: EpochSeconds, nullable: true },
        relative: { type: String, extra: "Will be 'No Last Action' when there is no last action." },
    },
};
