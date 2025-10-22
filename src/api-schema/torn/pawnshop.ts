import { Integer } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const pawnShopStructure: Structure = {
    id: "pawn_shop",
    name: "Pawn Shop",
    schema: {
        points_value: { type: Integer, description: "No longer used, since points aren't available in the pawn shop anymore. Will always return 0 now." },
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
