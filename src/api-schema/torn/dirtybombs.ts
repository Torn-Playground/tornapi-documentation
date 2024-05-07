import { LIMIT } from "@/api-schema/common-params";
import { EpochSeconds, Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const dirtyBombSelection: Structure = {
    id: "dirtybombs",
    name: "Dirty Bomb",
    schema: {
        planted: { type: EpochSeconds, description: "Time when the bomb was planted." },
        detonated: { type: EpochSeconds, description: "Time when the bomb went of." },
        injured: { type: Integer, description: "Amount of injured players." },
        respect: { type: Integer, description: "Respect lost for the targeted faction." },
        faction: { type: Integer, description: "Faction which was targeted." },
        user: {
            type: Integer,
            nullable: true,
            extra: "Null if the user decided to stay anonymous",
            description: "User that dropped the bomb.",
        },
    },
};
const structures = [dirtyBombSelection];

const schema: Schema = {
    dirtybombs: fromStructure(dirtyBombSelection, { array: true }),
};

const DirtyBombsSelection: Selection = {
    name: "dirtybombs",
    description: "List the dirty bombs that have been dropped.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [LIMIT],
};

export default DirtyBombsSelection;
