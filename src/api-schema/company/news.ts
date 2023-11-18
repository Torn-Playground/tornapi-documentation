import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = { news: fromStructure(newsMapStructure) };

const NewsSelection: Selection = {
    name: "news",
    description: "Get last 25, or 100 when providing the 'from' parameter, news entries. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default NewsSelection;
