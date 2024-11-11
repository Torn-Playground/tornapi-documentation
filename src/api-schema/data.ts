import company from "@/api-schema/company";
import faction from "@/api-schema/faction";
import key from "@/api-schema/key";
import market from "@/api-schema/market";
import property from "@/api-schema/property";
import { Param, Section, SectionType, Selection } from "@/api-schema/schema.types";
import torn from "@/api-schema/torn";
import user from "@/api-schema/user";

const schema: Record<SectionType, Section> = {
    user,
    property,
    faction,
    company,
    market,
    torn,
    key,
};
const sections = Object.keys(schema);

export function getActiveSelections(): [SectionType, Section][] {
    return Object.entries(schema)
        .filter(([, section]) => section.selections.length > 0)
        .filter(isSectionEntry);
}

export function getSelectableSelections(): [SectionType, string[]][] {
    return getActiveSelections()
        .filter(([name]) => name !== "key") // Exclude the 'key' section as it's available by default.
        .map(([name, section]) => {
            return [
                name,
                section.selections.map((s) => s.name).filter((selection) => selection !== "lookup" && selection !== "timestamp"), // Exclude the 'lookup' and 'timestamp selections as it's available by default.
            ];
        });
}

export function isSectionEntry(entry: [string, Section]): entry is [SectionType, Section] {
    return isSection(entry[0]);
}

export { sections, schema };

export function isSection(section: string): section is SectionType {
    return sections.includes(section);
}

function getSelectionsFromNames(section: SectionType | "", selectionNames: string[]): Selection[] {
    let selections: Selection[];

    if (section) {
        if (selectionNames.length) {
            selections = selectionNames.map((selection) => schema[section].selections.find((s) => s.name === selection)).filter((selection) => !!selection);
        } else {
            const { defaultSelection } = schema[section];
            if (defaultSelection) {
                const selection = schema[section].selections.find((s) => s.name === defaultSelection);

                selections = selection ? [selection] : [];
            } else selections = [];
        }
    } else {
        selections = [];
    }

    return selections;
}

export function getPossibleParams(section: SectionType | "", selectionNames: string[]): Param[] {
    return getSelectionsFromNames(section, selectionNames).flatMap((selection) => selection.params ?? []);
}
