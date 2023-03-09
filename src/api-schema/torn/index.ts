import { Section, Selection } from "@/api-schema/schema.types";
import RankedWarReportSelection from "@/api-schema/torn/rankedwarreport";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";

const selections: Selection[] = [LookupSelection, TimestampSelection, RankedWarReportSelection];

const TornSection: Section = {
    selections,
    defaultSelection: null,
    idDescription: "Supported ids depend on the selection.",
};

export default TornSection;
