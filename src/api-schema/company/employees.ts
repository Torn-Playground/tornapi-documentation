import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer, String } from "@/api-schema/common-types";
import { lastActionStructure, statusStructure } from "@/api-schema/user/profile";

const effectivenessStructure: Structure = {
    id: "effectiveness",
    name: "Effectiveness",
    // FIXME - Validate fields.
    // - book
    // - not settled in
    // - no education
    schema: {
        working_stats: { type: Integer },
        settled_in: { type: Integer },
        merits: { type: Integer, nullable: true },
        director_education: { type: Integer },
        addiction: { type: Integer, nullable: true },
        total: { type: Integer },
    },
};
const employeeStructure: Structure = {
    id: "employee",
    name: "Employee",
    schema: {
        name: { type: String },
        position: { type: String },
        days_in_company: { type: Integer },
        // FIXME - Validate for directors.
        wage: { type: Integer, nullable: true, extra: "Only present for yourself." },
        manual_labor: {
            type: Integer,
            nullable: true,
            extra: "Only present when requesting this for your own company.",
        },
        intelligence: {
            type: Integer,
            nullable: true,
            extra: "Only present when requesting this for your own company.",
        },
        endurance: { type: Integer, nullable: true, extra: "Only present when requesting this for your own company." },
        // FIXME - Validate for new employee.
        effectiveness: fromStructure(effectivenessStructure, {
            nullable: true,
            extra: "Only present when requesting this for your own company.",
        }),
        last_action: fromStructure(lastActionStructure),
        status: fromStructure(statusStructure),
    },
};
const employeesStructure: Structure = {
    id: "employees",
    name: "Employees",
    schema: {
        "<user id>": fromStructure(employeeStructure),
    },
};
const structures = [employeesStructure, employeeStructure, effectivenessStructure];

const schema: Schema = {
    company_employees: fromStructure(employeesStructure),
};

const EmployeesSelection: Selection = {
    name: "employees",
    description: "View employee data from a company.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default EmployeesSelection;
