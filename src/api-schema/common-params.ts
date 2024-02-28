import { Param } from "@/api-schema/schema.types";
import { hasValidOptions, isValidNumber, isValidTime, onlySingleValue, warnMaximumValue, withMinimumValue } from "@/api-schema/validations";

export const TIME_FROM: Param = {
    name: "from",
    description: "Limits results to have their timestamp after or on this timestamp.",
    validations: [isValidTime, onlySingleValue],
};
export const TIME_TO: Param = {
    name: "to",
    description: "Limits results to have their timestamp before or on this timestamp.",
    validations: [isValidTime, onlySingleValue],
};
export const TIME_TO_WITH_FROM: Param = {
    name: "to",
    description: "Limits results to have their timestamp before or on this timestamp. Only available when also using 'from'.",
    validations: [isValidTime, onlySingleValue],
};

export const LIMIT: Param = {
    name: "limit",
    description: "Limits amount of results. Amount can't be above the default amount, will use default amount otherwise.",
    validations: [
        isValidNumber,
        withMinimumValue(1),
        warnMaximumValue(100, "Most selections only return up to 100 results, increasing this won't have any effect."),
    ],
};

export const SORT: Param = {
    name: "sort",
    description: "Sort your results. Default will be descending.",
    options: {
        values: ["asc", "desc"],
    },
    validations: [hasValidOptions],
};
