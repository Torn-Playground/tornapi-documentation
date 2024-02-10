import { schema } from "@/api-schema/data";
import { FieldStructure, Param, Schema, SchemaField, SectionType, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { FieldStructureDto, ParamDto, SchemaDto, SchemaFieldDto, SectionDto, SelectionDto, StructureDto, StructureEnumDto } from "@/documentation-api/v1.types";

function map(section: SectionType): SectionDto {
    const { selections, defaultSelection, idDescription } = schema[section];

    return { selections: mapSelections(selections), defaultSelection, idDescription };
}

function mapSelections(selections: Selection[]): SelectionDto[] {
    return selections.map(({ name, description, warning, access, schema, structures, id, params }) => ({
        name,
        description,
        warning,
        access,
        schema: mapSchema(schema),
        structures: mapStructures(structures),
        id,
        params: mapParams(params),
    }));
}

function mapSchema(schema: Schema): SchemaDto {
    return Object.entries(schema).reduce<SchemaDto>((dto, [key, field]) => {
        dto[key] = mapField(field);
        return dto;
    }, {});
}

function mapField(field: SchemaField | FieldStructure): SchemaFieldDto | FieldStructureDto {
    if ("structure" in field) {
        const { structure: givenStructure, extra, nullable, array, description } = field;

        const structure = {
            id: givenStructure.id,
            name: givenStructure.name,
            type: givenStructure.type,
        };

        return { structure, extra, nullable, array, description };
    } else {
        const { type, description, extra, nullable } = field;

        return {
            type,
            description: typeof description === "object" && "text" in description ? description.text : description,
            extra,
            nullable,
        };
    }
}

function mapStructures(structures: (Structure | StructureEnum)[]): (StructureDto | StructureEnumDto)[] {
    return structures.map((structure) => {
        if ("type" in structure) {
            const { id, name, values, type, incomplete } = structure;
            const dto: StructureEnumDto = { id, name, values, type };

            if (incomplete) {
                dto.incomplete = { missing: incomplete.missing };
            }

            return dto;
        } else {
            const { id, name, schema } = structure;

            return { id, name, schema };
        }
    });
}

function mapParams(params?: Param[]): ParamDto[] {
    if (!params) return [];

    return params.map(({ name, description: descriptionNode, options }) => {
        let description: string | undefined;
        switch (typeof descriptionNode) {
            case "string":
                description = descriptionNode;
                break;
            case "boolean":
            case "number":
                description = descriptionNode.toString();
                break;
            default:
                description = undefined;
                break;
        }

        const dto: ParamDto = { name, description };

        if (options) {
            dto.options = { values: options.values };
        }

        return dto;
    });
}

export { map as mapV1Schema };
