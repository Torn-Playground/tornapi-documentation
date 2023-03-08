import { bar } from "@/api-schema/user/user-structures";
import { fromStructure, Schema, Selection, Structure, StructureEnum } from "@/api-schema/schema.types";
import { EpochSeconds, Integer, IntegerAndEmptyString, NumberBoolean, String } from "@/api-schema/common-types";

const competitionTypeEnum: StructureEnum<string> = {
    id: "competition_type",
    name: "Competition Type",
    values: ["Halloween", "Elimination", "Easter Egg Hunt", "Dog Tags", "Mr & Ms Torn"],
    type: String,
};
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
            type: Integer,
            nullable: true,
            extra: "Only present during Elimination. Null if not on a team.",
        },
        attacks: {
            type: Integer,
            nullable: true,
            extra: "Only present during Elimination.",
        },
        score: {
            type: IntegerAndEmptyString,
            nullable: true,
            description: "Integer score for Easter Egg Hunt or Dog Tags. Number score for Mr & Ms Torn.",
            extra: "Only present during Easter Egg Hunt, Dog Tags or Mr & Ms Torn. Null if no eggs found during Easter event.",
        },
        text: {
            type: String,
            nullable: true,
            extra: "Only present during Mr & Ms Torn, when the user is not participating.",
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
    },
};

const roleEnum: StructureEnum<string> = {
    id: "role",
    name: "Role",
    values: ["Civilian", "Reporter", "Wiki Contributor", "Wiki Editor", "Committee", "Helper", "Moderator", "Officer", "Admin", "NPC"],
    type: String,
};
const statusStateEnum: StructureEnum<string> = {
    id: "status_state",
    name: "Status State",
    values: ["Okay", "Traveling", "Abroad", "Hospital", "Jail", "Fallen", "Federal"],
    type: String,
};
const statusColorEnum: StructureEnum<string> = {
    id: "status_color",
    name: "Status Color",
    values: ["green", "blue", "red"],
    type: String,
};
const lastActionStatusEnum: StructureEnum<string> = {
    id: "last_action_status",
    name: "Last Action Status",
    values: ["Online", "Idle", "Offline"],
    type: String,
};
const genderEnum: StructureEnum<string> = {
    id: "gender",
    name: "Gender",
    values: ["Male", "Female", "Enby"],
    type: String,
};
const statusStructure: Structure = {
    id: "status",
    name: "Status",
    schema: {
        description: { type: String },
        details: { type: String },
        state: fromStructure(statusStateEnum),
        color: fromStructure(statusColorEnum),
        until: { type: EpochSeconds, extra: "Will be 0 when not applicable." },
    },
};
const jobStructure: Structure = {
    id: "job",
    name: "Job",
    schema: {
        position: { type: String, extra: "Will be 'None' when not in a company or job." },
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
const lastActionStructure: Structure = {
    id: "last_action",
    name: "Last Action",
    schema: {
        status: fromStructure(lastActionStatusEnum),
        timestamp: { type: EpochSeconds, nullable: true },
        relative: { type: String, extra: "Will be 'No Last Action' when there is no last action." },
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
    description: "Get some information about an user.",
    access: "public",
    schema,
    structures,
    id: {
        optional: true,
    },
};

export default ProfileSelection;
