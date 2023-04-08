import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { bonusStructure, membersStructure, memberStructure } from "@/api-schema/shared/chain-report";

const chainReportStructure: Structure = {
    id: "chain_report",
    name: "Chain Report",
    schema: {
        code: { type: Integer, nullable: true, extra: "Only present if the id is incorrect." },
        error: { type: String, nullable: true, extra: "Only present if the id is incorrect." },
        factionID: { type: Integer, nullable: true },
        chain: { type: Integer, nullable: true },
        start: { type: EpochSeconds, nullable: true },
        end: { type: EpochSeconds, nullable: true },
        leave: { type: Integer, nullable: true },
        mug: { type: Integer, nullable: true },
        hospitalize: { type: Integer, nullable: true },
        assists: { type: Integer, nullable: true },
        overseas: { type: Integer, nullable: true },
        draws: { type: Integer, nullable: true },
        escapes: { type: Integer, nullable: true },
        losses: { type: Integer, nullable: true },
        respect: { type: Number, nullable: true },
        targets: { type: Integer, nullable: true },
        warhits: { type: Integer, nullable: true },
        besthit: { type: Integer, nullable: true },
        retaliations: { type: Integer, nullable: true },
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
    description: "View a chain report.",
    warning: "Does not follow the usual error structure for not providing an id.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default ChainReportSelection;
