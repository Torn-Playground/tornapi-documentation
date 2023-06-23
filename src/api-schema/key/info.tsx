import Link from "next/link";
import { ArrayString, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, SectionType, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

function buildSectionDescription(section: SectionType) {
    return {
        text: `All accessible selections under the ${section} section accessible using this key.`,
        node: () => (
            <span>
                All accessible selections under{" "}
                <Link href={`/${section}`} className="link">
                    the {section} section
                </Link>{" "}
                accessible using this key.
            </span>
        ),
    };
}

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
        company: { type: ArrayString, description: buildSectionDescription("company") },
        faction: { type: ArrayString, description: buildSectionDescription("faction") },
        market: { type: ArrayString, description: buildSectionDescription("market") },
        property: { type: ArrayString, description: buildSectionDescription("property") },
        torn: { type: ArrayString, description: buildSectionDescription("torn") },
        user: { type: ArrayString, description: buildSectionDescription("user") },
        key: { type: ArrayString, description: buildSectionDescription("key") },
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
