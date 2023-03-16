import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { loanableArmoryItemStructure } from "@/api-schema/shared/armory";

const structures = [loanableArmoryItemStructure];

const schema: Schema = {
    weapons: fromStructure(loanableArmoryItemStructure, { array: true }),
};

const WeaponsSelection: Selection = {
    name: "weapons",
    description: "View all weapons available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default WeaponsSelection;
