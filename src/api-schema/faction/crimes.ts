import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { EpochSeconds, Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { statusColorEnum, statusStateEnum, statusStructure } from "@/api-schema/shared/status";

const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(statusStructure, {
            nullable: true,
            extra: "Null when the crime is already initiated.",
        }),
    },
};
const crimeStructure: Structure = {
    id: "crime",
    name: "Crime",
    schema: {
        crime_id: { type: Integer },
        crime_name: { type: String },
        participants: fromStructure(membersStructure, { array: true }),
        time_started: { type: EpochSeconds },
        time_ready: { type: EpochSeconds },
        time_left: { type: Integer, description: "Seconds until the crime is ready." },
        time_completed: { type: EpochSeconds, extra: "0 if not yet initiated" },
        initiated: { type: NumberBoolean },
        initiated_by: {
            type: Integer,
            extra: "0 if not yet initiated",
            description: "Id of the member that initiated the crime.",
        },
        planned_by: { type: Integer, description: "Id of the member that planned the crime." },
        success: { type: NumberBoolean },
        money_gain: { type: Integer },
        respect_gain: { type: Integer },
    },
};
const crimesStructure: Structure = {
    id: "crimes",
    name: "Crimes",
    schema: {
        "<id>": fromStructure(crimeStructure),
    },
};
const structures = [crimesStructure, crimeStructure, membersStructure, statusStructure, statusStateEnum, statusColorEnum];

const schema: Schema = {
    crimes: fromStructure(crimesStructure),
};

const CrimesSelection: Selection = {
    name: "crimes",
    description: "List 100 most recent organised crimes. Only available with faction API Access. Cancelled organised crimes are not shown.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default CrimesSelection;
