import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer, String } from "@/api-schema/common-types";
import { lastActionStatusEnum, lastActionStructure } from "@/api-schema/shared/last-action";
import { statusColorEnum, statusStateEnum, statusStructure } from "@/api-schema/shared/status";

const employeeStructure: Structure = {
    id: "employee",
    name: "Employee",
    schema: {
        name: { type: String },
        position: { type: String },
        days_in_company: { type: Integer },
        last_action: fromStructure(lastActionStructure),
        status: fromStructure(statusStructure),
    },
};
const employeesStructure: Structure = {
    id: "employees",
    name: "Employees",
    schema: {
        "<user-id>": fromStructure(employeeStructure),
    },
};
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
        employees: fromStructure(employeesStructure),
    },
};
const structures = [
    companyStructure,
    employeesStructure,
    employeeStructure,
    lastActionStructure,
    lastActionStatusEnum,
    statusStructure,
    statusColorEnum,
    statusStateEnum,
];

const schema: Schema = {
    company: fromStructure(companyStructure),
};

const ProfileSelection: Selection = {
    name: "profile",
    description: "View the details of a specific company.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default ProfileSelection;
