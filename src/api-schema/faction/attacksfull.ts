import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { attackFullStructure, attackResultEnum, attacksFullStructure } from "@/api-schema/shared/attacks";
import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";

const structures = [attacksFullStructure, attackFullStructure, attackResultEnum];

const schema: Schema = {
    attacks: fromStructure(attacksFullStructure),
};

const AttacksFullSelection: Selection = {
    name: "attacksfull",
    description: "List 1000 attacks and defends from the faction, with less details. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default AttacksFullSelection;
