import { SORT, TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    crimenews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const CrimeNewsSelection: Selection = {
    name: "crimenews",
    description: "List last 25, or 100 when providing time parameters, crime news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM, SORT],
};

export default CrimeNewsSelection;
