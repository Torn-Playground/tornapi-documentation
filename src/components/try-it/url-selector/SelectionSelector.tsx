import { useSearchParams } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { schema } from "@/api-schema/data";
import { SectionType } from "@/api-schema/schema.types";
import TrashIcon from "@/components/global/icons/TrashIcon";

interface SelectionSelectorProps {
    section: SectionType;
    onSelectionsChange: (selections: string[]) => void;
    onCustomSelectionsChange: (selections: string[]) => void;
}

export default function SelectionSelector({ onSelectionsChange, section, onCustomSelectionsChange }: SelectionSelectorProps) {
    const searchParams = useSearchParams();

    const [possibleSelections, setPossibleSelections] = useState<string[]>([]);
    const [selectedSelections, setSelectedSelections] = useState<string[]>([]);
    const [customSelections, setCustomSelections] = useState<string[]>([]);

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

        const queryCustomSelections = searchParams.get("custom-selections");
        if (queryCustomSelections) {
            const queryS = queryCustomSelections.split(",");
            setCustomSelections(queryS);
            onCustomSelectionsChange(queryS);
        }
    }, [searchParams, onSelectionsChange, onCustomSelectionsChange]);

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

    const updateCustomSelection = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const newCustomSelections = customSelections.with(index, event.target.value);

        setCustomSelections(newCustomSelections);
        onCustomSelectionsChange(newCustomSelections);
    };

    const deleteCustomSelection = (index: number) => {
        const newCustomSelections = customSelections.filter((_, i) => i !== index);

        setCustomSelections(newCustomSelections);
        onCustomSelectionsChange(newCustomSelections);
    };

    const newCustomSelection = () => {
        const newCustomSelections = [...customSelections];
        newCustomSelections.push("");

        setCustomSelections(newCustomSelections);
        onCustomSelectionsChange(newCustomSelections);
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
            {customSelections.map((selection, index) => (
                <span
                    key={`custom-${index}`}
                    className="badge badge-lg badge-accent cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-blue-500"
                >
                    <input
                        type="text"
                        className="input input-ghost input-xs w-24 py-0 bg-transparent focus:outline-none focus:border-none !text-accent-content text-base"
                        value={selection}
                        onChange={(event) => updateCustomSelection(event, index)}
                    />
                    <TrashIcon size={12} onClick={() => deleteCustomSelection(index)} />
                </span>
            ))}
            <span className="badge badge-lg badge-accent cursor-pointer" onClick={newCustomSelection}>
                +
            </span>
        </div>
    );
}
