import company from "@/api-schema/company";
import faction from "@/api-schema/faction";
import key from "@/api-schema/key";
import market from "@/api-schema/market";
import property from "@/api-schema/property";
import torn from "@/api-schema/torn";
import user from "@/api-schema/user";
import { Section, SectionType } from "@/api-schema/schema.types";

const schema: { [key in SectionType]: Section } = {
    user,
    property,
    faction,
    company,
    market,
    torn,
    key,
};
const sections = Object.keys(schema);

export function getActiveSelections(): [string, Section][] {
    return Object.entries(schema).filter(([, section]) => section.selections.length > 0);
}

export { sections, schema };

export function isSection(section: string): section is SectionType {
    return sections.includes(section);
}
