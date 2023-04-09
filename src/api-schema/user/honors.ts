import { ArrayEpochSeconds, ArrayInteger } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const childStructure: Structure = {
    id: "",
    name: "",
    schema: {},
};
const rootStructure: Structure = {
    id: "",
    name: "",
    schema: {
        "<id>": fromStructure(childStructure),
    },
};
const structures = [rootStructure, childStructure];

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
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default HonorsSelection;
