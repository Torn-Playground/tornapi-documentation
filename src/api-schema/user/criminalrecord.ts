import { Selection } from "@/api-schema/schema.types";
import { schema, structures } from "@/api-schema/shared/crimes";

const CriminalRecordSelection: Selection = {
    name: "criminalrecord",
    description: "Get the criminal record for a specific player.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default CriminalRecordSelection;
