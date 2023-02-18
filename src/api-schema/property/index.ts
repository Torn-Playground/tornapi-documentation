import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [];

const PropertySection: Section = {
    selections,
    defaultSelection: "property",
    idDescription: null,
};

export default PropertySection;
