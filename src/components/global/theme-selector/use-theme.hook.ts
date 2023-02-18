import { useEffect, useState } from "react";
import { getDefaultTheme, hasMediaSupport, STORAGE_KEY, Theme } from "@/components/global/theme-selector/theme-utilities";

export default function useTheme() {
    const [currentTheme, setCurrentTheme] = useState<Theme>();

    const setTheme = (selectedTheme: Theme | undefined, save: boolean) => {
        document.documentElement.dataset.theme = selectedTheme || getDefaultTheme();

        if (save) {
            if (selectedTheme) localStorage.setItem(STORAGE_KEY, selectedTheme);
            else localStorage.removeItem(STORAGE_KEY);
        }
        setCurrentTheme(selectedTheme);
    };

    useEffect(() => {
        const getStoredTheme = () => (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? undefined;

        const preferredTheme = getStoredTheme();

        setTheme(preferredTheme, false);

        if (hasMediaSupport()) {
            const preferDarkMedia = window.matchMedia("(prefers-color-scheme: dark)");
            const onPreferenceChange = () => setTheme(undefined, false);
            preferDarkMedia.addEventListener("change", onPreferenceChange);
            return () => preferDarkMedia.removeEventListener("change", onPreferenceChange);
        }
        return () => {};
    }, []);

    return { theme: currentTheme, setTheme: (theme: Theme) => setTheme(theme, true) };
}
