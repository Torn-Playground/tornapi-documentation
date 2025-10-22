import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { armoryItemStructure } from "@/api-schema/shared/armory";

const structures = [armoryItemStructure];

const schema: Schema = {
    boosters: fromStructure(armoryItemStructure, { array: true }),
};

const BoostersSelection: Selection = {
    name: "boosters",
    description: "View all boosters available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default BoostersSelection;
