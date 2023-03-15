import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { loanableArmoryItemStructure } from "@/api-schema/shared/armory";

const structures = [loanableArmoryItemStructure];

const schema: Schema = {
    temporary: fromStructure(loanableArmoryItemStructure, { array: true }),
};

const TemporarySelection: Selection = {
    name: "temporary",
    description: "View all temporary items available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default TemporarySelection;
