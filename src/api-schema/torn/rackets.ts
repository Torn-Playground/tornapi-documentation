import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const racketStructure: Structure = {
    id: "racket",
    name: "Racket",
    schema: {
        name: { type: String },
        level: { type: Integer },
        reward: { type: String },
        created: { type: EpochSeconds },
        changed: { type: EpochSeconds },
        faction: { type: Integer },
    },
};
const racketsStructure: Structure = {
    id: "rackets",
    name: "Rackets",
    schema: {
        "<territory>": fromStructure(racketStructure),
    },
};
const structures = [racketsStructure, racketStructure];

const schema: Schema = {
    rackets: fromStructure(racketsStructure),
};

const RacketsSelection: Selection = {
    name: "rackets",
    description: "All current rackets on the map.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default RacketsSelection;
