import { Integer } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";

const notificationsStructure: Structure = {
    id: "notifications",
    name: "Notifications",
    schema: {
        messages: { type: Integer },
        events: { type: Integer },
        awards: { type: Integer },
        competition: { type: Integer },
    },
};
const structures = [notificationsStructure];

const schema: Schema = {
    notifications: fromStructure(notificationsStructure),
};

const NotificationsSelection: Selection = {
    name: "notifications",
    description: "Get your amount of notifications.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default NotificationsSelection;
