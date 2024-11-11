import { KeyAccess } from "@/api-schema/schema.types";
import KeyIcon from "@/components/global/icons/KeyIcon";
import SimpleTooltip from "@/components/global/tooltip/SimpleTooltip";

interface SelectionPermissionProps {
    access: KeyAccess;
}

export default function SelectionPermission({ access }: SelectionPermissionProps) {
    return (
        <SimpleTooltip tooltip={`Requires an api key with ${access} access.`}>
            <div className="badge">
                <KeyIcon size={14} solid />
                <div className="ml-1">{access}</div>
            </div>
        </SimpleTooltip>
    );
}
