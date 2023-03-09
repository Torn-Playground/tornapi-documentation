import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";

const selections: Selection[] = [LookupSelection, TimestampSelection];

const CompanySection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: null,
};

export default CompanySection;
