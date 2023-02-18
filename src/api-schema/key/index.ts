import { Section, Selection } from "@/api-schema/schema.types";
import InfoSelection from "@/api-schema/key/info";

const selections: Selection[] = [InfoSelection];

const KeySection: Section = {
    selections,
    defaultSelection: null,
    idDescription: null,
};

export default KeySection;
