import { LIMIT } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { factionsStructure, rankedWarFactionStructure, rankedWarsStructure, rankedWarStructure, warStructure } from "@/api-schema/shared/ranked-wars";

const structures = [rankedWarsStructure, rankedWarStructure, factionsStructure, rankedWarFactionStructure, warStructure];

const schema: Schema = {
    rankedwars: fromStructure(rankedWarsStructure),
};

const RankedWarsSelection: Selection = {
    name: "rankedwars",
    description: "List the last 100 ranked wars for this faction.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
    params: [LIMIT],
};

export default RankedWarsSelection;
