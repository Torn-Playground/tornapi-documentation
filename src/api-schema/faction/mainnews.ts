import { TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    mainnews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const MainNewsSelection: Selection = {
    name: "mainnews",
    description: "List last 25, or 100 when providing time parameters, main news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM],
};

export default MainNewsSelection;
