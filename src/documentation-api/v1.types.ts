import { Schema } from "@/api-schema/schema.types";

export type SectionsResponse = { sections: string[] };

export type SchemaParams = { section: string };

export type SchemaDto = {
    [id: string]: SchemaFieldDto | FieldStructureDto;
};

export type SchemaFieldDto = {
    type: string;
    description?: string;
    extra?: string;
    nullable?: true;
};

export type FieldStructureDto = {
    structure: {
        id: string;
        name: string;
        type: string;
    };
    extra?: string;
    nullable: boolean;
    array: boolean;
    description?: string;
};

export type StructureDto = {
    id: string;
    name: string;
    schema: Schema;
};

export type StructureEnumDto = {
    id: string;
    name: string;
    values: unknown[];
    type: string;
    incomplete?: { missing: string };
};

export type IdDto = { optional: boolean } | { required: true };

export type ParamDto = {
    name: string;
    description?: string;
    options?: {
        values: string[];
    };
};

export type SelectionDto = {
    name: string;
    description: string;
    warning?: string;
    access: string;
    schema: SchemaDto;
    structures: (StructureDto | StructureEnumDto)[];
    id: IdDto;
    params?: ParamDto[];
};

export type SectionDto = {
    selections: SelectionDto[];
    defaultSelection: string | null;
    idDescription: string | null;
};

export type SchemaResponse = SectionDto | { error: string };
