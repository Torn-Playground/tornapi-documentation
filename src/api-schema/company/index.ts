import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import ProfileSelection from "@/api-schema/company/profile";
import EmployeesSelection from "@/api-schema/company/employees";
import CompaniesSelection from "@/api-schema/company/companies";
import ApplicationsSelection from "@/api-schema/company/applications";
import DetailedSelection from "@/api-schema/company/detailed";
import NewsSelection from "@/api-schema/company/news";
import NewsFullSelection from "@/api-schema/company/newsfull";
import StocksSelection from "@/api-schema/torn/stocks";

// https://www.torn.com/preferences.php#tab=api?step=addNewKey&title=TornAPI&company=applications,detailed,news,newsfull,stock

const selections: Selection[] = [
    ApplicationsSelection,
    CompaniesSelection,
    DetailedSelection,
    EmployeesSelection,
    LookupSelection,
    NewsSelection,
    NewsFullSelection,
    ProfileSelection,
    StocksSelection,
    TimestampSelection,
];

const CompanySection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: null,
};

export default CompanySection;
