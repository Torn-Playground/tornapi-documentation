import { Number, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const searchForCashSubcrimeStructure: Structure = {
    id: "sfc_subcrime",
    name: "Search for Cash Subcrime",
    schema: {
        title: { type: String },
        percentage: { type: Number },
    },
};
const searchForCashStructure: Structure = {
    id: "searchforcash",
    name: "Search for Cash",
    schema: {
        "<subcrime name>": fromStructure(searchForCashSubcrimeStructure),
    },
};
const structures = [searchForCashStructure, searchForCashSubcrimeStructure];

const schema: Schema = {
    searchforcash: fromStructure(searchForCashStructure),
};

const SearchForCashSelection: Selection = {
    name: "searchforcash",
    description: "Check Search for Cash crime status.",
    access: "public",
    schema,
    structures,
    id: { optional: false },
};

export default SearchForCashSelection;
