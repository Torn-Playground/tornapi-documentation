import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const rankingStructure: Structure = {
    id: "ranking",
    name: "Ranking",
    schema: {
        value: { type: Integer },
        rank: { type: Integer },
    },
};
const hallOfFameStructure: Structure = {
    id: "hall_of_fame",
    name: "Hall of Fame",
    schema: {
        attacks: fromStructure(rankingStructure),
        battlestats: fromStructure(rankingStructure),
        busts: fromStructure(rankingStructure),
        defends: fromStructure(rankingStructure),
        networth: fromStructure(rankingStructure),
        offences: fromStructure(rankingStructure),
        revives: fromStructure(rankingStructure),
        traveltime: fromStructure(rankingStructure),
        workstats: fromStructure(rankingStructure),
        level: fromStructure(rankingStructure),
        rank: fromStructure(rankingStructure),
    },
};
const structures = [hallOfFameStructure, rankingStructure];

const schema: Schema = {
    halloffame: fromStructure(hallOfFameStructure),
};

const HOFSelection: Selection = {
    name: "hof",
    description: "Get your hall of fame rankings.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default HOFSelection;
