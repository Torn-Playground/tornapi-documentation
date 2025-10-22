import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { bar } from "@/api-schema/shared/bar";

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
const structures = [bar, chainBarStructure];

const schema: Schema = {
    server_time: { type: EpochSeconds },
    happy: fromStructure(bar),
    life: fromStructure(bar),
    energy: fromStructure(bar),
    nerve: fromStructure(bar),
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
