import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import PropertySelection from "@/api-schema/property/property";
import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [LookupSelection, TimestampSelection, PropertySelection];

const PropertySection: Section = {
    selections,
    defaultSelection: "property",
    idDescription: "Can be used with a property id, which can be obtained using the properties endpoint in the user section.",
};

export default PropertySection;
