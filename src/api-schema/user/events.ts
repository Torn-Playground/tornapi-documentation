import { LIMIT, TIME_FROM, TIME_TO_WITH_FROM } from "@/api-schema/common-params";
import { EpochSeconds, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

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
    description: "List your last 100 events.",
    warning: "Events that are no longer available in-game are also not available through the API.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [TIME_FROM, TIME_TO_WITH_FROM, LIMIT],
};

export default EventsSelection;
