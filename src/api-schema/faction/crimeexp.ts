import { ArrayInteger } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    crimeexp: { type: ArrayInteger },
};

const CrimeExpSelection: Selection = {
    name: "crimeexp",
    description: "List your members ordered by their crime experience order. Also lists members that are not eligible for planning a new OC.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default CrimeExpSelection;
