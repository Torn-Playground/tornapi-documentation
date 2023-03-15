import { Section, Selection } from "@/api-schema/schema.types";
import RankedWarReportSelection from "@/api-schema/torn/rankedwarreport";
import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import BankSelection from "@/api-schema/torn/bank";
import CardsSelection from "@/api-schema/torn/cards";
import CityShopsSelection from "@/api-schema/torn/cityshop";
import CompaniesSelection from "@/api-schema/torn/companies";
import EducationSelection from "@/api-schema/torn/education";
import FactionTreeSelection from "@/api-schema/torn/factiontree";
import GymsSelection from "@/api-schema/torn/gyms";
import HonorsSelection from "@/api-schema/torn/honors";
import MedalsSelection from "@/api-schema/torn/medals";
import ItemsSelection from "@/api-schema/torn/items";
import LogCategoriesSelection from "@/api-schema/torn/logcategories";
import LogTypesSelection from "@/api-schema/torn/logtypes";
import OrganisedCrimesSelection from "@/api-schema/torn/organisedcrimes";
import PawnShopSelection from "@/api-schema/torn/pawnshop";
import PokerTablesSelection from "@/api-schema/torn/pokertables";
import PropertiesSelection from "@/api-schema/torn/properties";
import RacketsSelection from "@/api-schema/torn/rackets";
import RaidsSelection from "@/api-schema/torn/raids";
import StocksSelection from "@/api-schema/torn/stocks";
import RankedWarsSelection from "@/api-schema/torn/rankedwars";
import StatsSelection from "@/api-schema/torn/stats";
import ItemDetailsSelection from "@/api-schema/torn/itemdetails";
import ItemStatsSelection from "@/api-schema/torn/itemstats";
import TerritoryWarsSelection from "@/api-schema/torn/territorywars";
import TerritorySelection from "@/api-schema/torn/territory";
import ChainReportSelection from "@/api-schema/torn/chainreport";
import CompetitionSelection from "@/api-schema/torn/competition";
import TerritoryNamesSelection from "@/api-schema/torn/territorynames";

const selections: Selection[] = [
    BankSelection,
    CardsSelection,
    ChainReportSelection,
    CityShopsSelection,
    CompaniesSelection,
    CompetitionSelection,
    EducationSelection,
    FactionTreeSelection,
    GymsSelection,
    HonorsSelection,
    ItemDetailsSelection,
    ItemsSelection,
    ItemStatsSelection,
    LogCategoriesSelection,
    LogTypesSelection,
    LookupSelection,
    MedalsSelection,
    OrganisedCrimesSelection,
    PawnShopSelection,
    PokerTablesSelection,
    PropertiesSelection,
    RacketsSelection,
    RaidsSelection,
    RankedWarReportSelection,
    RankedWarsSelection,
    StatsSelection,
    StocksSelection,
    TerritorySelection,
    TerritoryNamesSelection,
    TerritoryWarsSelection,
    TimestampSelection,
];

const TornSection: Section = {
    selections,
    defaultSelection: null,
    idDescription: "Supported ids depend on the selection.",
};

export default TornSection;
