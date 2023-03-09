import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";

const selections: Selection[] = [LookupSelection, TimestampSelection];

const MarketSection: Section = {
    selections,
    defaultSelection: "bazaar",
    idDescription: null,
};

export default MarketSection;
