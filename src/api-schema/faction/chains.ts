import { TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const chainStructure: Structure = {
    id: "chain",
    name: "Chain",
    schema: {
        chain: { type: Integer },
        respect: { type: String },
        start: { type: EpochSeconds },
        end: { type: EpochSeconds },
    },
};
const chainsStructure: Structure = {
    id: "chains",
    name: "Chains",
    schema: {
        "<chain id>": fromStructure(chainStructure),
    },
};
const structures = [chainsStructure, chainStructure];

const schema: Schema = {
    chains: fromStructure(chainsStructure),
};

const ChainsSelection: Selection = {
    name: "chains",
    description: "View the last 100 chains. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO],
};

export default ChainsSelection;
