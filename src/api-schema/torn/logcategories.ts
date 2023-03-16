import { String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const categoriesStructure: Structure = {
    id: "category",
    name: "Category",
    schema: {
        "<id>": { type: String },
    },
};
const structures = [categoriesStructure];

const schema: Schema = {
    logcategories: fromStructure(categoriesStructure),
};

const LogCategoriesSelection: Selection = {
    name: "logcategories",
    description: "List all categories for the logs.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default LogCategoriesSelection;
