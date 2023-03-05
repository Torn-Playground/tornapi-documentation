import { SectionType } from "@/api-schema/schema.types";
import { schema } from "@/api-schema/data";

function hasValidParts(key: string, section: SectionType | "", selections: string[]): boolean {
    if (!key) return false;

    if (!section) return false;

    const hasDefaultSelection = !!schema[section].defaultSelection;

    return hasDefaultSelection || selections.length >= 1;
}

// eslint-disable-next-line import/prefer-default-export
export function createApiUrl(key: string, section: SectionType | "", id: string, selections: string[]): string {
    if (!hasValidParts(key, section, selections)) {
        return "";
    }

    const url = new URL(`https://api.torn.com/${section}/${id}`);
    const { searchParams } = url;
    if (selections.length > 0) searchParams.append("selections", selections.join(","));
    // FIXME 2023/03/03 - Don't hardcode this comment.
    searchParams.append("comment", "TornAPI");
    searchParams.append("key", key);

    return url.toString();
}
