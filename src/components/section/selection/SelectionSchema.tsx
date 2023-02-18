import { Schema } from "@/api-schema/schema.types";
import SelectionStructure from "@/components/section/selection/SelectionStructure";

interface SelectionSchemaProps {
    schema: Schema;
}

export default function SelectionSchema(props: SelectionSchemaProps) {
    return (
        <section className="mt-4">
            <span className="text-xl capitalize">Schema</span>

            <SelectionStructure schema={props.schema} />
        </section>
    );
}
