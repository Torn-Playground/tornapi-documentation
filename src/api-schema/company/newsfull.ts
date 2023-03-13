import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const yStructure: Structure = {
    id: "",
    name: "",
    schema: {},
};
const xStructure: Structure = {
    id: "",
    name: "",
    schema: {
        "<id>": fromStructure(yStructure),
    },
};
const structures = [xStructure, yStructure];

const schema: Schema = {
    // FIXME - Map endpoint.
    cards: fromStructure(xStructure),
};

const NewsFullSelection: Selection = {
    name: "newsfull",
    // FIXME - Verify description.
    description: "Get more news entries, with less data. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default NewsFullSelection;
