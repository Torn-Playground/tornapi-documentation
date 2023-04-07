"use client";

import { ReactNode } from "react";
import QuestionMarkIcon from "@/components/global/icons/QuestionMarkIcon";
import Tooltip from "@/components/global/tooltip/Tooltip";

interface ExtraInformationProps {
    tooltip: string;
    color?: "primary" | "warning";
    iconElement?: ReactNode;
}

export default function ExtraInformation(props: ExtraInformationProps) {
    const colorClass = `badge-${props.color ?? "primary"}`;

    return (
        <Tooltip tooltip={props.tooltip}>
            <div className={`badge ${colorClass} ml-1 px-1`}>{props.iconElement ?? <QuestionMarkIcon size={10} />}</div>
        </Tooltip>
    );
}
