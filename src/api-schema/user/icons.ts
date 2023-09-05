import { String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const iconsStructure: Structure = {
    id: "icons",
    name: "Icons",
    schema: {
        "<icon id>": { type: String },
    },
};
const structures = [iconsStructure];

const schema: Schema = {
    icons: fromStructure(iconsStructure),
};

const IconsSelection: Selection = {
    name: "icons",
    description: "View your currently shown icons. Will show the basic icons for other players.",
    access: "public",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default IconsSelection;
