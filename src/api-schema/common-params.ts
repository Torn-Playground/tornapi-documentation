import { Param } from "./schema.types";

const TIME_FROM: Param = { name: "from", description: "Limits results to have their timestamp after or on this timestamp." };
const TIME_TO: Param = { name: "to", description: "Limits results to have their timestamp before or on this timestamp." };
const TIME_TO_WITH_FROM: Param = {
    name: "to",
    description: "Limits results to have their timestamp before or on this timestamp. Only available when also using 'from'.",
};

const LIMIT: Param = {
    name: "limit",
    description: "Limits amount of results. Amount can't be above the default amount, will use default amount otherwise.",
};

const SORT: Param = {
    name: "sort",
    description: "Sort your results. Default will be descending.",
    options: {
        values: ["asc", "desc"],
    },
};

export { TIME_FROM, TIME_TO, TIME_TO_WITH_FROM, LIMIT, SORT };
