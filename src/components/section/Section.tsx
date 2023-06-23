import { SectionType, Selection } from "@/api-schema/schema.types";
import PinIcon from "@/components/global/icons/PinIcon";
import Tooltip from "@/components/global/tooltip/Tooltip";
import SelectorBadge from "@/components/section/SelectorBadge";

interface SectionProps {
    section: SectionType;
    selections: Selection[];
    defaultSelection?: string;
    idDescription?: string;
}

export default function Section({ defaultSelection, idDescription, section, selections }: SectionProps) {
    return (
        <div>
            <h2 className="text-3xl font-bold capitalize mt-1">{section}</h2>
            {idDescription && <p className="text-xs mb-4">{idDescription}</p>}

            <div className="flex flex-wrap gap-1">
                <span>Selections:</span>
                {selections
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((selection) => {
                        if (defaultSelection === selection.name) {
                            return (
                                <Tooltip key={selection.name} tooltip={`Default selection of the ${section} section.`}>
                                    <SelectorBadge key={selection.name} section={section} selection={selection.name}>
                                        <PinIcon size={16} solid />
                                        {selection.name}
                                    </SelectorBadge>
                                </Tooltip>
                            );
                        }
                        return (
                            <SelectorBadge key={selection.name} section={section} selection={selection.name}>
                                {selection.name}
                            </SelectorBadge>
                        );
                    })}
            </div>
        </div>
    );
}
