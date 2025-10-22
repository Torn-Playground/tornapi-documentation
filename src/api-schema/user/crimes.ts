import type { Selection } from "@/api-schema/schema.types";
import { schema, structures } from "@/api-schema/shared/crimes";

const CrimesSelection: Selection = {
    name: "crimes",
    description: "Get the criminal record for a specific player. Identical the the criminalrecord selection, except for the access level.",
    access: "minimal",
    schema,
    structures,
    id: { optional: true },
};

export default CrimesSelection;
