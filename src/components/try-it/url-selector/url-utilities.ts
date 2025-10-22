import { schema } from "@/api-schema/data";
import type { SectionType } from "@/api-schema/schema.types";

function hasValidParts(key: string, section: SectionType | "", selections: string[]): boolean {
    if (!key) return false;

    if (!section) return false;

    const hasDefaultSelection = !!schema[section].defaultSelection;

    return hasDefaultSelection || selections.length >= 1;
}

export function createApiUrl(
    key: string,
    section: SectionType | "",
    id: string,
    selections: string[],
    customSelections: string[],
    comment: string,
    params: ParamInput[],
): string {
    if (!hasValidParts(key, section, [...selections, ...customSelections])) {
        return "";
    }

    const url = new URL(`https://api.torn.com/${section}/${id}`);
    const { searchParams } = url;
    searchParams.append("key", key);

    return extendLink(url, [...selections, ...customSelections], params, comment);
}

export function createShareUrl(
    section: SectionType | "",
    id: string,
    selections: string[],
    customSelections: string[],
    comment: string,
    params: ParamInput[],
): string {
    if (!hasValidParts("DUMMY", section, [...selections, ...customSelections])) {
        return "";
    }

    const url = new URL(`${location.origin}/try-it`);
    const { searchParams } = url;
    searchParams.append("section", section);
    if (id) searchParams.append("id", id);

    if (customSelections.length > 0) searchParams.append("custom-selections", customSelections.join(","));

    return extendLink(url, selections, params, comment);
}

function extendLink(url: URL, selections: string[], params: ParamInput[], comment: string): string {
    const { searchParams } = url;

    params.forEach((p) => searchParams.append(p.param, p.value));
    if (comment !== "") searchParams.append("comment", comment);
    if (selections.length > 0) searchParams.append("selections", selections.join(","));

    return decodeURIComponent(url.toString());
}

export interface ParamInput {
    param: string;
    value: string;
}

export type SelectedParamMap = Record<string, string>;
