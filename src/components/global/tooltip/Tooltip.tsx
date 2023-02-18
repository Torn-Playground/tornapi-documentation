"use client";

import Tippy from "@tippyjs/react";
import { ReactElement } from "react";

interface TooltipProps {
    children: ReactElement;
    tooltip: string;
}

export default function Tooltip(props: TooltipProps) {
    return <Tippy content={props.tooltip}>{props.children}</Tippy>;
}
