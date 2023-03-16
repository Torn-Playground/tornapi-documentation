import { LIMIT, TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { fromStructure, Schema, Selection } from "@/api-schema/schema.types";
import { lastActionStatusEnum } from "@/api-schema/shared/last-action";
import { reviveLastActionStructure, reviveResultEnum, revivesStructure, reviveStructure } from "@/api-schema/shared/revives";

const structures = [revivesStructure, reviveStructure, reviveResultEnum, reviveLastActionStructure, lastActionStatusEnum];

const schema: Schema = {
    revives: fromStructure(revivesStructure),
};

const RevivesSelection: Selection = {
    name: "revives",
    description: "List 100 latest revives involving faction members. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [TIME_FROM, TIME_TO_WITH_FROM, LIMIT],
};

export default RevivesSelection;
