import { ArrayString } from "@/api-schema/common-types";
import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    faction_perks: { type: ArrayString },
    job_perks: { type: ArrayString },
    property_perks: { type: ArrayString },
    education_perks: { type: ArrayString },
    enhancer_perks: { type: ArrayString },
    book_perks: { type: ArrayString },
    stock_perks: { type: ArrayString },
    merit_perks: { type: ArrayString },
};

const PerksSelection: Selection = {
    name: "perks",
    description: "View your active perks.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default PerksSelection;
