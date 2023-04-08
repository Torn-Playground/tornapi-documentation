import { TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    armorynews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const ArmoryNewsSelection: Selection = {
    name: "armorynews",
    description: "List last 100, or 1000 when providing time parameters, armory news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM],
};

export default ArmoryNewsSelection;
