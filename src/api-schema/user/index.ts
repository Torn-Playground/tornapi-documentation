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
import InventorySelection from "@/api-schema/user/inventory";
import JobPointsSelection from "@/api-schema/user/jobpoints";
import LogSelection from "@/api-schema/user/log";
import MedalsSelection from "@/api-schema/user/medals";
import MeritsSelection from "@/api-schema/user/merits";
import MessagesSelection from "@/api-schema/user/messages";
import MissionsSelection from "@/api-schema/user/missions";
import MoneySelection from "@/api-schema/user/money";
import NetworthSelection from "@/api-schema/user/networth";
import NewEventsSelection from "@/api-schema/user/newevents";
import NewMessagesSelection from "@/api-schema/user/newmessages";
import NotificationsSelection from "@/api-schema/user/notifications";
import PerksSelection from "@/api-schema/user/perks";
import PersonalStatsSelection from "@/api-schema/user/personalstats";
import ProfileSelection from "@/api-schema/user/profile";
import PropertiesSelection from "@/api-schema/user/properties";
import PublicStatusSelection from "@/api-schema/user/publicstatus";
import ReceivedEventsSelection from "@/api-schema/user/receivedevents";
import RefillsSelection from "@/api-schema/user/refills";
import ReportsSelection from "@/api-schema/user/reports";
import RevivesSelection from "@/api-schema/user/revives";
import RevivesFullSelection from "@/api-schema/user/revivesfull";
import SkillsSelection from "@/api-schema/user/skills";
import StocksSelection from "@/api-schema/user/stocks";
import TravelSelection from "@/api-schema/user/travel";
import WeaponExpSelection from "@/api-schema/user/weaponexp";
import WorkStatsSelection from "@/api-schema/user/workstats";

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
    InventorySelection,
    JobPointsSelection,
    LogSelection,
    LookupSelection,
    MedalsSelection,
    MeritsSelection,
    MessagesSelection,
    MissionsSelection,
    MoneySelection,
    NetworthSelection,
    NewEventsSelection,
    NewMessagesSelection,
    NotificationsSelection,
    PerksSelection,
    PersonalStatsSelection,
    PublicStatusSelection,
    ProfileSelection,
    PropertiesSelection,
    ReceivedEventsSelection,
    RefillsSelection,
    ReportsSelection,
    RevivesSelection,
    RevivesFullSelection,
    SkillsSelection,
    StocksSelection,
    TimestampSelection,
    TravelSelection,
    WeaponExpSelection,
    WorkStatsSelection,
];

const UserSection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: "Supports user ids and Discord user uuids for linked accounts.",
};

export default UserSection;
