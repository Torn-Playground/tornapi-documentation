import { LIMIT } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = { news: fromStructure(newsMapStructure) };

const NewsFullSelection: Selection = {
    name: "newsfull",
    description: "Get more news entries. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [LIMIT],
};

export default NewsFullSelection;
