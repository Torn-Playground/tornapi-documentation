import { FieldStructure, isField, isFieldStructure, Schema, SchemaField } from "@/api-schema/schema.types";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";
import ExtraInformation from "@/components/section/selection/ExtraInformation";
import NullableIndicator from "@/components/section/selection/NullableIndicator";

interface SelectionStructureProps {
    schema: Schema;
}

export default function SelectionStructure({ schema }: SelectionStructureProps) {
    const hasDescription = Object.values(schema).some((f) => !!f.description);
    const buildRow = (fieldName: string, field: SchemaField | FieldStructure) => {
        let fields;
        if (isField(field)) {
            fields = (
                <>
                    <td>{field.type}</td>
                    {hasDescription && <td>{field.description}</td>}
                </>
            );
        } else if (isFieldStructure(field)) {
            const link = (
                <ExtendedLink className="link link-info" href={{ hash: field.structure.id }} prefetch={false}>
                    {field.structure.name}
                </ExtendedLink>
            );

            fields = (
                <>
                    <td>
                        {field.array ? (
                            <>Array of {link} </>
                        ) : (
                            <>
                                {link} {field.structure.type}
                            </>
                        )}
                    </td>
                    {hasDescription && <td>{field.description}</td>}
                </>
            );
        } else {
            fields = <td>something went wrong</td>;
        }

        return (
            <tr key={fieldName}>
                <td>
                    {fieldName}
                    {field.nullable && <NullableIndicator tooltip={field.extra} />}
                    {field.extra && !field.nullable && <ExtraInformation tooltip={field.extra} />}
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
                    {Object.entries(schema)
                        .sort(([aField], [bField]) => aField.localeCompare(bField))
                        .map(([fieldName, field]) => buildRow(fieldName, field))}
                </tbody>
            </table>
        </div>
    );
}
