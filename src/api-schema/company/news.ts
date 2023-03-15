import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";
import { LIMIT } from "@/api-schema/common-params";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = { news: fromStructure(newsMapStructure) };

const NewsSelection: Selection = {
    name: "news",
    description: "Get news entries. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [LIMIT],
};

export default NewsSelection;
