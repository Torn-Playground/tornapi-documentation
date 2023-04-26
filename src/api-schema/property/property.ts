import { ArrayString, Integer, IntegerAndString } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { rentedStructure } from "@/api-schema/shared/rented";

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
        rented: fromStructure(rentedStructure, { nullable: true }),
        users_living: { type: IntegerAndString, nullable: true },
    },
};
const structures = [propertyStructure, rentedStructure];

const schema: Schema = {
    property: fromStructure(propertyStructure),
};

const PropertySelection: Selection = {
    name: "property",
    description: "Look at the details of a specific property.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default PropertySelection;
