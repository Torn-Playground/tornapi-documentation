import { ArrayString, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const accessLevelEnum: StructureEnum<number> = {
    id: "access_level",
    name: "Access Level",
    values: [0, 1, 2, 3, 4],
    type: Integer,
};
const accessTypeEnum: StructureEnum<string> = {
    id: "access_type",
    name: "Access Type",
    values: ["Custom", "Public Only", "Minimal Access", "Limited Access", "Full Access"],
    type: String,
};
const selectionsStructure: Structure = {
    id: "selections",
    name: "Selections",
    schema: {
        company: { type: ArrayString },
        faction: { type: ArrayString },
        market: { type: ArrayString },
        property: { type: ArrayString },
        torn: { type: ArrayString },
        user: { type: ArrayString },
        key: { type: ArrayString },
    },
};
const structures = [selectionsStructure, accessTypeEnum, accessLevelEnum];

const schema: Schema = {
    access_level: fromStructure(accessLevelEnum),
    access_type: fromStructure(accessTypeEnum),
    selections: fromStructure(selectionsStructure),
};

const InfoSelection: Selection = {
    name: "info",
    description: "Get information about the used api key.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default InfoSelection;
