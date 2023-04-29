import { LIMIT, TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { lastActionStatusEnum } from "@/api-schema/shared/last-action";
import { reviveFullStructure, reviveLastActionStructure, reviveResultEnum, revivesFullStructure } from "@/api-schema/shared/revives";

const structures = [revivesFullStructure, reviveFullStructure, reviveResultEnum, reviveLastActionStructure, lastActionStatusEnum];

const schema: Schema = {
    revives: fromStructure(revivesFullStructure),
};

const RevivesFullSelection: Selection = {
    name: "revivesfull",
    description: "List 990 latest revives involving faction members, without names. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM, LIMIT],
};

export default RevivesFullSelection;
