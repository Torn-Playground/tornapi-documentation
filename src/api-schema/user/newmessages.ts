import { EpochSeconds, Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure, type StructureEnum } from "@/api-schema/schema.types";

const messageTypeStructure: StructureEnum = {
    id: "message_type",
    name: "Message Type",
    values: ["User message", "Faction newsletter", "Company newsletter"],
    type: String,
};
const messageStructure: Structure = {
    id: "message",
    name: "Message",
    schema: {
        timestamp: { type: EpochSeconds },
        ID: { type: Integer },
        name: { type: String },
        type: fromStructure(messageTypeStructure),
        title: { type: String },
        seen: { type: NumberBoolean },
        read: { type: NumberBoolean, description: "Will always be 0 due to the nature of this selection." },
    },
};
const messagesStructure: Structure = {
    id: "messages",
    name: "Messages",
    schema: {
        "<message id>": fromStructure(messageStructure),
    },
};
const structures = [messagesStructure, messageStructure, messageTypeStructure];

const schema: Schema = {
    messages: fromStructure(messagesStructure),
    player_id: { type: Integer },
};

const NewMessagesSelection: Selection = {
    name: "newmessages",
    description: "Get your unread messages.",
    access: "minimal",
    schema,
    structures,
    id: { optional: false },
    params: [],
};

export default NewMessagesSelection;
