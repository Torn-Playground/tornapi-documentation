import { Integer } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const bankStructure: Structure = {
    id: "bank",
    name: "City Bank",
    schema: {
        amount: { type: Integer },
        time_left: { type: Integer, description: "Seconds until your bank investment is over." },
    },
};
const structures = [bankStructure];

const schema: Schema = {
    points: { type: Integer },
    cayman_bank: { type: Integer },
    vault_amount: { type: Integer },
    company_funds: { type: Integer },
    daily_networth: { type: Integer },
    money_onhand: { type: Integer },
    city_bank: fromStructure(bankStructure),
};

const MoneySelection: Selection = {
    name: "money",
    description: "Get information about your money.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default MoneySelection;
