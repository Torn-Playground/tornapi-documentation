import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const companyPointsStructure: Structure = {
    id: "company_points",
    name: "Company Points",
    schema: {
        name: { type: String, description: "Company Type name." },
        jobpoints: { type: Integer },
    },
};
const companiesStructure: Structure = {
    id: "companies",
    name: "Companies",
    schema: {
        "<company type id>": fromStructure(companyPointsStructure),
    },
};
const jobsStructure: Structure = {
    id: "jobs",
    name: "Jobs",
    schema: {
        education: { type: Integer, nullable: true, extra: "Will be null if there are no job points." },
        law: { type: Integer, nullable: true, extra: "Will be null if there are no job points." },
        grocer: { type: Integer, nullable: true, extra: "Will be null if there are no job points." },
    },
};
const jobPointsStructure: Structure = {
    id: "job_points",
    name: "Job Points",
    schema: {
        jobs: fromStructure(jobsStructure),
        companies: fromStructure(companiesStructure),
    },
};
const structures = [jobPointsStructure, jobsStructure, companiesStructure, companyPointsStructure];

const schema: Schema = {
    jobpoints: fromStructure(jobPointsStructure),
};

const JobPointsSelection: Selection = {
    name: "jobpoints",
    description: "Get your currently owned job points.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default JobPointsSelection;
