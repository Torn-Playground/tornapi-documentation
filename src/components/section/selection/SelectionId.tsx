import SimpleTooltip from "@/components/global/tooltip/SimpleTooltip";

interface SelectionIdProps {
    id: { optional: boolean } | { required: true };
}

export default function SelectionId({ id }: SelectionIdProps) {
    if ("optional" in id && id.optional) {
        return (
            <SimpleTooltip tooltip="id is optional for this call">
                <div className="badge badge-primary">id optional</div>
            </SimpleTooltip>
        );
    }
    if ("required" in id && id.required) {
        return (
            <SimpleTooltip tooltip="id is required for this call">
                <div className="badge badge-error">id required</div>
            </SimpleTooltip>
        );
    }

    return null;
}
