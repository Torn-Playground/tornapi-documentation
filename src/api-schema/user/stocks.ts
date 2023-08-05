import { EpochSeconds, Integer, Number, NumberBoolean } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const bonusStructure: Structure = {
    id: "bonus",
    name: "Bonus",
    schema: {
        ready: { type: NumberBoolean },
        increment: { type: Integer },
        progress: { type: Integer },
        frequency: { type: Integer, description: "Days before" },
    },
};
const transactionStructure: Structure = {
    id: "transaction",
    name: "Transaction",
    schema: {
        shares: { type: Integer },
        bought_price: { type: Number },
        time_bought: { type: EpochSeconds },
    },
};
const transactionsStructure: Structure = {
    id: "transactions",
    name: "Transactions",
    schema: {
        "<some id>": fromStructure(transactionStructure),
    },
};
const stockStructure: Structure = {
    id: "stock",
    name: "Stock",
    schema: {
        stock_id: { type: Integer },
        total_shares: { type: Integer },
        dividend: fromStructure(bonusStructure, {
            nullable: true,
            extra: "Only present for dividend stocks, if there are enough stocks for a dividend.",
        }),
        benefit: fromStructure(bonusStructure, {
            nullable: true,
            extra: "Only present for passive benefit stocks, if there are enough stocks for the passive benefit.",
        }),
        transactions: fromStructure(transactionsStructure),
    },
};
const stocksStructure: Structure = {
    id: "stocks",
    name: "Stocks",
    schema: {
        "<stock id>": fromStructure(stockStructure),
    },
};
const structures = [stocksStructure, stockStructure, transactionsStructure, transactionStructure, bonusStructure];

const schema: Schema = {
    stocks: fromStructure(stocksStructure),
};

const StocksSelection: Selection = {
    name: "stocks",
    description: "",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default StocksSelection;
