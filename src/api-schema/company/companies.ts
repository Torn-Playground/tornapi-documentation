import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const companyStructure: Structure = {
    id: "company",
    name: "Company",
    schema: {
        ID: { type: Integer },
        company_type: { type: Integer },
        rating: { type: Integer },
        name: { type: String },
        director: { type: Integer },
        employees_hired: { type: Integer },
        employees_capacity: { type: Integer },
        daily_income: { type: Integer },
        daily_customers: { type: Integer },
        weekly_income: { type: Integer },
        weekly_customers: { type: Integer },
        days_old: { type: Integer },
    },
};
const companiesStructure: Structure = {
    id: "companies",
    name: "Companies",
    schema: {
        "<company id>": fromStructure(companyStructure),
    },
};
const structures = [companiesStructure, companyStructure];

const schema: Schema = {
    cards: fromStructure(companiesStructure),
};

const CompaniesSelection: Selection = {
    name: "companies",
    description: "Get all companies for a specific company type.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default CompaniesSelection;
