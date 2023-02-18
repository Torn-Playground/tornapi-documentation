interface SelectionEnumProps {
    type: string;
    values: Array<any>;
}

export default function SelectionEnum(props: SelectionEnumProps) {
    return (
        <div className="overflow-x-auto mt-1 flex gap-1 flex-wrap items-baseline">
            <span>Limited values of the &apos;{props.type}&apos; type:</span>
            {props.values.sort().map((value) => (
                <div className="badge" key={value}>
                    {value}
                </div>
            ))}
        </div>
    );
}
