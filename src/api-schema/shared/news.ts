import { EpochSeconds, String } from "@/api-schema/common-types";
import { fromStructure, Structure } from "@/api-schema/schema.types";

export const newsStructure: Structure = {
    id: "news_entry",
    name: "News Entry",
    schema: {
        news: { type: String },
        timestamp: { type: EpochSeconds },
    },
};
export const newsMapStructure: Structure = {
    id: "news",
    name: "News",
    schema: {
        "<id>": fromStructure(newsStructure),
    },
};
