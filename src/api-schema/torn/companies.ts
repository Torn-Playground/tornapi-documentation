import { Integer, IntegerAndEmptyString, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const specialAbilityEnum: StructureEnum<string> = {
    id: "special_ability",
    name: "Special Ability",
    values: ["None", "Cleaner", "Manager", "Secretary", "Trainer", "Marketer"],
    type: String,
};
const specialStructure: Structure = {
    id: "special",
    name: "Special",
    schema: {
        effect: { type: String },
        cost: { type: Integer, extra: "Passive specials will have a cost of 0." },
        rating_required: { type: Integer },
    },
};
const specialsStructure: Structure = {
    id: "specials",
    name: "Specials",
    schema: {
        "<name>": fromStructure(specialStructure),
    },
};
const stockStructure: Structure = {
    id: "stock",
    name: "Stock",
    schema: {
        cost: { type: IntegerAndEmptyString },
        rrp: { type: Integer },
    },
};
const stocksStructure: Structure = {
    id: "stocks",
    name: "Stocks",
    schema: {
        "<name>": fromStructure(stockStructure),
    },
};
const positionStructure: Structure = {
    id: "position",
    name: "Position",
    schema: {
        man_required: { type: Integer },
        int_required: { type: Integer },
        end_required: { type: Integer },
        man_gain: { type: Integer },
        int_gain: { type: Integer },
        end_gain: { type: Integer },
        special_ability: fromStructure(specialAbilityEnum),
        description: { type: String },
    },
};
const positionsStructure: Structure = {
    id: "positions",
    name: "Positions",
    schema: {
        "<name>": fromStructure(positionStructure),
    },
};
const companyStructure: Structure = {
    id: "company",
    name: "Company",
    schema: {
        name: { type: String },
        cost: { type: Integer },
        default_employees: { type: Integer },
        positions: fromStructure(positionsStructure),
        stock: fromStructure(stocksStructure),
        specials: fromStructure(specialsStructure),
    },
};
const companiesStructure: Structure = {
    id: "companies",
    name: "Companies",
    schema: {
        "<company-id>": fromStructure(companyStructure),
    },
};
const structures = [
    companiesStructure,
    companyStructure,
    positionsStructure,
    positionStructure,
    stocksStructure,
    stockStructure,
    specialsStructure,
    specialStructure,
    specialAbilityEnum,
];

const schema: Schema = {
    companies: fromStructure(companiesStructure),
};

const CompaniesSelection: Selection = {
    name: "companies",
    description: "Get a list of all company types with their positions and specials.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default CompaniesSelection;
