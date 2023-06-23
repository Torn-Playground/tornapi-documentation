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
        company: {
            type: ArrayString,
            description:
                "These are the selections under the company section that can be access using this key. All possible values can be found on the company documentation page.",
        },
        faction: {
            type: ArrayString,
            description:
                "These are the selections under the faction section that can be access using this key. All possible values can be found on the faction documentation page.",
        },
        market: {
            type: ArrayString,
            description:
                "These are the selections under the market section that can be access using this key. All possible values can be found on the market documentation page.",
        },
        property: {
            type: ArrayString,
            description:
                "These are the selections under the property section that can be access using this key. All possible values can be found on the property documentation page.",
        },
        torn: {
            type: ArrayString,
            description:
                "These are the selections under the torn section that can be access using this key. All possible values can be found on the company documentation page.",
        },
        user: {
            type: ArrayString,
            description:
                "These are the selections under the user section that can be access using this key. All possible values can be found on the company documentation page.",
        },
        key: {
            type: ArrayString,
            description:
                "These are the selections under the key section that can be access using this key. All possible values can be found on the key documentation page.",
        },
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
