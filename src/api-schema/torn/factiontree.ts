import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const branchEnum: StructureEnum<string> = {
    id: "Branch",
    name: "Branch",
    values: ["Core", "Criminality", "Fortitude", "Voracity", "Toleration", "Excursion", "Steadfast", "Aggression", "Suppression"],
    type: String,
};
const levelStructure: Structure = {
    id: "level",
    name: "Level",
    schema: {
        branch: fromStructure(branchEnum),
        name: { type: String },
        ability: { type: String },
        challenge: { type: String },
        base_cost: { type: Integer },
    },
};
const branchStructure: Structure = {
    id: "branch_tree",
    name: "Branch Tree",
    schema: {
        "<level>": fromStructure(levelStructure),
    },
};
const factionTreeStructure: Structure = {
    id: "faction_tree",
    name: "Faction Tree",
    schema: {
        "<some id>": fromStructure(branchStructure),
    },
};
const structures = [factionTreeStructure, branchStructure, levelStructure, branchEnum];

const schema: Schema = {
    factiontree: fromStructure(factionTreeStructure),
};

const FactionTreeSelection: Selection = {
    name: "factiontree",
    description: "Overview of all faction upgrades.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default FactionTreeSelection;
