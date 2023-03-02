import { SectionType } from "@/api-schema/schema.types";
import { schema } from "@/api-schema/data";
import { MouseEvent, useEffect, useState } from "react";

type SelectionSelectorProps = {
    section: SectionType;
    onSelectionsChange: (selections: string[]) => void;
};

export default function SelectionSelector(props: SelectionSelectorProps) {
    const [possibleSelections, setPossibleSelections] = useState<string[]>([]);
    const [selectedSelections, setSelectedSelections] = useState<string[]>([]);

    useEffect(() => {
        setPossibleSelections(schema[props.section].selections.map((selection) => selection.name));
    }, [props.section]);

    const selectSelection = (event: MouseEvent<HTMLSpanElement>) => {
        const selection = event.currentTarget.dataset.selection!;

        let newSelections: string[];
        if (event.ctrlKey) {
            if (!selectedSelections.includes(selection)) {
                newSelections = [...selectedSelections, selection];
            } else {
                newSelections = selectedSelections.filter((s) => s !== selection);
            }
        } else {
            newSelections = [selection];
        }
        setSelectedSelections(newSelections);
        props.onSelectionsChange(newSelections);
    };

    return (
        <div className="mt-2 space-x-1 cursor-pointer">
            {possibleSelections.map((selection) => (
                <span
                    key={selection}
                    className={`badge badge-lg ${selectedSelections.includes(selection) ? "badge-primary" : ""}`}
                    data-selection={selection}
                    onClick={selectSelection}
                >
                    {selection}
                </span>
            ))}
        </div>
    );
}
