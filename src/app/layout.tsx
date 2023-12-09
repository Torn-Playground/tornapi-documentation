import "./globals.css";
import { Viewport } from "next";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ServerThemeProvider, ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header";
import Navigation from "@/components/global/navigation/Navigation";
import { ALL_THEMES, DEFAULT_THEME, STORAGE_KEY } from "@/components/global/theme-selector/theme-utilities";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <ServerThemeProvider defaultTheme={DEFAULT_THEME} themes={ALL_THEMES} storageKey={STORAGE_KEY}>
            <html lang="en">
                <body>
                    <ThemeProvider defaultTheme={DEFAULT_THEME} themes={ALL_THEMES} storageKey={STORAGE_KEY}>
                        <Navigation>
                            <Header />

                            <main className="px-2 py-1">{children}</main>

                            <Footer />
                        </Navigation>
                    </ThemeProvider>
                </body>
            </html>
        </ServerThemeProvider>
    );
}

export const metadata: Metadata = {
    title: "TornAPI",
    description: "Documentation for the TornAPI.",
    applicationName: "TornAPI Documentation",
    authors: [{ name: "DeKleineKobini" }],
    generator: "Next.js",
    keywords: ["torn.com", "Torn City", "TornAPI"],
    referrer: "strict-origin-when-cross-origin",
    creator: "DeKleineKobini",
    publisher: "DeKleineKobini",
    icons: {
        icon: "/favicon-playground.svg",
        apple: "/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
        noimageindex: true,
    },
    openGraph: {
        determiner: "",
        description: "Documentation for the TornAPI.",
        siteName: "TornAPI",
        locale: "en-US",
        url: "https://tornapi.tornplayground.eu/",
    },
    twitter: {
        card: "summary",
        description: "Documentation for the TornAPI.",
        title: "TornAPI",
    },
};

// noinspection JSUnusedGlobalSymbols
export const viewport: Viewport = {
    themeColor: "blue",
    colorScheme: "dark light",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};
