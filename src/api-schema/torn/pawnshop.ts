import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer } from "@/api-schema/common-types";

const pawnShopStructure: Structure = {
    id: "pawn_shop",
    name: "Pawn Shop",
    schema: {
        points_value: { type: Integer },
        donatorpack_value: { type: Integer },
    },
};
const structures = [pawnShopStructure];

const schema: Schema = {
    pawnshop: fromStructure(pawnShopStructure),
};

const PawnShopSelection: Selection = {
    name: "pawnshop",
    description: "Pawn shop prices.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default PawnShopSelection;
