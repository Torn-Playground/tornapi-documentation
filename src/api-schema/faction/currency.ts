import { Schema, Selection } from "@/api-schema/schema.types";
import { Integer } from "@/api-schema/common-types";

const schema: Schema = {
    faction_id: { type: Integer },
    points: { type: Integer },
    money: { type: Integer },
};

const CurrencySelection: Selection = {
    name: "currency",
    description: "Show current money and point balance. Only available with faction API Access.",
    access: "limited",
    schema,
    structures: [],
    id: {
        optional: false,
    },
};

export default CurrencySelection;
