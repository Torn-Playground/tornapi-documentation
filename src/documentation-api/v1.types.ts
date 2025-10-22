import type { Schema } from "@/api-schema/schema.types";

export interface SectionsResponse {
    sections: string[];
}

export interface SchemaParams {
    section: string;
}

export type SchemaDto = Record<string, SchemaFieldDto | FieldStructureDto>;

export interface SchemaFieldDto {
    type: string;
    description?: string;
    extra?: string;
    nullable?: true;
}

export interface FieldStructureDto {
    structure: {
        id: string;
        name: string;
        type: string;
    };
    extra?: string;
    nullable: boolean;
    array: boolean;
    description?: string;
}

export interface StructureDto {
    id: string;
    name: string;
    schema: Schema;
}

export interface StructureEnumDto {
    id: string;
    name: string;
    values: unknown[];
    type: string;
    incomplete?: { missing: string };
}

export type IdDto = { optional: boolean } | { required: true };

export interface ParamDto {
    name: string;
    description?: string;
    options?: {
        values: string[];
    };
}

export interface SelectionDto {
    name: string;
    description: string;
    warning?: string;
    access: string;
    schema: SchemaDto;
    structures: (StructureDto | StructureEnumDto)[];
    id: IdDto;
    params?: ParamDto[];
}

export interface SectionDto {
    selections: SelectionDto[];
    defaultSelection: string | null;
    idDescription: string | null;
}

export type SchemaResponse = SectionDto | { error: string };

export interface ErrorDto {
    code: number;
    message: string;
    description?: string;
}

export interface ErrorsResponse {
    errors: ErrorDto[];
}
