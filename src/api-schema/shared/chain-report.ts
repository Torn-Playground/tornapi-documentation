import { fromStructure, Structure } from "@/api-schema/schema.types";
import { Integer, Number } from "@/api-schema/common-types";

export const bonusStructure: Structure = {
    id: "bonus_hit",
    name: "Bonus Hit",
    schema: {
        chain: { type: Integer },
        attacker: { type: Integer },
        defender: { type: Integer },
        respect: { type: Integer },
    },
};
export const memberStructure: Structure = {
    id: "member",
    name: "Member",
    schema: {
        userID: { type: Integer },
        attacks: { type: Integer },
        respect: { type: Number },
        avg: { type: Number },
        leave: { type: Integer },
        mug: { type: Integer },
        hosp: { type: Integer },
        war: { type: Integer },
        bonus: { type: Integer },
        assist: { type: Integer },
        retal: { type: Integer },
        overseas: { type: Integer },
        draw: { type: Integer },
        escape: { type: Integer },
        loss: { type: Integer },
        best: { type: Number },
        level: { type: Integer },
        factionID: { type: Integer },
    },
};
export const membersStructure: Structure = {
    id: "members",
    name: "Members",
    schema: {
        "<user id>": fromStructure(memberStructure),
    },
};
