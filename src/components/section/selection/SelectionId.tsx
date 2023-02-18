import Tooltip from "@/components/global/tooltip/Tooltip";

interface SelectionIdProps {
    id: { optional: boolean } | { required: true };
}

export default function SelectionId(props: SelectionIdProps) {
    if ("optional" in props.id && props.id.optional) {
        return (
            <Tooltip tooltip="id is optional for this call">
                <div className="badge badge-primary">id optional</div>
            </Tooltip>
        );
    }
    if ("required" in props.id && props.id.required) {
        return (
            <Tooltip tooltip="id is required for this call">
                <div className="badge badge-error">id required</div>
            </Tooltip>
        );
    }

    return null;
}
