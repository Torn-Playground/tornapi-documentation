import { ArrayString } from "@/api-schema/common-types";
import type { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    territoryNames: { type: ArrayString },
};

const TerritoryNamesSelection: Selection = {
    name: "territorynames",
    description: "List all territory names.",
    access: "public",
    schema,
    structures: [],
    id: {
        optional: false,
    },
};

export default TerritoryNamesSelection;
