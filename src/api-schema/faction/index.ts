import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import ArmorSelection from "@/api-schema/faction/armor";
import AttacksSelection from "@/api-schema/faction/attacks";
import AttacksFullSelection from "@/api-schema/faction/attacksfull";
import BasicSelection from "@/api-schema/faction/basic";
import BoostersSelection from "@/api-schema/faction/boosters";
import ChainSelection from "@/api-schema/faction/chain";
import DrugsSelection from "@/api-schema/faction/drugs";
import MedicalSelection from "@/api-schema/faction/medical";
import TemporarySelection from "@/api-schema/faction/temporary";
import TerritorySelection from "@/api-schema/faction/territory";
import WeaponsSelection from "@/api-schema/faction/weapons";

const selections: Selection[] = [
    //  applications
    ArmorSelection,
    //  armorynews
    //  attacknews
    AttacksSelection,
    AttacksFullSelection,
    BasicSelection,
    BoostersSelection,
    //  cesium
    ChainSelection,
    //  chainreport
    //  chains
    //  contributors
    //  crimenews
    //  crimes
    //  currency
    //  donations
    DrugsSelection,
    //  fundsnews
    LookupSelection,
    //  mainnews
    MedicalSelection,
    //  membershipnews
    //  positions
    //  reports
    //  revives
    //  revivesfull
    //  stats
    TemporarySelection,
    TerritorySelection,
    //  territorynews
    TimestampSelection,
    //  upgrades
    WeaponsSelection,
];

const FactionSection: Section = {
    selections,
    defaultSelection: "basic",
    idDescription: null,
};

export default FactionSection;
