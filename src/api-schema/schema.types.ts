import { ReactElement, ReactNode } from "react";

export type Section = {
    selections: Array<Selection>;
    defaultSelection: string | null;
    idDescription: string | null;
};

export interface Selection {
    name: string;
    description: string;
    warning?: string;
    access: KeyAccess;
    schema: Schema;
    structures: Array<Structure | StructureEnum<any>>;
    id: { optional: boolean } | { required: true };
    params?: Array<Param>;
}

export type SectionType = "user" | "property" | "faction" | "company" | "market" | "torn" | "key";

export type KeyAccess = "public" | "minimal" | "limited" | "full";

export interface Schema {
    [id: string]: SchemaField | FieldStructure;
}

export interface SchemaField {
    type: string;
    description?: string | { text: string; node: () => ReactElement };
    extra?: string;
    nullable?: true;
}

type StructureType = "object" | "enum";

export type FieldStructure = {
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
};

export function isField(object: SchemaField | FieldStructure): object is SchemaField {
    return "type" in object;
}

export function isFieldStructure(object: SchemaField | FieldStructure): object is FieldStructure {
    return "structure" in object;
}

export interface Param {
    name: string;
    description: ReactNode;
    options?: {
        values: string[];
    };
}

export type Structure = {
    id: string;
    name: string;
    schema: Schema;
};

export type StructureEnum<T> = {
    id: string;
    name: string;
    values: Array<T>;
    type: string;
    incomplete?: { missing: string };
};

export type StructureOptions = { nullable?: boolean; extra?: string; array?: boolean; description?: string };

export function fromStructure(structure: Structure | StructureEnum<any>, options: StructureOptions = {}): FieldStructure {
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

export type ErrorCode = {
    code: number;
    message: string;
    description?: string;
};
