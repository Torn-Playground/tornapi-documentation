import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const historyStructure: Structure = {
    id: "history",
    name: "History",
    schema: {
        timestamp: { type: EpochSeconds },
        price: { type: Number },
        change: { type: Number },
    },
};
const priceStructure: Structure = {
    id: "price",
    name: "Price",
    schema: {
        change: { type: Number },
        change_percentage: { type: Number },
        start: { type: Number },
        end: { type: Number },
        high: { type: Number },
        low: { type: Number },
    },
};
const benefitTypeEnum: StructureEnum<string> = {
    id: "benefit_type",
    name: "Benefit Type",
    values: ["active", "passive"],
    type: String,
};
const benefitStructure: Structure = {
    id: "benefit",
    name: "Benefit",
    schema: {
        type: fromStructure(benefitTypeEnum),
        frequency: { type: Integer },
        requirement: { type: Integer },
        description: { type: String },
    },
};
const stockStructure: Structure = {
    id: "stock",
    name: "Stock",
    schema: {
        stock_id: { type: Integer },
        name: { type: String },
        acronym: { type: String },
        current_price: { type: Number },
        market_cap: { type: Integer },
        total_shares: { type: Integer },
        investors: { type: Integer },
        benefit: fromStructure(benefitStructure, { nullable: true, extra: "Only present when you provide an id." }),
        last_hour: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        last_day: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        last_week: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        last_month: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        last_year: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        all_time: fromStructure(priceStructure, { nullable: true, extra: "Only present when you provide an id." }),
        history: fromStructure(historyStructure, {
            array: true,
            nullable: true,
            extra: "Only present when you provide an id.",
        }),
    },
};
const stocksStructure: Structure = {
    id: "stocks",
    name: "Stocks",
    schema: {
        "<id>": fromStructure(stockStructure),
    },
};
const structures = [stocksStructure, stockStructure, benefitStructure, benefitTypeEnum, priceStructure, historyStructure];

const schema: Schema = {
    stocks: fromStructure(stocksStructure),
};

const StocksSelection: Selection = {
    name: "stocks",
    description: "List all stocks.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default StocksSelection;
