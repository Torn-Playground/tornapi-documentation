import { EpochSeconds, Integer, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const receivedEventStructure: Structure = {
    id: "received_event",
    name: "Received Event",
    schema: {
        owner: { type: Integer },
        timestamp: { type: EpochSeconds },
        event: { type: String },
    },
};
const receivedEventsStructure: Structure = {
    id: "received_events",
    name: "Received Events",
    schema: {
        "<id>": fromStructure(receivedEventStructure),
    },
};
const structures = [receivedEventsStructure, receivedEventStructure];

const schema: Schema = {
    root: fromStructure(receivedEventsStructure),
};

const ReceivedEventsSelection: Selection = {
    name: "receivedevents",
    description: "List your received events.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default ReceivedEventsSelection;
