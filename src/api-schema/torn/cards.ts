import { IntegerAndString, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const cardStructure: Structure = {
    id: "card",
    name: "Card",
    schema: {
        name: { type: String },
        short: { type: IntegerAndString },
        rank: { type: IntegerAndString },
        class: { type: String },
    },
};
const cardsStructure: Structure = {
    id: "cards",
    name: "Cards",
    schema: {
        "<card id>": fromStructure(cardStructure),
    },
};
const structures = [cardsStructure, cardStructure];

const schema: Schema = {
    cards: fromStructure(cardsStructure),
};

const CardsSelection: Selection = {
    name: "cards",
    description: "Get the internal ids for poker cards.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default CardsSelection;
