import { Integer, String } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const donationStructure: Structure = {
    id: "donation",
    name: "Donation",
    schema: {
        name: { type: String },
        money_balance: { type: Integer },
        points_balance: { type: Integer },
    },
};
const donationsStructure: Structure = {
    id: "donationa",
    name: "Donations",
    schema: {
        "<user id>": fromStructure(donationStructure),
    },
};
const structures = [donationsStructure, donationStructure];

const schema: Schema = {
    donations: fromStructure(donationsStructure),
};

const DonationsSelection: Selection = {
    name: "donations",
    description: "Show current money and point balance for all users. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default DonationsSelection;
