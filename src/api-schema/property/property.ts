import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { ArrayString, BugReportPending, Integer } from "@/api-schema/common-types";

const propertyStructure: Structure = {
    id: "property",
    name: "Property",
    schema: {
        owner_id: { type: Integer },
        property_type: { type: Integer },
        happy: { type: Integer },
        upkeep: { type: Integer },
        upgrades: { type: ArrayString },
        staff: { type: ArrayString },
        rented: { type: BugReportPending },
        users_living: { type: BugReportPending },
    },
};
const structures = [propertyStructure];

const schema: Schema = {
    property: fromStructure(propertyStructure),
};

const PropertySelection: Selection = {
    name: "property",
    description: "View a specific ranked war report.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default PropertySelection;
