import Tooltip from "@/components/global/tooltip/Tooltip";

interface SelectionEnumProps {
    type: string;
    values: string[] | number[];
    incomplete?: { missing: string };
}

export default function SelectionEnum({ incomplete, type, values }: SelectionEnumProps) {
    return (
        <div className="overflow-x-auto mt-1 flex gap-1 flex-wrap items-baseline">
            {incomplete && (
                <div className="text-error w-full">
                    <Tooltip tooltip={incomplete.missing}>
                        <span>Please note that is not complete yet. Let us know if you encounter a value that&apos;s not in here.</span>
                    </Tooltip>
                </div>
            )}

            <span>Limited values of the &apos;{type}&apos; type:</span>
            {values.sort().map((value) => (
                <div className="badge" key={value}>
                    {value}
                </div>
            ))}
        </div>
    );
}
