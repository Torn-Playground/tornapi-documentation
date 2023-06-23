import { SORT, TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    fundsnews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const FundsNewsSelection: Selection = {
    name: "fundsnews",
    description: "List last 25, or 100 when providing time parameters, fund news entries. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM, SORT],
};

export default FundsNewsSelection;
