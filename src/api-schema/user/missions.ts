import { String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const missionStatusEnum: StructureEnum<string> = {
    id: "missionStatus",
    name: "Mission Status",
    values: ["notAccepted", "accepted", "failed", "completed"],
    type: String,
};
const missionStructure: Structure = {
    id: "mission",
    name: "Mission",
    schema: {
        title: { type: String },
        status: fromStructure(missionStatusEnum),
    },
};
const missionsStructure: Structure = {
    id: "missions",
    name: "Missions",
    schema: {
        Duke: fromStructure(missionStructure, { array: true }),
    },
};
const structures = [missionsStructure, missionStructure, missionStatusEnum];

const schema: Schema = {
    missions: fromStructure(missionsStructure),
};

const MissionsSelection: Selection = {
    name: "missions",
    description: "List of your missions.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default MissionsSelection;
