"use client";

import Tippy from "@tippyjs/react";
import { ReactElement } from "react";

interface TooltipProps {
    children: ReactElement;
    tooltip: string;
}

export default function Tooltip({ children, tooltip }: TooltipProps) {
    return <Tippy content={tooltip}>{children}</Tippy>;
}
