import { Param } from "./schema.types";

const TIME_FROM: Param = {
    name: "from",
    description: "Limits results to have their timestamp after or on this timestamp.",
};
const TIME_TO: Param = {
    name: "to",
    description: "Limits results to have their timestamp before or on this timestamp.",
};

const LIMIT: Param = {
    name: "limit",
    description: "Limits amount of results. Amount can't be above the default amount, will use default amount otherwise.",
};

export { TIME_FROM, TIME_TO, LIMIT };
