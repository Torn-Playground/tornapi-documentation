import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { rentedStructure } from "@/api-schema/shared/rented";

const staffStructure: Structure = {
    id: "staff",
    name: "Staff",
    schema: {
        maid: { type: Integer },
        guard: { type: Integer },
        pilot: { type: Integer },
        butler: { type: Integer },
        doctor: { type: Integer },
    },
};
const modificationsStructure: Structure = {
    id: "modifications",
    name: "Modifications",
    schema: {
        interior: { type: Integer },
        hot_tub: { type: Integer },
        sauna: { type: Integer },
        pool: { type: Integer },
        open_bar: { type: Integer },
        shooting_range: { type: Integer },
        vault: { type: Integer },
        medical_facility: { type: Integer },
        airstrip: { type: Integer },
        yacht: { type: Integer },
    },
};
const propertyStructure: Structure = {
    id: "property",
    name: "property",
    schema: {
        owner_id: { type: Integer },
        property_type: { type: Integer },
        property: { type: String },
        status: { type: String },
        happy: { type: Integer },
        upkeep: { type: Integer },
        staff_cost: { type: Integer },
        cost: { type: Integer },
        marketprice: { type: Integer },
        modifications: fromStructure(modificationsStructure),
        staff: fromStructure(staffStructure),
        rented: fromStructure(rentedStructure, {
            nullable: true,
            extra: "Will be null if the property is not being rented.",
        }),
    },
};
const propertiesStructure: Structure = {
    id: "properties",
    name: "Properties",
    schema: {
        "<property id>": fromStructure(propertyStructure),
    },
};
const structures = [propertiesStructure, propertyStructure, modificationsStructure, staffStructure, rentedStructure];

const schema: Schema = {
    properties: fromStructure(propertiesStructure),
};

const PropertiesSelection: Selection = {
    name: "properties",
    description: "List the properties that a player owns and their spouse.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
    params: [],
};

export default PropertiesSelection;
