import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { attackResultEnum, attackStructure, attacksStructure, modifiersStructure } from "@/api-schema/shared/attacks";

const structures = [attacksStructure, attackStructure, attackResultEnum, modifiersStructure];

const schema: Schema = {
    attacks: fromStructure(attacksStructure),
};

const AttacksSelection: Selection = {
    name: "attacks",
    description: "List 100 attacks and defends from the faction. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default AttacksSelection;
