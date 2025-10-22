import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { EpochSeconds, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const eventStructure: Structure = {
    id: "event",
    name: "Event",
    schema: {
        timestamp: { type: EpochSeconds },
        event: { type: String },
    },
};
const eventsStructure: Structure = {
    id: "events",
    name: "Events",
    schema: {
        "<event uuid>": fromStructure(eventStructure),
    },
};
const structures = [eventsStructure, eventStructure];

const schema: Schema = {
    events: fromStructure(eventsStructure),
};

const EventsSelection: Selection = {
    name: "events",
    description: "List your last 25 events. Will be 100 when using the 'from' parameter.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default EventsSelection;
