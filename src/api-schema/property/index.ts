import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import PropertySelection from "@/api-schema/property/property";
import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [LookupSelection, TimestampSelection, PropertySelection];

const PropertySection: Section = {
    selections,
    defaultSelection: "property",
    idDescription: null,
};

export default PropertySection;
