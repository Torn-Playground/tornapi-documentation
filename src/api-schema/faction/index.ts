import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [LookupSelection, TimestampSelection];

const FactionSection: Section = {
    selections,
    defaultSelection: "basic",
    idDescription: null,
};

export default FactionSection;
