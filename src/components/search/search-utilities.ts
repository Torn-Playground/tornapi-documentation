import { getActiveSelections } from "@/api-schema/data";
import { isField, isFieldStructure, Schema } from "@/api-schema/schema.types";

export type SearchSection = { name: string };
export type SearchSelection = { name: string };
export type SearchField = { selection: string; structure: string | undefined; name: string; keywords: string[] };
export type SearchResult = {
    section: SearchSection;
    selections: SearchSelection[];
    fields: SearchField[];
};

export function search(term: string): SearchResult[] {
    if (!term) {
        return [];
    }

    const results = getActiveSelections()
        .map<SearchResult>(([sectionName, section]) => {
            const selections = section.selections
                .filter((selection) => selection.name.toLowerCase().includes(term.toLowerCase()))
                .map((selection) => ({ name: selection.name }));

            const allFields = [
                ...new Set(
                    section.selections
                        .flatMap((selection) => extractFields(selection.name, selection.schema))
                        .filter((field) => matchField(field, term))
                        .map((field) => JSON.stringify(field)), // Map to JSON to be able to remove duplicates.
                ),
            ].map((fieldString) => JSON.parse(fieldString) as SearchField);

            return {
                section: { name: sectionName },
                selections,
                fields: allFields,
            };
        })
        .filter((section) => section.selections.length > 0 || section.fields.length > 0);

    console.log(results);

    return results;
}

function extractFields(selection: string, schema: Schema, parentStructure: string | undefined = undefined): SearchField[] {
    const list: SearchField[] = [];

    for (const [key, value] of Object.entries(schema)) {
        if (isField(value)) {
            list.push({ selection: selection, structure: parentStructure, name: key, keywords: value.keywords ?? [] });
        } else if (isFieldStructure(value)) {
            list.push({ selection: selection, structure: parentStructure, name: key, keywords: value.keywords ?? [] });
            if (value.structure.schema) list.push(...extractFields(selection, value.structure.schema, value.structure.id));
        }
    }

    return list;
}

function matchField(field: SearchField, term: string): boolean {
    return field.name.toLowerCase().includes(term.toLowerCase()) || field.keywords.some((keyword) => keyword.toLowerCase().includes(term.toLowerCase()));
}
