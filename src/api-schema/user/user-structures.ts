import { Integer } from "@/api-schema/common-types";
import { Structure } from "@/api-schema/schema.types";

const bar: Structure = {
    id: "bar",
    name: "Bar",
    schema: {
        current: { type: Integer },
        maximum: { type: Integer },
        increment: { type: Integer },
        interval: { type: Integer },
        ticktime: { type: Integer, description: "Seconds till the next life increment." },
        fulltime: { type: Integer, description: "Seconds till the life is full.", extra: "Will be 0 if already full." },
    },
};

// eslint-disable-next-line import/prefer-default-export
export { bar };
