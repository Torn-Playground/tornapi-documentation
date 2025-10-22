import type { Schema } from "@/api-schema/schema.types";
import SelectionStructure from "@/components/section/selection/SelectionStructure";

interface SelectionSchemaProps {
    schema: Schema;
}

export default function SelectionSchema({ schema }: SelectionSchemaProps) {
    return (
        <section className="mt-4">
            <span className="text-xl capitalize">Schema</span>

            <SelectionStructure schema={schema} />
        </section>
    );
}
