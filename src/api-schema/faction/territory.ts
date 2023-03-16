import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

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
    },
};
const territoriesStructure: Structure = {
    id: "territories",
    name: "Territories",
    schema: {
        "<territory>": fromStructure(territoryStructure),
    },
};
const structures = [territoriesStructure, territoryStructure];

const schema: Schema = {
    territory: fromStructure(territoryStructure, { extra: "Empty array when there is no territory." }),
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
