export type Theme = "dark" | "autumn";

export const DEFAULT_THEME: Theme = "dark";
export const THEME_DARK: Theme = "dark";
export const THEME_LIGHT: Theme = "autumn";

export const STORAGE_KEY = "tornapi-theme";

export const hasMediaSupport = () => typeof window !== "undefined" && typeof window.matchMedia !== "undefined";

export function getDefaultTheme(): Theme {
    if (!hasMediaSupport()) {
        return DEFAULT_THEME;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEME_DARK : THEME_LIGHT;
}
