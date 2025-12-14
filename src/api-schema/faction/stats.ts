import { Integer } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const statsStructure: Structure = {
    id: "faction_stats",
    name: "Stats",
    schema: {
        organisedcrimerespect: { type: Integer },
        organisedcrimemoney: { type: Integer },
        organisedcrimesuccess: { type: Integer },
        organisedcrimefail: { type: Integer },
        territoryrespect: { type: Integer },
        highestterritories: { type: Integer },
        bestchain: { type: Integer },
        attacksdamagehits: { type: Integer },
        attacksdamage: { type: Integer },
        hosptimegiven: { type: Integer },
        attackshosp: { type: Integer },
        attackswon: { type: Integer },
        attacksdamaging: { type: Integer },
        hosps: { type: Integer },
        hosptimereceived: { type: Integer },
        attackslost: { type: Integer },
        medicalitemsused: { type: Integer },
        medicalcooldownused: { type: Integer },
        medicalitemrecovery: { type: Integer },
        criminaloffences: { type: Integer },
        busts: { type: Integer },
        drugsused: { type: Integer },
        revives: { type: Integer },
        gymtrains: { type: Integer },
        gymstrength: { type: Integer },
        traveltimes: { type: Integer },
        traveltime: { type: Integer },
        rehabs: { type: Integer },
        gymdefense: { type: Integer },
        attacksmug: { type: Integer },
        attacksleave: { type: Integer },
        gymspeed: { type: Integer },
        jails: { type: Integer },
        caymaninterest: { type: Integer },
        gymdexterity: { type: Integer },
        hunting: { type: Integer },
        drugoverdoses: { type: Integer },
        candyused: { type: Integer },
        alcoholused: { type: Integer },
        energydrinkused: { type: Integer },
        attacksrunaway: { type: Integer },
    },
};
const structures = [statsStructure];

const schema: Schema = {
    stats: fromStructure(statsStructure),
};

const StatsSelection: Selection = {
    name: "stats",
    description: "Show stats about the faction. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default StatsSelection;
