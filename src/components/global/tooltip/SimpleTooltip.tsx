"use client";

import type { ReactElement } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/global/tooltip/Tooltip";
import styles from "./SimpleTooltip.module.css";

interface SimpleTooltipProps {
    children: ReactElement;
    tooltip: string;
}

export default function SimpleTooltip({ children, tooltip }: SimpleTooltipProps) {
    return (
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent className={styles.tooltip}>{tooltip}</TooltipContent>
        </Tooltip>
    );
}
