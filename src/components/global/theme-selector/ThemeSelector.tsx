"use client";

import SunIcon from "@/components/global/icons/SunIcon";
import MoonIcon from "@/components/global/icons/MoonIcon";
import { ChangeEvent } from "react";
import { THEME_DARK, THEME_LIGHT } from "@/components/global/theme-selector/theme-utilities";
import useTheme from "@/components/global/theme-selector/use-theme.hook";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    const onThemeSelect = (event: ChangeEvent<HTMLInputElement>) => {
        setTheme(event.currentTarget.checked ? THEME_LIGHT : THEME_DARK);
    };

    return (
        <label className="swap swap-rotate">
            <input type="checkbox" className="hidden" onChange={onThemeSelect} checked={theme === THEME_LIGHT} />

            <MoonIcon className="swap-off" size={36} />
            <SunIcon className="swap-on" size={36} />
        </label>
    );
}
