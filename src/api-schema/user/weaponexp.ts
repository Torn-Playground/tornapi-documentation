import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const weaponExperienceStructure: Structure = {
    id: "weapon_experience",
    name: "Weapon Experience",
    schema: {
        itemID: { type: Integer },
        name: { type: String },
        exp: { type: Integer },
    },
};
const structures = [weaponExperienceStructure];

const schema: Schema = {
    weaponexp: fromStructure(weaponExperienceStructure, { array: true }),
};

const WeaponExpSelection: Selection = {
    name: "weaponexp",
    description: "List your weapon experience for all your weapons with any.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default WeaponExpSelection;
