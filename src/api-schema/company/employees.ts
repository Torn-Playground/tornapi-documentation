import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { lastActionStatusEnum, lastActionStructure } from "@/api-schema/shared/last-action";
import { statusColorEnum, statusStateEnum, statusStructure } from "@/api-schema/shared/status";

const effectivenessStructure: Structure = {
    id: "effectiveness",
    name: "Effectiveness",
    schema: {
        working_stats: { type: Integer },
        settled_in: { type: Integer, nullable: true },
        merits: { type: Integer, nullable: true },
        director_education: { type: Integer, nullable: true },
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
        wage: { type: Integer, nullable: true, extra: "Only present for yourself or the director." },
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
const structures = [
    employeesStructure,
    employeeStructure,
    effectivenessStructure,
    statusStructure,
    statusColorEnum,
    statusStateEnum,
    lastActionStructure,
    lastActionStatusEnum,
];

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
