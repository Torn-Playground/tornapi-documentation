import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { factionsStructure, rankedWarFactionStructure, rankedWarsStructure, rankedWarStructure, warStructure } from "@/api-schema/shared/ranked-wars";

const structures = [rankedWarsStructure, rankedWarStructure, factionsStructure, rankedWarFactionStructure, warStructure];

const schema: Schema = {
    rankedwars: fromStructure(rankedWarsStructure),
};

const RankedWarsSelection: Selection = {
    name: "rankedwars",
    description: "List all ongoing ranked wars.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default RankedWarsSelection;
