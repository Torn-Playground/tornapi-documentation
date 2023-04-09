import { Integer } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    active_gym: { type: Integer },
};

const GymSelection: Selection = {
    name: "gym",
    description: "View your currently active gym.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default GymSelection;
