import { SectionType } from "@/api-schema/schema.types";

export function buildCustomKeyUrl(title: string, sections: Record<SectionType, string[]>): string | null {
    if (!title) return null;

    const hasSelections = !!Object.values(sections).find((selections) => selections.length > 0);
    if (!hasSelections) return null;

    const searchParams = new URLSearchParams();
    searchParams.append("step", "addNewKey");
    searchParams.append("title", title);

    Object.entries(sections)
        .filter(([, selections]) => selections.length > 0)
        .forEach(([section, selections]) => searchParams.append(section, selections.join(",")));

    return `https://www.torn.com/preferences.php#tab=api?${searchParams.toString()}`;
}
