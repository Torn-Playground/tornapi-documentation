import { Integer } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const meritsStructure: Structure = {
    id: "merits",
    name: "Merits",
    schema: {
        "Nerve Bar": { type: Integer },
        "Critical Hit Rate": { type: Integer },
        "Life Points": { type: Integer },
        "Crime XP": { type: Integer },
        "Education Length": { type: Integer },
        Awareness: { type: Integer },
        "Bank Interest": { type: Integer },
        "Masterful Looting": { type: Integer },
        Stealth: { type: Integer },
        Hospitalizing: { type: Integer },
        "Addiction Mitigation": { type: Integer },
        "Employee Effectiveness": { type: Integer },
        Brawn: { type: Integer },
        Protection: { type: Integer },
        Sharpness: { type: Integer },
        Evasion: { type: Integer },
        "Heavy Artillery Mastery": { type: Integer },
        "Machine Gun Mastery": { type: Integer },
        "Rifle Mastery": { type: Integer },
        "SMG Mastery": { type: Integer },
        "Shotgun Mastery": { type: Integer },
        "Pistol Mastery": { type: Integer },
        "Club Mastery": { type: Integer },
        "Piercing Mastery": { type: Integer },
        "Slashing Mastery": { type: Integer },
        "Mechanical Mastery": { type: Integer },
        "Temporary Mastery": { type: Integer },
    },
};
const structures = [meritsStructure];

const schema: Schema = {
    merits: fromStructure(meritsStructure),
};

const MeritsSelection: Selection = {
    name: "merits",
    description: "Get your assigned merits.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default MeritsSelection;
