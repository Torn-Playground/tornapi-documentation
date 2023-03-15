import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { EpochSeconds, Integer, Number } from "@/api-schema/common-types";
import { bonusStructure, membersStructure, memberStructure } from "@/api-schema/shared/chain-report";

const chainReportStructure: Structure = {
    id: "chain_report",
    name: "Chain Report",
    schema: {
        factionID: { type: Integer },
        chain: { type: Integer },
        start: { type: EpochSeconds },
        end: { type: EpochSeconds },
        leave: { type: Integer },
        mug: { type: Integer },
        hospitalize: { type: Integer },
        assists: { type: Integer },
        overseas: { type: Integer },
        draws: { type: Integer },
        escapes: { type: Integer },
        losses: { type: Integer },
        respect: { type: Number },
        targets: { type: Integer },
        warhits: { type: Integer },
        besthit: { type: Integer },
        retaliations: { type: Integer },
        members: fromStructure(membersStructure),
        bonuses: fromStructure(bonusStructure, { array: true }),
    },
};
const structures = [chainReportStructure, membersStructure, memberStructure, bonusStructure];

const schema: Schema = {
    chainreport: fromStructure(chainReportStructure),
};

const ChainReportSelection: Selection = {
    name: "chainreport",
    description: "View chain report of the last chain. Only available with faction API Access.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default ChainReportSelection;
