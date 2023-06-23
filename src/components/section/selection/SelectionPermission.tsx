import { KeyAccess } from "@/api-schema/schema.types";
import KeyIcon from "@/components/global/icons/KeyIcon";
import Tooltip from "@/components/global/tooltip/Tooltip";

interface SelectionPermissionProps {
    access: KeyAccess;
}

export default function SelectionPermission({ access }: SelectionPermissionProps) {
    return (
        <Tooltip tooltip={`Requires an api key with ${access} access.`}>
            <div className="badge">
                <KeyIcon size={14} solid />
                <div className="ml-1">{access}</div>
            </div>
        </Tooltip>
    );
}
