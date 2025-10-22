import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { branchEnum } from "@/api-schema/shared/faction-upgrade";

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
