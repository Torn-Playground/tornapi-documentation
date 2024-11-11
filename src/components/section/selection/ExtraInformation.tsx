"use client";

import { ReactNode } from "react";
import QuestionMarkIcon from "@/components/global/icons/QuestionMarkIcon";
import SimpleTooltip from "@/components/global/tooltip/SimpleTooltip";

interface ExtraInformationProps {
    tooltip: string;
    color?: "primary" | "warning";
    iconElement?: ReactNode;
}

export default function ExtraInformation({ color, iconElement, tooltip }: ExtraInformationProps) {
    const getColorClass = () => {
        switch (color) {
            case "primary":
                return "badge-primary";
            case "warning":
                return "badge-warning";
            default:
                return "badge-primary";
        }
    };

    return (
        <SimpleTooltip tooltip={tooltip}>
            <div className={`badge ${getColorClass()} ml-1 px-1`}>{iconElement ?? <QuestionMarkIcon size={10} />}</div>
        </SimpleTooltip>
    );
}
