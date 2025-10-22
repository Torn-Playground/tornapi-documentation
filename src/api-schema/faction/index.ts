import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import ApplicationsSelection from "@/api-schema/faction/applications";
import ArmorSelection from "@/api-schema/faction/armor";
import ArmoryNewsSelection from "@/api-schema/faction/armorynews";
import AttackNewsSelection from "@/api-schema/faction/attacknews";
import AttacksSelection from "@/api-schema/faction/attacks";
import AttacksFullSelection from "@/api-schema/faction/attacksfull";
import BasicSelection from "@/api-schema/faction/basic";
import BoostersSelection from "@/api-schema/faction/boosters";
import CachesSelection from "@/api-schema/faction/caches";
import CesiumSelection from "@/api-schema/faction/cesium";
import ChainSelection from "@/api-schema/faction/chain";
import ChainReportSelection from "@/api-schema/faction/chainreport";
import ChainsSelection from "@/api-schema/faction/chains";
import ContributorsSelection from "@/api-schema/faction/contributors";
import CrimeExpSelection from "@/api-schema/faction/crimeexp";
import CrimeNewsSelection from "@/api-schema/faction/crimenews";
import CrimesSelection from "@/api-schema/faction/crimes";
import CurrencySelection from "@/api-schema/faction/currency";
import DonationsSelection from "@/api-schema/faction/donations";
import DrugsSelection from "@/api-schema/faction/drugs";
import FundsNewsSelection from "@/api-schema/faction/fundsnews";
import MainNewsSelection from "@/api-schema/faction/mainnews";
import MedicalSelection from "@/api-schema/faction/medical";
import MembershipNewsSelection from "@/api-schema/faction/membershipnews";
import PositionsSelection from "@/api-schema/faction/positions";
import RankedWarsSelection from "@/api-schema/faction/rankedwars";
import ReportsSelection from "@/api-schema/faction/reports";
import RevivesSelection from "@/api-schema/faction/revives";
import RevivesFullSelection from "@/api-schema/faction/revivesfull";
import StatsSelection from "@/api-schema/faction/stats";
import TemporarySelection from "@/api-schema/faction/temporary";
import TerritorySelection from "@/api-schema/faction/territory";
import TerritoryNewsSelection from "@/api-schema/faction/territorynews";
import UpgradesSelection from "@/api-schema/faction/upgrades";
import WeaponsSelection from "@/api-schema/faction/weapons";
import type { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [
    ApplicationsSelection,
    ArmorSelection,
    ArmoryNewsSelection,
    AttackNewsSelection,
    AttacksSelection,
    AttacksFullSelection,
    BasicSelection,
    BoostersSelection,
    CachesSelection,
    CesiumSelection,
    ChainSelection,
    ChainReportSelection,
    ChainsSelection,
    ContributorsSelection,
    CrimeExpSelection,
    CrimeNewsSelection,
    CrimesSelection,
    CurrencySelection,
    DonationsSelection,
    DrugsSelection,
    FundsNewsSelection,
    LookupSelection,
    MainNewsSelection,
    MedicalSelection,
    MembershipNewsSelection,
    PositionsSelection,
    RankedWarsSelection,
    ReportsSelection,
    RevivesSelection,
    RevivesFullSelection,
    StatsSelection,
    TemporarySelection,
    TerritorySelection,
    TerritoryNewsSelection,
    TimestampSelection,
    UpgradesSelection,
    WeaponsSelection,
];

const FactionSection: Section = {
    selections,
    defaultSelection: "basic",
    idDescription: "Can be used with a faction id.",
};

export default FactionSection;
