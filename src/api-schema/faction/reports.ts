import type { Selection } from "@/api-schema/schema.types";
import { reportSchema, reportStructures } from "@/api-schema/shared/reports";

const ReportsSelection: Selection = {
    name: "reports",
    description: "List last 100 reports. Only available with faction API Access.",
    access: "limited",
    schema: reportSchema,
    structures: reportStructures,
    id: { optional: false },
};

export default ReportsSelection;
