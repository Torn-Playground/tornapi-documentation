import { useSearchParams } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { schema } from "@/api-schema/data";
import { SectionType } from "@/api-schema/schema.types";

interface SelectionSelectorProps {
    section: SectionType;
    onSelectionsChange: (selections: string[]) => void;
}

export default function SelectionSelector({ onSelectionsChange, section }: SelectionSelectorProps) {
    const searchParams = useSearchParams();

    const [possibleSelections, setPossibleSelections] = useState<string[]>([]);
    const [selectedSelections, setSelectedSelections] = useState<string[]>([]);

    useEffect(() => {
        setPossibleSelections(schema[section].selections.map((selection) => selection.name));
        setSelectedSelections([]);
        onSelectionsChange([]);
    }, [section, onSelectionsChange]);

    useEffect(() => {
        const querySelections = searchParams.get("selections");
        if (querySelections) {
            const queryS = querySelections.split(",");
            setSelectedSelections(queryS);
            onSelectionsChange(queryS);
        }
    }, [searchParams, onSelectionsChange]);

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
        onSelectionsChange(newSelections);
    };

    return (
        <div className="mt-2 flex flex-wrap gap-1">
            {possibleSelections.map((selection) => (
                <span
                    key={selection}
                    className={`badge badge-lg ${selectedSelections.includes(selection) ? "badge-primary" : ""} cursor-pointer`}
                    data-selection={selection}
                    onClick={selectSelection}
                >
                    {selection}
                </span>
            ))}
        </div>
    );
}
