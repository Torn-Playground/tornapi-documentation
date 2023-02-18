import KeyIcon from "@/components/global/icons/KeyIcon";
import { KeyAccess } from "@/api-schema/schema.types";
import Tooltip from "@/components/global/tooltip/Tooltip";

interface SelectionPermissionProps {
    access: KeyAccess;
}

export default function SelectionPermission(props: SelectionPermissionProps) {
    return (
        <Tooltip tooltip={`Requires an api key with ${props.access} access.`}>
            <div className="badge">
                <KeyIcon size={14} solid />
                <div className="ml-1">{props.access}</div>
            </div>
        </Tooltip>
    );
}
