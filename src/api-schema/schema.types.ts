import type { ReactElement, ReactNode } from "react";
import type { ValidationFunction } from "@/api-schema/validations";

export interface Section {
    selections: Selection[];
    defaultSelection: string | null;
    idDescription: string | null;
}

export interface Selection {
    name: string;
    description: string;
    cache?: string;
    warning?: string;
    access: KeyAccess;
    schema: Schema;
    structures: (Structure | StructureEnum)[];
    id: { optional: boolean } | { required: true };
    params?: Param[];
}

export type SectionType = "user" | "property" | "faction" | "company" | "market" | "torn" | "key";

export type KeyAccess = "public" | "minimal" | "limited" | "full";

export type Schema = Record<string, SchemaField | FieldStructure>;

export interface SchemaField {
    type: string;
    description?: string | { text: string; node: () => ReactElement };
    extra?: string;
    nullable?: true;
    keywords?: string[];
}

type StructureType = "object" | "enum";

export interface FieldStructure {
    structure: {
        id: string;
        name: string;
        type: StructureType;
        schema: Schema | undefined;
    };
    extra?: string;
    nullable: boolean;
    array: boolean;
    description?: string;
    keywords?: string[];
}

export function isField(object: SchemaField | FieldStructure): object is SchemaField {
    return "type" in object;
}

export function isFieldStructure(object: SchemaField | FieldStructure): object is FieldStructure {
    return "structure" in object;
}

export interface Param {
    name: string;
    description: string;
    descriptionNode?: ReactNode;
    options?: {
        values: string[];
    };
    validations: ValidationFunction[];
}

export interface Structure {
    id: string;
    name: string;
    schema: Schema;
}

export interface StructureEnum {
    id: string;
    name: string;
    values: string[] | number[];
    type: string;
    incomplete?: { missing: string };
}

export interface StructureOptions {
    nullable?: boolean;
    extra?: string;
    array?: boolean;
    description?: string;
}

export function fromStructure(structure: Structure | StructureEnum, options: StructureOptions = {}): FieldStructure {
    let type: StructureType;
    let schema: Schema | undefined;
    if ("schema" in structure) {
        type = "object";
        schema = structure.schema;
    } else if ("values" in structure) {
        type = "enum";
    } else throw new Error("Unknown type is being used");

    return {
        structure: {
            id: structure.id,
            name: structure.name,
            type,
            schema,
        },
        nullable: options.nullable ?? false,
        extra: options.extra,
        array: options.array ?? false,
        description: options.description,
    };
}

export interface ErrorCode {
    code: number;
    message: string;
    description?: string;
}
