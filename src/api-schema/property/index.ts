import { Section, Selection } from "@/api-schema/schema.types";
import PropertySelection from "@/api-schema/property/property";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";

const selections: Selection[] = [LookupSelection, TimestampSelection, PropertySelection];

const PropertySection: Section = {
    selections,
    defaultSelection: "property",
    idDescription: null,
};

export default PropertySection;
