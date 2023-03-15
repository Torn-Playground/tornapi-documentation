import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import ArmorSelection from "@/api-schema/faction/armor";
import ArmoryNewsSelection from "@/api-schema/faction/armorynews";
import AttackNewsSelection from "@/api-schema/faction/attacknews";
import AttacksSelection from "@/api-schema/faction/attacks";
import AttacksFullSelection from "@/api-schema/faction/attacksfull";
import BasicSelection from "@/api-schema/faction/basic";
import BoostersSelection from "@/api-schema/faction/boosters";
import ChainSelection from "@/api-schema/faction/chain";
import ChainReportSelection from "@/api-schema/faction/chainreport";
import ChainsSelection from "@/api-schema/faction/chains";
import CrimeNewsSelection from "@/api-schema/faction/crimenews";
import DrugsSelection from "@/api-schema/faction/drugs";
import FundsNewsSelection from "@/api-schema/faction/fundsnews";
import MainNewsSelection from "@/api-schema/faction/mainnews";
import MedicalSelection from "@/api-schema/faction/medical";
import MembershipNewsSelection from "@/api-schema/faction/membershipnews";
import TemporarySelection from "@/api-schema/faction/temporary";
import TerritorySelection from "@/api-schema/faction/territory";
import TerritoryNewsSelection from "@/api-schema/faction/territorynews";
import UpgradesSelection from "@/api-schema/faction/upgrades";
import WeaponsSelection from "@/api-schema/faction/weapons";

const selections: Selection[] = [
    //  applications
    ArmorSelection,
    ArmoryNewsSelection,
    AttackNewsSelection,
    AttacksSelection,
    AttacksFullSelection,
    BasicSelection,
    BoostersSelection,
    //  cesium
    ChainSelection,
    ChainReportSelection,
    ChainsSelection,
    //  contributors
    CrimeNewsSelection,
    //  crimes
    //  currency
    //  donations
    DrugsSelection,
    FundsNewsSelection,
    LookupSelection,
    MainNewsSelection,
    MedicalSelection,
    MembershipNewsSelection,
    //  positions
    //  reports
    //  revives
    //  revivesfull
    //  stats
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
    idDescription: null,
};

export default FactionSection;
