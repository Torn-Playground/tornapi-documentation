import { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    cesium: { type: "unknown" },
};

const CesiumSelection: Selection = {
    name: "cesium",
    description: "View the factions cesium supply. Only available with faction API Access.",
    warning: "Still work in progress.",
    access: "limited",
    schema,
    structures: [],
    id: { optional: false },
};

export default CesiumSelection;
