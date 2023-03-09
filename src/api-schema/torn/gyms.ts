import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer, String } from "@/api-schema/common-types";

const gymStructure: Structure = {
    id: "gym",
    name: "Gym",
    schema: {
        name: { type: String },
        stage: { type: Integer },
        cost: { type: Integer },
        energy: { type: Integer },
        strength: { type: Integer },
        speed: { type: Integer },
        defense: { type: Integer },
        dexterity: { type: Integer },
        note: { type: String },
    },
};
const gymsStructure: Structure = {
    id: "gyms",
    name: "Gyms",
    schema: {
        "<gym id>": fromStructure(gymStructure),
    },
};
const structures = [gymsStructure, gymStructure];

const schema: Schema = {
    gyms: fromStructure(gymsStructure),
};

const GymsSelection: Selection = {
    name: "gyms",
    description: "All Torn gyms.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default GymsSelection;
