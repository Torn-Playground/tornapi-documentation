import Tooltip from "@/components/global/tooltip/Tooltip";

interface SelectionEnumProps {
    type: string;
    values: Array<any>;
    incomplete?: { missing: string };
}

export default function SelectionEnum(props: SelectionEnumProps) {
    return (
        <div className="overflow-x-auto mt-1 flex gap-1 flex-wrap items-baseline">
            {props.incomplete && (
                <div className="text-error w-full">
                    <Tooltip tooltip={props.incomplete.missing}>
                        <span>Please note that is not complete yet. Let us know if you encounter a value that&apos;s not in here.</span>
                    </Tooltip>
                </div>
            )}

            <span>Limited values of the &apos;{props.type}&apos; type:</span>
            {props.values.sort().map((value) => (
                <div className="badge" key={value}>
                    {value}
                </div>
            ))}
        </div>
    );
}
