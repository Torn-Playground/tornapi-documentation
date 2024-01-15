import { schema } from "@/api-schema/data";
import { SectionType } from "@/api-schema/schema.types";

function hasValidParts(key: string, section: SectionType | "", selections: string[]): boolean {
    if (!key) return false;

    if (!section) return false;

    const hasDefaultSelection = !!schema[section].defaultSelection;

    return hasDefaultSelection || selections.length >= 1;
}

export function createApiUrl(key: string, section: SectionType | "", id: string, selections: string[], comment: string, params: ParamInput[]): string {
    if (!hasValidParts(key, section, selections)) {
        return "";
    }

    const url = new URL(`https://api.torn.com/${section}/${id}`);
    const { searchParams } = url;
    if (selections.length > 0) searchParams.append("selections", selections.join(","));
    params.forEach((p) => searchParams.append(p.param, p.value));
    if (comment !== "") searchParams.append("comment", comment);
    searchParams.append("key", key);

    return decodeURIComponent(url.toString());
}

export type ParamInput = {
    param: string;
    value: string;
};

export type SelectedParamMap = { [key: string]: string };
