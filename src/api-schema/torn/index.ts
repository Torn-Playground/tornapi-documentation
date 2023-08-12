import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import { Section, Selection } from "@/api-schema/schema.types";
import BankSelection from "@/api-schema/torn/bank";
import CardsSelection from "@/api-schema/torn/cards";
import ChainReportSelection from "@/api-schema/torn/chainreport";
import CityShopsSelection from "@/api-schema/torn/cityshop";
import CompaniesSelection from "@/api-schema/torn/companies";
import CompetitionSelection from "@/api-schema/torn/competition";
import EducationSelection from "@/api-schema/torn/education";
import FactionTreeSelection from "@/api-schema/torn/factiontree";
import GymsSelection from "@/api-schema/torn/gyms";
import HonorsSelection from "@/api-schema/torn/honors";
import ItemDetailsSelection from "@/api-schema/torn/itemdetails";
import ItemsSelection from "@/api-schema/torn/items";
import ItemStatsSelection from "@/api-schema/torn/itemstats";
import LogCategoriesSelection from "@/api-schema/torn/logcategories";
import LogTypesSelection from "@/api-schema/torn/logtypes";
import MedalsSelection from "@/api-schema/torn/medals";
import OrganisedCrimesSelection from "@/api-schema/torn/organisedcrimes";
import PawnShopSelection from "@/api-schema/torn/pawnshop";
import PokerTablesSelection from "@/api-schema/torn/pokertables";
import PropertiesSelection from "@/api-schema/torn/properties";
import RacketsSelection from "@/api-schema/torn/rackets";
import RaidReportSelection from "@/api-schema/torn/raidreport";
import RaidsSelection from "@/api-schema/torn/raids";
import RankedWarReportSelection from "@/api-schema/torn/rankedwarreport";
import RankedWarsSelection from "@/api-schema/torn/rankedwars";
import StatsSelection from "@/api-schema/torn/stats";
import StocksSelection from "@/api-schema/torn/stocks";
import TerritorySelection from "@/api-schema/torn/territory";
import TerritoryNamesSelection from "@/api-schema/torn/territorynames";
import TerritoryWarReportSelection from "@/api-schema/torn/territorywarreport";
import TerritoryWarsSelection from "@/api-schema/torn/territorywars";

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
    RaidReportSelection,
    RaidsSelection,
    RankedWarReportSelection,
    RankedWarsSelection,
    StatsSelection,
    StocksSelection,
    TerritorySelection,
    TerritoryNamesSelection,
    TerritoryWarReportSelection,
    TerritoryWarsSelection,
    TimestampSelection,
];

const TornSection: Section = {
    selections,
    defaultSelection: null,
    idDescription: "Supported ids depend on the selection.",
};

export default TornSection;
