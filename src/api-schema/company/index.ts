import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import ProfileSelection from "@/api-schema/company/profile";
import EmployeesSelection from "@/api-schema/company/employees";
import CompaniesSelection from "@/api-schema/company/companies";

const selections: Selection[] = [
    // applications (director only)
    CompaniesSelection,
    // detailed (director only)
    EmployeesSelection,
    LookupSelection,
    // news (director only)
    // newsfull (director only)
    ProfileSelection,
    // stock (director only)
    TimestampSelection,
];

const CompanySection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: null,
};

export default CompanySection;
