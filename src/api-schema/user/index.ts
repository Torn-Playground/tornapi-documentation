import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import { Section, Selection } from "@/api-schema/schema.types";
import AmmoSelection from "@/api-schema/user/ammo";
import AttacksSelection from "@/api-schema/user/attacks";
import AttacksFullSelection from "@/api-schema/user/attacksfull";
import ProfileSelection from "@/api-schema/user/profile";

const selections: Selection[] = [
    AmmoSelection,
    AttacksSelection,
    AttacksFullSelection,
    //  bars
    //  basic
    //  battlestats
    //  bazaar
    //  cooldowns
    //  crimes
    //  discord
    //  display
    //  education
    //  events
    //  gym
    //  hof
    //  honors
    //  icons
    //  inventory
    //  jobpoints
    //  log
    LookupSelection,
    //  medals
    //  merits
    //  messages
    //  missions
    //  money
    //  networth
    //  newevents
    //  newmessages
    //  notifications
    //  perks
    //  personalstats
    ProfileSelection,
    //  properties
    //  receivedevents
    //  refills
    //  reports
    //  revives
    //  revivesfull
    //  skills
    //  stocks
    TimestampSelection,
    //  travel
    //  weaponexp
    //  workstats
];

const UserSection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: "Supports user ids and Discord user uuids for linked accounts.",
};

export default UserSection;
