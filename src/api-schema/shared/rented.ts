import { Integer } from "@/api-schema/common-types";
import { Structure } from "@/api-schema/schema.types";

export const rentedStructure: Structure = {
    id: "rented",
    name: "Rented",
    schema: {
        user_id: { type: Integer },
        days_left: { type: Integer },
        total_cost: { type: Integer },
        cost_per_day: { type: Integer },
    },
};
