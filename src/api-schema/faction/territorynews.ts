import { SORT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    territorynews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const TerritoryNewsSelection: Selection = {
    name: "territorynews",
    description: "List last 25, or 100 when providing time parameters, territory news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, SORT],
};

export default TerritoryNewsSelection;
