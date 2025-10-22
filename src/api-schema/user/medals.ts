import { ArrayEpochSeconds, ArrayInteger } from "@/api-schema/common-types";
import type { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    medals_awarded: { type: ArrayInteger },
    medals_time: {
        type: ArrayEpochSeconds,
        description: "Times when the medals were awarded. Index of the medals_awarded are the same of the index here.",
    },
};

const MedalsSelection: Selection = {
    name: "medals",
    description: "List the awarded medals of a player.",
    access: "public",
    schema,
    structures: [],
    id: { optional: true },
    params: [],
};

export default MedalsSelection;
