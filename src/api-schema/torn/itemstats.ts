import { EpochSeconds, Integer, Number, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const statsStructure: Structure = {
    id: "stats",
    name: "Stats",
    schema: {
        damage: { type: Integer, nullable: true, extra: "Only present on weapons." },
        rounds_fired: { type: Integer, nullable: true, extra: "Only present on weapons with ammo." },
        hits: { type: Integer, nullable: true, extra: "Only present on weapons." },
        misses: { type: Integer, nullable: true, extra: "Only present on weapons." },
        reloads: { type: Integer, nullable: true, extra: "Only present on weapons with ammo." },
        highest_damage: { type: Integer, nullable: true, extra: "Only present on weapons." },
        finishing_hits: { type: Integer, nullable: true, extra: "Only present on weapons." },
        critical_hits: { type: Integer, nullable: true, extra: "Only present on weapons." },
        first_faction_owner: { type: Integer, nullable: true, extra: "Will be null if the first owner was a user." },
        first_owner: { type: Integer, nullable: true, extra: "Will be null if the first owner was a faction." },
        time_created: { type: EpochSeconds },
        respect_earned: { type: Number, nullable: true, extra: "Only present on weapons." },
        damage_taken: { type: Number, nullable: true, extra: "Only present on armor." },
        hits_received: { type: Number, nullable: true, extra: "Only present on armor." },
        most_damage_taken: { type: Number, nullable: true, extra: "Only present on armor." },
        damage_mitigated: { type: Number, nullable: true, extra: "Only present on armor." },
        most_damage_mitigated: { type: Number, nullable: true, extra: "Only present on armor." },
    },
};
const itemStatStructure: Structure = {
    id: "item_stat",
    name: "Item Stat",
    schema: {
        ID: { type: Integer },
        UID: { type: Integer },
        name: { type: String },
        type: { type: String },
        market_price: { type: Integer },
        stats: fromStructure(statsStructure),
    },
};
const itemStatsStructure: Structure = {
    id: "item_stats",
    name: "Item Stats",
    schema: {
        "<id>": fromStructure(itemStatStructure),
    },
};
const structures = [itemStatsStructure, itemStatStructure, statsStructure];

const schema: Schema = {
    itemstats: fromStructure(itemStatsStructure),
};

const ItemStatsSelection: Selection = {
    name: "itemstats",
    description: "View stats for a specific weapon or armor piece.",
    access: "public",
    schema,
    structures,
    id: {
        required: true,
    },
};

export default ItemStatsSelection;
