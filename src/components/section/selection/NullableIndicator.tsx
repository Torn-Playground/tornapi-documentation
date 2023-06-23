import TrashIcon from "@/components/global/icons/TrashIcon";
import Tooltip from "@/components/global/tooltip/Tooltip";

interface NullableIndicatorProps {
    tooltip?: string;
}

export default function NullableIndicator({ tooltip }: NullableIndicatorProps) {
    return (
        <Tooltip tooltip={tooltip ?? "Field can also be null."}>
            <div className="badge badge-error ml-1 px-1">
                <TrashIcon size={10} />
            </div>
        </Tooltip>
    );
}
