import { EpochSeconds, Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const eventStructure: Structure = {
    id: "event",
    name: "Event",
    schema: {
        timestamp: { type: EpochSeconds },
        event: { type: String },
        seen: { type: NumberBoolean, description: "Will always be 0 due to the nature of this selection." },
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
    player_id: { type: Integer },
    events: fromStructure(eventsStructure),
};

const NewEventsSelection: Selection = {
    name: "newevents",
    description: "List your last 100 unread events.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default NewEventsSelection;
