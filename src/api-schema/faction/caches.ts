import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { armoryItemStructure } from "@/api-schema/shared/armory";

const structures = [armoryItemStructure];

const schema: Schema = {
    caches: fromStructure(armoryItemStructure, { array: true }),
};

const CachesSelection: Selection = {
    name: "caches",
    description: "View all caches available in the faction armory. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
};

export default CachesSelection;
