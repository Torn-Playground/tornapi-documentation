import Link from "next/link";
import { TIME_TO } from "@/api-schema/common-params";
import { EpochSeconds, Integer, KeyValueMap, String } from "@/api-schema/common-types";
import { fromStructure, Param, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { isNumberList, isValidNumber, isValidTime, onlySingleValue, withMaximumListLength } from "@/api-schema/validations";

const logStructure: Structure = {
    id: "log",
    name: "Log",
    schema: {
        category: { type: String },
        data: { type: KeyValueMap, description: "Data about the specific log. Used keys depend on the log type." },
        log: { type: Integer, description: "Log type." },
        params: { type: KeyValueMap, description: "Some parameters that are used for showing the log in-game." },
        timestamp: { type: EpochSeconds },
        title: { type: String },
    },
};
const logsStructure: Structure = {
    id: "logs",
    name: "Logs",
    schema: {
        "<log id>": fromStructure(logStructure),
    },
};
const structures = [logsStructure, logStructure];

const schema: Schema = {
    log: fromStructure(logsStructure),
};

const TIME_FROM_LOG: Param = {
    name: "from",
    description:
        "Limits results to have their timestamp after or on this timestamp. Unlike other selections, here it won't give the oldest 100 when including this parameter.",
    validations: [isValidTime, onlySingleValue],
};
const FILTER_TYPE: Param = {
    name: "log",
    description: "Filter based on the log types. Possible values are available in torn/logtypes. Supports up to 10 values, comma-seperated.",
    descriptionNode: (
        <>
            Filter based on the log types. Possible values are available in{" "}
            <Link href="/torn/logtypes" className="link">
                torn/logtypes
            </Link>
            . Supports up to 10 values, comma-seperated.
        </>
    ),
    validations: [isNumberList, withMaximumListLength(10)],
};
const FILTER_CATEGORY: Param = {
    name: "cat",
    description: "Filter based on the log categories. Possible values are available in torn/logcategories.",
    descriptionNode: (
        <>
            Filter based on the log categories. Possible values are available in{" "}
            <Link href="/torn/categories" className="link">
                torn/categories
            </Link>
            .
        </>
    ),
    validations: [isValidNumber],
};

const LogSelection: Selection = {
    name: "log",
    description: "Access your last 100 activity logs. Unlike other selections, there is no cache present for logs.",
    access: "full",
    schema,
    structures,
    id: { optional: false },
    params: [TIME_FROM_LOG, TIME_TO, FILTER_TYPE, FILTER_CATEGORY],
};

export default LogSelection;
