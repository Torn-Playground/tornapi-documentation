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

export default function Section(props: SectionProps) {
    return (
        <div>
            <h2 className="text-3xl font-bold capitalize mt-1">{props.section}</h2>
            {props.idDescription && <p className="text-xs mb-4">{props.idDescription}</p>}

            <div className="flex flex-wrap gap-1">
                <span>Selections:</span>
                {props.selections
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((selection) => {
                        if (props.defaultSelection === selection.name) {
                            return (
                                <Tooltip key={selection.name} tooltip={`Default selection of the ${props.section} section.`}>
                                    <SelectorBadge key={selection.name} section={props.section} selection={selection.name}>
                                        <PinIcon size={16} solid />
                                        {selection.name}
                                    </SelectorBadge>
                                </Tooltip>
                            );
                        }
                        return (
                            <SelectorBadge key={selection.name} section={props.section} selection={selection.name}>
                                {selection.name}
                            </SelectorBadge>
                        );
                    })}
            </div>
        </div>
    );
}
