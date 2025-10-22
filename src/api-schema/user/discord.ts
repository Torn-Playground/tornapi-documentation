import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const discordStructure: Structure = {
    id: "discord",
    name: "Discord",
    schema: {
        userID: { type: Integer },
        discordID: {
            type: String,
            description: "Discord id that is attached to the player. Will be an empty string if there is no linked Discord account.",
        },
    },
};
const structures = [discordStructure];

const schema: Schema = {
    discord: fromStructure(discordStructure),
};

const DiscordSelection: Selection = {
    name: "discord",
    description: "Look at Discord verification information.",
    access: "limited",
    schema,
    structures,
    id: { optional: true },
    params: [],
};

export default DiscordSelection;
