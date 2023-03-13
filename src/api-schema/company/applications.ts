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

const ApplicationsSelection: Selection = {
    name: "applications",
    // FIXME - Verify description.
    description: "List all (open) applications. Only available for directors.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default ApplicationsSelection;
