import { schema } from "@/api-schema/data";
import { isFieldStructure, Schema } from "@/api-schema/schema.types";

describe.each(Object.entries(schema))("section %s", (_, section) => {
    describe.each(section.selections)("selection $name", (selection) => {
        it("used and defined structures are equal", () => {
            const definedStructures = selection.structures.map((s) => s.id);
            const usedStructures: string[] = getUsedStructureNames(selection.schema);

            expect(definedStructures).toContainAllValues(usedStructures);
        });
    });
});

function getUsedStructureNames(schema: Schema): string[] {
    const usedStructureNames: string[] = [];

    const usedStructures = Object.values(schema).filter(isFieldStructure);
    usedStructureNames.push(...usedStructures.map((field) => field.structure.id));

    const nestedUsedStructureNames = usedStructures
        .map((structure) => structure.structure.schema)
        .filter((schema) => typeof schema !== "undefined")
        .flatMap((schema) => Array.from(getUsedStructureNames(schema!)));
    usedStructureNames.push(...nestedUsedStructureNames);

    return Array.from(new Set(usedStructureNames));
}
