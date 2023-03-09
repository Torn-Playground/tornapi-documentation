import { FieldStructure, isField, isFieldStructure, Schema, SchemaField } from "@/api-schema/schema.types";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";
import NullableIndicator from "@/components/section/selection/NullableIndicator";
import ExtraInformation from "@/components/section/selection/ExtraInformation";

interface SelectionStructureProps {
    schema: Schema;
}

export default function SelectionStructure(props: SelectionStructureProps) {
    const hasDescription = Object.values(props.schema)
        .filter(isField)
        .some((f) => f.description);
    const buildRow = (field: string, schema: SchemaField | FieldStructure) => {
        let fields;
        if (isField(schema)) {
            fields = (
                <>
                    <td>{schema.type}</td>
                    {hasDescription && <td>{schema.description}</td>}
                </>
            );
        } else if (isFieldStructure(schema)) {
            const link = (
                <ExtendedLink className="link link-info" href={{ hash: schema.structure.id }} prefetch={false}>
                    {schema.structure.name}
                </ExtendedLink>
            );

            fields = (
                <>
                    <td>
                        {schema.array ? (
                            <>Array of {link} </>
                        ) : (
                            <>
                                {link} {schema.structure.type}
                            </>
                        )}
                    </td>
                    {hasDescription && <td></td>}
                </>
            );
        } else {
            fields = <td>something went wrong</td>;
        }

        return (
            <tr key={field}>
                <td>
                    {field}
                    {schema.nullable && <NullableIndicator tooltip={schema.extra} />}
                    {schema.extra && !schema.nullable && <ExtraInformation tooltip={schema.extra} />}
                </td>
                {fields}
            </tr>
        );
    };

    return (
        <div className="overflow-x-auto mt-1">
            <table className="table table-compact table-zebra w-full">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Type</th>
                        {hasDescription && <th>Description</th>}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props.schema)
                        .sort(([aField], [bField]) => aField.localeCompare(bField))
                        .map(([field, schema]) => buildRow(field, schema))}
                </tbody>
            </table>
        </div>
    );
}
