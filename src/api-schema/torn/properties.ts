import { ArrayString, Integer, IntegerAndEmptyString, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const propertyStructure: Structure = {
    id: "property",
    name: "Property",
    schema: {
        name: { type: String },
        cost: { type: IntegerAndEmptyString },
        happy: { type: Integer },
        upgrades_available: { type: ArrayString },
        staff_available: { type: ArrayString },
    },
};
const propertiesStructure: Structure = {
    id: "properties",
    name: "Properties",
    schema: {
        "<id>": fromStructure(propertyStructure),
    },
};
const structures = [propertiesStructure, propertyStructure];

const schema: Schema = {
    properties: fromStructure(propertiesStructure),
};

const PropertiesSelection: Selection = {
    name: "properties",
    description: "All existing property types.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default PropertiesSelection;
