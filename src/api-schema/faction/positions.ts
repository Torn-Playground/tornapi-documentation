import { NumberBoolean } from "@/api-schema/common-types";
import { fromStructure, type Schema, type Selection, type Structure } from "@/api-schema/schema.types";

const positionStructure: Structure = {
    id: "position",
    name: "Position",
    schema: {
        default: { type: NumberBoolean },
        canUseMedicalItem: { type: NumberBoolean },
        canUseBoosterItem: { type: NumberBoolean },
        canUseDrugItem: { type: NumberBoolean },
        canUseEnergyRefill: { type: NumberBoolean },
        canUseNerveRefill: { type: NumberBoolean },
        canLoanTemporaryItem: { type: NumberBoolean },
        canLoanWeaponAndArmory: { type: NumberBoolean },
        canRetrieveLoanedArmory: { type: NumberBoolean },
        canPlanAndInitiateOrganisedCrime: { type: NumberBoolean },
        canAccessFactionApi: { type: NumberBoolean },
        canGiveItem: { type: NumberBoolean },
        canGiveMoney: { type: NumberBoolean },
        canGivePoints: { type: NumberBoolean },
        canManageForum: { type: NumberBoolean },
        canManageApplications: { type: NumberBoolean },
        canKickMembers: { type: NumberBoolean },
        canAdjustMemberBalance: { type: NumberBoolean },
        canManageWars: { type: NumberBoolean },
        canManageUpgrades: { type: NumberBoolean },
        canSendNewsletter: { type: NumberBoolean },
        canChangeAnnouncement: { type: NumberBoolean },
        canChangeDescription: { type: NumberBoolean },
    },
};
const positionsStructure: Structure = {
    id: "positions",
    name: "Positions",
    schema: {
        "<position>": fromStructure(positionStructure),
    },
};
const structures = [positionsStructure, positionStructure];

const schema: Schema = {
    positions: fromStructure(positionsStructure),
};

const PositionsSelection: Selection = {
    name: "positions",
    description: "List all faction positions and the attached permissions. Only available with faction API Access.",
    access: "minimal",
    schema,
    structures,
    id: {
        optional: false,
    },
};

export default PositionsSelection;
