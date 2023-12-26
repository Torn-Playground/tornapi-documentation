import { EpochSeconds, Integer, IntegerOrNumber, NumberBoolean, String, Unknown } from "@/api-schema/common-types";
import { fromStructure, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { bar } from "@/api-schema/shared/bar";
import { competitionTypeEnum } from "@/api-schema/shared/competition";
import { genderEnum } from "@/api-schema/shared/gender";
import { lastActionStatusEnum, lastActionStructure } from "@/api-schema/shared/last-action";
import { roleEnum } from "@/api-schema/shared/role";
import { statusColorEnum, statusStateEnum, statusStructure } from "@/api-schema/shared/status";

const competitionStructure: Structure = {
    id: "competition",
    name: "Competition",
    schema: {
        name: fromStructure(competitionTypeEnum),
        treats_collected_total: {
            type: Integer,
            nullable: true,
            description: "Amount of Treats collected during Halloween.",
            extra: "Only present during Halloween week.",
        },
        team: {
            type: String,
            nullable: true,
            extra: "Only present during Elimination. Null if not on a team.",
        },
        attacks: {
            type: Integer,
            nullable: true,
            extra: "Only present during Elimination.",
        },
        score: {
            type: IntegerOrNumber,
            nullable: true,
            description: "Integer score for Easter Egg Hunt, Dog Tags or Elimination. Number score for Mr & Ms Torn.",
            extra: "Only present during Easter Egg Hunt, Dog Tags, Elimination or Mr & Ms Torn. Null if no eggs found during Easter event.",
        },
        text: {
            type: String,
            nullable: true,
            extra: "Only present during Mr & Ms Torn, when the user is not participating.",
        },
        total: {
            type: Integer,
            nullable: true,
            extra: "Only present during Easter Egg Hunt. Score accumulated over the years.",
        },
        votes: {
            type: Integer,
            nullable: true,
            extra: "Only present during Mr & Ms Torn.",
        },
        image: {
            type: String,
            nullable: true,
            extra: "Only present during Mr & Ms Torn.",
        },
        position: {
            type: Unknown,
            nullable: true,
            extra: "Only present during Dog Tags, and only when there is a position to show.",
        },
    },
};
const jobStructure: Structure = {
    id: "job",
    name: "Job",
    schema: {
        job: {
            type: String,
            extra: "Will be 'None' when not in a company or job.",
            description: "For the default jobs, this will be the job name. For companies this will be 'Employee' or 'Director'.",
        },
        position: {
            type: String,
            extra: "Will be 'None' when not in a company or job.",
            description: "Position within the job or company. Company directors will be listed as 'Director'.",
        },
        company_id: { type: Integer, extra: "Will be 0 when not in a company or job." },
        company_name: { type: String, extra: "Will be 'None' when not in a company or job." },
        company_type: { type: Integer, extra: "Will be 0 when not in a company or job." },
    },
};
const factionStructure: Structure = {
    id: "faction",
    name: "Faction",
    schema: {
        position: { type: String, extra: "Will be 'None' when not in a faction." },
        faction_id: { type: Integer, extra: "Will be 0 when not in a faction." },
        days_in_faction: { type: Integer, extra: "Will be 0 when not in a faction." },
        faction_name: { type: String, extra: "Will be 'None' when not in a faction." },
        faction_tag: { type: String, extra: "Will be null when not in a faction.", nullable: true },
    },
};
const marriedStructure: Structure = {
    id: "married",
    name: "Married",
    schema: {
        spouse_id: { type: Integer, extra: "Will be 0 when there is no spouse." },
        spouse_name: { type: String, extra: "Will be 'None' when there is no spouse." },
        duration: { type: Integer, extra: "Will be 0 when there is no spouse." },
    },
};
const iconsStructure: Structure = {
    id: "icons",
    name: "Icons",
    schema: { "<icon-id>": { type: String } },
};
const statesStructure: Structure = {
    id: "states",
    name: "States",
    schema: {
        hospital_timestamp: { type: EpochSeconds, extra: "Will be 0 when not hospitalized." },
        jail_timestamp: { type: EpochSeconds, extra: "Will be 0 when not in jail." },
    },
};

const structures = [
    bar,
    statusStructure,
    jobStructure,
    factionStructure,
    marriedStructure,
    iconsStructure,
    statesStructure,
    lastActionStructure,
    genderEnum,
    lastActionStatusEnum,
    statusColorEnum,
    statusStateEnum,
    roleEnum,
    competitionStructure,
    competitionTypeEnum,
];

const schema: Schema = {
    rank: { type: String },
    level: { type: Integer },
    honor: { type: Integer },
    gender: fromStructure(genderEnum),
    property: { type: String },
    signup: { type: "Date (yyyy-dd-MM HH:mm:ss)" },
    awards: { type: Integer },
    friends: { type: Integer },
    enemies: { type: Integer },
    forum_posts: { type: Integer },
    karma: { type: Integer },
    age: { type: Integer },
    role: fromStructure(roleEnum),
    donator: { type: NumberBoolean },
    player_id: { type: Integer },
    name: { type: String },
    property_id: { type: Integer },
    competition: fromStructure(competitionStructure, { nullable: true }),
    revivable: { type: NumberBoolean, description: "Status whether you (the key owner) can revive this player." },
    life: fromStructure(bar),
    status: fromStructure(statusStructure),
    job: fromStructure(jobStructure),
    faction: fromStructure(factionStructure),
    married: fromStructure(marriedStructure),
    basicicons: fromStructure(iconsStructure),
    states: fromStructure(statesStructure),
    last_action: fromStructure(lastActionStructure),
};

const ProfileSelection: Selection = {
    name: "profile",
    description: "Get some information about a user.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default ProfileSelection;
