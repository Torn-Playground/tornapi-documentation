import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const criminalrecordStructure: Structure = {
    id: "criminalrecord",
    name: "Criminal Record",
    schema: {
        selling_illegal_products: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        theft: { type: Integer },
        auto_theft: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        drug_deals: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        computer_crimes: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        murder: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        fraud_crimes: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        other: { type: Integer, nullable: true, extra: "Only present for players that are still on the old crimes system." },
        vandalism: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        counterfeiting: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        fraud: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        illicitservices: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        cybercrime: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        extortion: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        illegalproduction: { type: Integer, nullable: true, extra: "Only present for players that migrated to crimes 2.0." },
        total: { type: Integer },
    },
};
const structures = [criminalrecordStructure];

const schema: Schema = {
    criminalrecord: fromStructure(criminalrecordStructure),
};

const CrimesSelection: Selection = {
    name: "crimes",
    description: "Get the criminal record for a specific player.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
};

export default CrimesSelection;
