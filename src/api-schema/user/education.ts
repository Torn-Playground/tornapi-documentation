import { ArrayInteger, Integer } from "@/api-schema/common-types";
import type { Schema, Selection } from "@/api-schema/schema.types";

const schema: Schema = {
    education_current: { type: Integer },
    education_timeleft: { type: Integer, description: "Seconds until the education is finished." },
    education_completed: { type: ArrayInteger },
};

const EducationSelection: Selection = {
    name: "education",
    description: "Get your education information.",
    access: "minimal",
    schema,
    structures: [],
    id: { optional: false },
    params: [],
};

export default EducationSelection;
