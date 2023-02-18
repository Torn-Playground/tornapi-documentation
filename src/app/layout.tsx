import "./globals.css";
import { PropsWithChildren } from "react";
import Navigation from "@/components/global/navigation/Navigation";
import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// noinspection JSUnusedGlobalSymbols
export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" data-theme="dark">
            <body>
                <Navigation>
                    <Header />

                    <main className="px-2 py-1">{children}</main>

                    <Footer />
                </Navigation>
            </body>
        </html>
    );
}

// noinspection JSUnusedGlobalSymbols
export const metadata: Partial<Metadata> = {
    title: "TornAPI",
    description: "Documentation for the TornAPI.",
    applicationName: "TornAPI Documentation",
    authors: [{ name: "DeKleineKobini" }],
    generator: "Next.js",
    keywords: ["torn.com", "Torn City", "TornAPI"],
    referrer: "strict-origin-when-cross-origin",
    themeColor: "blue",
    colorScheme: "dark light",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    creator: "DeKleineKobini",
    publisher: "DeKleineKobini",
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
