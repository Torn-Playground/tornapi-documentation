import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const barStructure: Structure = {
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
const chainBarStructure: Structure = {
    id: "chain_bar",
    name: "Chain Bar",
    schema: {
        current: { type: Integer },
        maximum: { type: Integer },
        timeout: { type: Integer, description: "Seconds until the chain would drop without hit." },
        modifier: { type: Number },
        cooldown: { type: Integer },
    },
};
const structures = [barStructure, chainBarStructure];

const schema: Schema = {
    server_time: { type: EpochSeconds },
    happy: fromStructure(barStructure),
    life: fromStructure(barStructure),
    energy: fromStructure(barStructure),
    nerve: fromStructure(barStructure),
    chain: fromStructure(chainBarStructure),
};

const BarsSelection: Selection = {
    name: "bars",
    description: "Show the bars from the sidebar.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default BarsSelection;
