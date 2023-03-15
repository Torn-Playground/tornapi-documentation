import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";
import { TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    crimenews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const CrimeNewsSelection: Selection = {
    name: "crimenews",
    description: "List last 100 crime news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM],
};

export default CrimeNewsSelection;
