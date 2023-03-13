import { Section, Selection } from "@/api-schema/schema.types";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import AttacksSelection from "@/api-schema/faction/attacks";
import AttacksFullSelection from "@/api-schema/faction/attacksfull";
import BasicSelection from "@/api-schema/faction/basic";
import ChainSelection from "@/api-schema/faction/chain";
import TerritorySelection from "@/api-schema/faction/territory";

const selections: Selection[] = [
    //  applications
    //  armor
    //  armorynews
    //  attacknews
    AttacksSelection,
    AttacksFullSelection,
    BasicSelection,
    //  boosters
    //  cesium
    ChainSelection,
    //  chainreport
    //  chains
    //  contributors
    //  crimenews
    //  crimes
    //  currency
    //  donations
    //  drugs
    //  fundsnews
    LookupSelection,
    //  mainnews
    //  medical
    //  membershipnews
    //  positions
    //  reports
    //  revives
    //  revivesfull
    //  stats
    //  temporary
    TerritorySelection,
    //  territorynews
    TimestampSelection,
    //  upgrades
    //  weapons
];

const FactionSection: Section = {
    selections,
    defaultSelection: "basic",
    idDescription: null,
};

export default FactionSection;
