import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { Integer } from "@/api-schema/common-types";

const pointStructure: Structure = {
    id: "point",
    name: "Point",
    schema: {
        cost: { type: Integer },
        quantity: { type: Integer },
        total_cost: { type: Integer },
    },
};
const pointsStructure: Structure = {
    id: "points",
    name: "Points",
    schema: {
        "<some id>": fromStructure(pointStructure),
    },
};
const structures = [pointsStructure, pointStructure];

const schema: Schema = {
    pointsmarket: fromStructure(pointsStructure),
};

const PointsMarketSelection: Selection = {
    name: "pointsmarket",
    description: "List the points that are available on the market.",
    access: "public",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default PointsMarketSelection;
