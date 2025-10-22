import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { racketStructure } from "@/api-schema/shared/territory";

const territoryStructure: Structure = {
    id: "territory",
    name: "Territory",
    schema: {
        sector: { type: Integer },
        size: { type: Integer },
        density: { type: Integer },
        slots: { type: Integer },
        daily_respect: { type: Integer },
        faction: { type: Integer },
        coordinate_x: { type: String },
        coordinate_y: { type: String },
        racket: fromStructure(racketStructure, { nullable: true, extra: "Only present if there is a racket present." }),
    },
};
const territoriesStructure: Structure = {
    id: "territories",
    name: "Territories",
    schema: {
        "<territory>": fromStructure(territoryStructure),
    },
};
const structures = [territoriesStructure, territoryStructure, racketStructure];

const schema: Schema = {
    territory: fromStructure(territoriesStructure),
};

const TerritorySelection: Selection = {
    name: "territory",
    description: "Get the territories a faction holds.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default TerritorySelection;
