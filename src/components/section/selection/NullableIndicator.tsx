import TrashIcon from "@/components/global/icons/TrashIcon";
import SimpleTooltip from "@/components/global/tooltip/SimpleTooltip";

interface NullableIndicatorProps {
    tooltip?: string;
}

export default function NullableIndicator({ tooltip }: NullableIndicatorProps) {
    return (
        <SimpleTooltip tooltip={tooltip ?? "Field can also be null."}>
            <div className="badge badge-error ml-1 px-1">
                <TrashIcon size={10} />
            </div>
        </SimpleTooltip>
    );
}
