import { Section, Selection } from "@/api-schema/schema.types";
import RankedWarReportSelection from "@/api-schema/torn/rankedwarreport";

const selections: Selection[] = [RankedWarReportSelection];

const TornSection: Section = {
    selections,
    defaultSelection: null,
    idDescription: "Supported ids depend on the selection.",
};

export default TornSection;
