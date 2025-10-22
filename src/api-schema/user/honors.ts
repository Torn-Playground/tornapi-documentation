import { ArrayEpochSeconds, ArrayInteger } from "@/api-schema/common-types";
import type { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    honors_awarded: { type: ArrayInteger },
    honors_time: {
        type: ArrayEpochSeconds,
        description: "Times when the honors were awarded. Index of the honors_awarded are the same of the index here.",
    },
};

const HonorsSelection: Selection = {
    name: "honors",
    description: "List your awarded honors.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default HonorsSelection;
