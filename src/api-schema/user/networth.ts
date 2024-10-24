import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const networthStructure: Structure = {
    schema: {
        pending: { type: Integer, description: "Money put in trades." },
        wallet: { type: Integer },
        bank: { type: Integer, description: "Money invested in the bank." },
        points: { type: Integer },
        cayman: { type: Integer },
        vault: {
            type: Integer,
            description: "Money in your property vault. Will only have an actual value if you own the property itself, not your spouse.",
        },
        piggybank: { type: Integer, description: "Money you've put in your piggy bank." },
        items: { type: Integer },
        displaycase: { type: Integer },
        bazaar: { type: Integer },
        trade: {
            type: Integer,
            description: "Value of the items you put in trades.",
        },
        itemmarket: { type: Integer },
        properties: { type: Integer },
        stockmarket: { type: Integer },
        auctionhouse: { type: Integer },
        company: { type: Integer },
        bookie: { type: Integer },
        enlistedcars: {
            type: Integer,
            description: "Value of the cars that you've enlisted to be used at the racetrack.",
        },
        loan: { type: Integer },
        unpaidfees: {
            type: Integer,
            description: "Unpaid property rent. Will only have an actual value if you own or rent the property itself, not your spouse.",
        },
        total: { type: Integer },
        parsetime: { type: Number, description: "Time it took to get this information." },
        timestamp: { type: EpochSeconds, description: "Time when this data was generated." },
    },
    id: "networth",
    name: "Networth",
};
const structures = [networthStructure];

const schema: Schema = {
    networth: fromStructure(networthStructure),
};

const NetworthSelection: Selection = {
    name: "networth",
    description: "View your live networth values.",
    cache: "Global cache of 1 hour, not able to be bypassed.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default NetworthSelection;
