import { LookupSelection, TimestampSelection } from "@/api-schema/common-selections";
import BazaarSelection from "@/api-schema/market/bazaar";
import ItemMarketSelection from "@/api-schema/market/itemmarket";
import PointsMarketSelection from "@/api-schema/market/pointsmarket";
import { Section, Selection } from "@/api-schema/schema.types";

const selections: Selection[] = [LookupSelection, TimestampSelection, BazaarSelection, ItemMarketSelection, PointsMarketSelection];

const MarketSection: Section = {
    selections,
    defaultSelection: "bazaar",
    idDescription: null,
};

export default MarketSection;
