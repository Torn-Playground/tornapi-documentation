import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { EpochSeconds, String } from "@/api-schema/common-types";

const newsStructure: Structure = {
    id: "news",
    name: "News",
    schema: {
        news: { type: String },
        timestamp: { type: EpochSeconds },
    },
};
const xStructure: Structure = {
    id: "",
    name: "",
    schema: {
        "<id>": fromStructure(newsStructure),
    },
};
const structures = [xStructure, newsStructure];

const schema: Schema = {
    // FIXME - Map endpoint.
    cards: fromStructure(xStructure),
};

const NewsSelection: Selection = {
    name: "news",
    // FIXME - Verify description.
    description: "Get news entries. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default NewsSelection;
