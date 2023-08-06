import { Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const ammoSizeEnum: StructureEnum<string> = {
    id: "ammo_size",
    name: "Ammo Size",
    values: [
        "12 Gauge Cartridge",
        "9mm Parabellum Round",
        ".45 ACP Round",
        "7.62 mm Rifle Round",
        "5.56mm Rifle Round",
        "5.7mm High Vel. Round",
        "5.45mm Rifle Round",
        ".25 ACP Round",
        ".44 Special Round",
        ".380 ACP Round",
        "Warhead",
        "Snow Ball",
        "Flare",
        "Stone",
        "Bolt",
        "Dart",
        "Liter of Fuel",
        "RPG",
        "40mm Grenade",
    ],
    type: String,
};
const ammoTypeEnum: StructureEnum<string> = {
    id: "ammo_type",
    name: "Ammo Type",
    values: ["Standard", "Incendiary", "Tracer", "Piercing", "Hollow Point"],
    type: String,
};
const ammoStructure: Structure = {
    id: "ammo",
    name: "Ammo",
    schema: {
        ammoID: { type: Integer },
        typeID: { type: Integer },
        size: fromStructure(ammoSizeEnum),
        type: fromStructure(ammoTypeEnum),
        quantity: { type: Integer },
        equipped: { type: NumberBoolean },
    },
};
const structures = [ammoStructure, ammoSizeEnum, ammoTypeEnum];

const schema: Schema = {
    ammo: fromStructure(ammoStructure, { array: true }),
};

const AmmoSelection: Selection = {
    name: "ammo",
    description: "Get the owned ammo.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default AmmoSelection;
