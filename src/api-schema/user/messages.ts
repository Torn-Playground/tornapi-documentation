import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { EpochSeconds, Integer, NumberBoolean, String } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";

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
        read: { type: NumberBoolean },
    },
};
const messagesStructure: Structure = {
    id: "messages",
    name: "Messages",
    schema: {
        "<id>": fromStructure(messageStructure),
    },
};
const structures = [messagesStructure, messageStructure, messageTypeStructure];

const schema: Schema = {
    messages: fromStructure(messagesStructure),
};

const MessagesSelection: Selection = {
    name: "messages",
    description: "Get your messages.",
    access: "limited",
    schema,
    structures,
    id: { optional: false },
    params: [TIME_FROM, TIME_TO, LIMIT],
};

export default MessagesSelection;
