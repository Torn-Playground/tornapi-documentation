import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

const travelMethodStructure: StructureEnum<string> = {
    id: "travel_method",
    name: "Travel Method",
    values: ["Standard", "Airstrip", "Private", "Business"],
    type: String,
};
const travelStructure: Structure = {
    id: "travel",
    name: "Travel",
    schema: {
        destination: { type: String },
        method: fromStructure(travelMethodStructure),
        timestamp: { type: EpochSeconds },
        departed: { type: EpochSeconds },
        time_left: { type: Integer, description: "Seconds until landing at the destination." },
    },
};
const structures = [travelStructure, travelMethodStructure];

const schema: Schema = {
    travel: fromStructure(travelStructure),
};

const TravelSelection: Selection = {
    name: "travel",
    description: "View details about your traveling.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default TravelSelection;
