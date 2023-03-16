import { ArrayString, EpochSeconds } from "@/api-schema/common-types";
import { Selection } from "@/api-schema/schema.types";

export const LookupSelection: Selection = {
    name: "lookup",
    description: "List all selections under a certain section.",
    access: "public",
    schema: { selections: { type: ArrayString } },
    structures: [],
    id: {
        optional: false,
    },
};

export const TimestampSelection: Selection = {
    name: "timestamp",
    description: "Get the current time.",
    access: "public",
    schema: { timestamp: { type: EpochSeconds } },
    structures: [],
    id: {
        optional: false,
    },
};
