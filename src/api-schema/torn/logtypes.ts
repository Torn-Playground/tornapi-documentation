import { String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const typesStructure: Structure = {
    id: "type",
    name: "Type",
    schema: {
        "<id>": { type: String },
    },
};
const structures = [typesStructure];

const schema: Schema = {
    logtypes: fromStructure(typesStructure),
};

const LogTypesSelection: Selection = {
    name: "logtypes",
    description: "List all types for the logs.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default LogTypesSelection;
