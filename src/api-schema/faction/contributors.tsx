import Link from "next/link";
import { Integer, NumberBoolean } from "@/api-schema/common-types";
import { fromStructure, type Param, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";
import { onlySingleValue, requiredParam } from "@/api-schema/validations";

const memberContributorStructure: Structure = {
    id: "member_contributor",
    name: "Member Contributor",
    schema: {
        contributed: { type: Integer },
        in_faction: { type: NumberBoolean, description: "Whether or not the user is a current member." },
    },
};
const contributorStatStructure: Structure = {
    id: "contributor_stat",
    name: "Contributor Stat",
    schema: {
        "<user id>": fromStructure(memberContributorStructure, { nullable: true }),
    },
};
const contributorsStructure: Structure = {
    id: "contributors",
    name: "Contributors",
    schema: {
        "<faction stat>": fromStructure(memberContributorStructure, {
            array: true,
            extra: "Single value for the faction.",
        }),
        "<user stat>": fromStructure(contributorStatStructure),
    },
};
const structures = [contributorsStructure, contributorStatStructure, memberContributorStructure];

const schema: Schema = {
    contributors: fromStructure(contributorsStructure),
};

const statParam: Param = {
    name: "stat",
    description: "REQUIRED. Which stat you want to see the contributors for. Uses the keys from the faction/stats selection.",
    descriptionNode: (
        <>
            <strong>REQUIRED</strong>. Which stat you want to see the contributors for. Uses the keys from the{" "}
            <Link href="/faction/stats" className="link">
                faction/stats
            </Link>{" "}
            selection.
        </>
    ),
    validations: [requiredParam, onlySingleValue],
};

const ContributorsSelection: Selection = {
    name: "contributors",
    description: "List all contributors to a stat. Only available with faction API Access.",
    access: "limited",
    schema,
    structures,
    id: {
        optional: false,
    },
    params: [statParam],
};

export default ContributorsSelection;
