import InfoSelection from "@/api-schema/key/info";
import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [InfoSelection];

const KeySection: Section = {
    selections,
    defaultSelection: null,
    idDescription: null,
};

export default KeySection;
