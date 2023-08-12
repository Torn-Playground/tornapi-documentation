import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { territoryWarStructure } from "@/api-schema/shared/territory";

const territoryWarsStructure: Structure = {
    id: "territory_wars",
    name: "Territory Wars",
    schema: {
        "<territory>": fromStructure(territoryWarStructure),
    },
};
const structures = [territoryWarsStructure, territoryWarStructure];

const schema: Schema = {
    territorywars: fromStructure(territoryWarsStructure, {
        nullable: true,
        extra: "Null when there are no territory wars going on.",
    }),
};

const TerritoryWarsSelection: Selection = {
    name: "territorywars",
    description: "List all ongoing territory wars.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default TerritoryWarsSelection;
