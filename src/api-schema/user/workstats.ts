import { Integer } from "@/api-schema/common-types";
import type { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    manual_labor: { type: Integer },
    intelligence: { type: Integer },
    endurance: { type: Integer },
};

const WorkStatsSelection: Selection = {
    name: "workstats",
    description: "Get your work stats.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default WorkStatsSelection;
