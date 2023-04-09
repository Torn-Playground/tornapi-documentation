import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import { Section, Selection } from "@/api-schema/schema.types";
import AmmoSelection from "@/api-schema/user/ammo";
import AttacksSelection from "@/api-schema/user/attacks";
import AttacksFullSelection from "@/api-schema/user/attacksfull";
import BarsSelection from "@/api-schema/user/bars";
import BasicSelection from "@/api-schema/user/basic";
import BattleStatsSelection from "@/api-schema/user/battlestats";
import BazaarSelection from "@/api-schema/user/bazaar";
import CooldownsSelection from "@/api-schema/user/cooldowns";
import CrimesSelection from "@/api-schema/user/crimes";
import DiscordSelection from "@/api-schema/user/discord";
import DisplaySelection from "@/api-schema/user/display";
import EducationSelection from "@/api-schema/user/education";
import EventsSelection from "@/api-schema/user/events";
import GymSelection from "@/api-schema/user/gym";
import HOFSelection from "@/api-schema/user/hof";
import IconsSelection from "@/api-schema/user/icons";
import ProfileSelection from "@/api-schema/user/profile";

const selections: Selection[] = [
    AmmoSelection,
    AttacksSelection,
    AttacksFullSelection,
    BarsSelection,
    BasicSelection,
    BattleStatsSelection,
    BazaarSelection,
    CooldownsSelection,
    CrimesSelection,
    DiscordSelection,
    DisplaySelection,
    EducationSelection,
    EventsSelection,
    GymSelection,
    HOFSelection,
    IconsSelection,
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
