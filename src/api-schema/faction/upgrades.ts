import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure, type StructureEnum } from "@/api-schema/schema.types";
import { branchEnum } from "@/api-schema/shared/faction-upgrade";

const upgradeStructure: Structure = {
    id: "upgrade",
    name: "Upgrade",
    schema: {
        branch: fromStructure(branchEnum),
        branchorder: { type: Integer },
        branchmultiplier: { type: Integer },
        name: { type: String },
        level: { type: Integer },
        basecost: { type: Integer },
        ability: { type: String },
        unlocked: { type: String, extra: "yyyy-MM-dd HH:mm:ss", description: "When the upgrade was set." },
        can_be_unset: { type: EpochSeconds, nullable: true, description: "When the upgrade can be unset" },
    },
};
const upgradesStructure: Structure = {
    id: "upgrades",
    name: "Upgrades",
    schema: { "<id>": fromStructure(upgradeStructure) },
};
const stateEnum: StructureEnum = {
    id: "state",
    name: "State",
    values: ["peace", "war"],
    type: String,
};
const structures = [stateEnum, upgradesStructure, upgradeStructure, branchEnum];

const schema: Schema = {
    state: fromStructure(stateEnum),
    upgrades: fromStructure(upgradesStructure),
    war: fromStructure(upgradesStructure),
    peace: fromStructure(upgradesStructure),
};

const UpgradesSelection: Selection = {
    name: "upgrades",
    description: "List all upgrades that the faction has. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default UpgradesSelection;
