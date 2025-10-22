import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { fromStructure, type Schema, type Selection } from "@/api-schema/schema.types";
import { attackFullStructure, attackResultEnum, attacksFullStructure } from "@/api-schema/shared/attacks";

const structures = [attacksFullStructure, attackFullStructure, attackResultEnum];

const schema: Schema = {
    attacks: fromStructure(attacksFullStructure),
};

const AttacksFullSelection: Selection = {
    name: "attacksfull",
    description: "Retrieves the last 1000 attacks, with less details.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default AttacksFullSelection;
