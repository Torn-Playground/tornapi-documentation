import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const chainStructure: Structure = {
    id: "chain",
    name: "Chain",
    schema: {
        current: { type: Integer },
        max: { type: Integer },
        timeout: { type: Integer, description: "Seconds until the chain would drop without hit." },
        modifier: { type: Number },
        cooldown: { type: Integer },
        start: { type: EpochSeconds },
        end: { type: EpochSeconds },
    },
};
const structures = [chainStructure];

const schema: Schema = {
    chain: fromStructure(chainStructure),
};

const ChainSelection: Selection = {
    name: "chain",
    description: "View information about the current chain.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default ChainSelection;
