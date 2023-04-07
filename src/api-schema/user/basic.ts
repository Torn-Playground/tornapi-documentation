import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { genderEnum } from "@/api-schema/shared/gender";
import { statusStructure } from "@/api-schema/shared/status";

const structures = [genderEnum, statusStructure];

const schema: Schema = {
    level: { type: Integer },
    gender: fromStructure(genderEnum),
    player_id: { type: Integer },
    name: { type: String },
    status: fromStructure(statusStructure),
};

const BasicSelection: Selection = {
    name: "basic",
    description: "Get some basic information about a user.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default BasicSelection;
