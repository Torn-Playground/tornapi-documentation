import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";
import { TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    territorynews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const TerritoryNewsSelection: Selection = {
    name: "territorynews",
    description: "List last 100 territory news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM],
};

export default TerritoryNewsSelection;
