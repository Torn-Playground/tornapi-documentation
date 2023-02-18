export type Section = {
    selections: Array<Selection>;
    defaultSelection: string | null;
    idDescription: string | null;
};

export interface Selection {
    section: SectionType;
    name: string;
    description: string;
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
    description?: string;
    extra?: string;
    nullable?: true;
}

type StructureType = "object" | "enum";

export type FieldStructure = {
    structure: {
        id: string;
        name: string;
        type: StructureType;
    };
    extra?: string;
    nullable: boolean;
};

export function isField(object: SchemaField | FieldStructure): object is SchemaField {
    return "type" in object;
}

export function isFieldStructure(object: SchemaField | FieldStructure): object is FieldStructure {
    return "structure" in object;
}

export interface Param {
    name: string;
    description: string;
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
};

export function fromStructure(structure: Structure | StructureEnum<any>, options: { nullable: boolean } = { nullable: false }): FieldStructure {
    let type: StructureType;
    if ("schema" in structure) type = "object";
    else if ("values" in structure) type = "enum";
    else throw new Error("Unknown type is being used");

    return {
        structure: {
            id: structure.id,
            name: structure.name,
            type,
        },
        nullable: options.nullable,
    };
}

export type ErrorCode = {
    code: number;
    message: string;
    description?: string;
};
