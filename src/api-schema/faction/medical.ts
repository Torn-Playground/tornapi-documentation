import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { armoryItemStructure } from "@/api-schema/shared/armory";

const structures = [armoryItemStructure];

const schema: Schema = {
    medical: fromStructure(armoryItemStructure, { array: true }),
};

const MedicalSelection: Selection = {
    name: "medical",
    description: "View all medical items available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default MedicalSelection;
