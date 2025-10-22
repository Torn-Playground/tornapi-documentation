import { LIMIT, SORT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { newsMapStructure, newsStructure } from "@/api-schema/shared/news";

const structures = [newsMapStructure, newsStructure];

const schema: Schema = {
    membershipnews: fromStructure(newsMapStructure, { extra: "Empty array when there is no news." }),
};

const MembershipNewsSelection: Selection = {
    name: "membershipnews",
    description: "List last 25, or 100 when providing time parameters, membership news entries. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, SORT, LIMIT],
};

export default MembershipNewsSelection;
