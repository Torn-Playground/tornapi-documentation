import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { armoryItemStructure } from "@/api-schema/shared/armory";

const structures = [armoryItemStructure];

const schema: Schema = {
    drugs: fromStructure(armoryItemStructure, { array: true }),
};

const DrugsSelection: Selection = {
    name: "drugs",
    description: "View all drugs available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default DrugsSelection;
