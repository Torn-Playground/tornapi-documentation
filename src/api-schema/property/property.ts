import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { ArrayString, Integer, IntegerAndString } from "@/api-schema/common-types";

const rentedStructure: Structure = {
    id: "rented",
    name: "Rented",
    schema: {
        user_id: { type: Integer },
        days_left: { type: Integer },
        total_cost: { type: Integer },
        cost_per_day: { type: Integer },
    },
};
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
        rented: fromStructure(rentedStructure, { nullable: true, array: false }),
        users_living: { type: IntegerAndString, nullable: true },
    },
};
const structures = [propertyStructure, rentedStructure];

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
