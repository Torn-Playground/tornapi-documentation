import { Boolean, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { roleEnum } from "@/api-schema/shared/role";

const structures = [roleEnum];

const schema: Schema = {
    status: fromStructure(roleEnum),
    userID: { type: Integer },
    playername: { type: String },
    baned: { type: Boolean, description: "Yeah, that field name is correct ...." },
};

const PublicStatusSelection: Selection = {
    name: "publicstatus",
    description: "Very basic information.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
    params: [],
};

export default PublicStatusSelection;
