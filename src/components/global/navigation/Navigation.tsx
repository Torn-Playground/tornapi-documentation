import Link from "next/link";
import type { PropsWithChildren } from "react";
import ExternalLinkIcon from "@/components/global/icons/ExternalLinkIcon";
import ThemeSelector from "@/components/global/theme-selector/ThemeSelector";

function Menu() {
    return (
        <ul className="menu menu-compact bg-base-200 w-56 min-h-full">
            <li>
                <Link href="/">Documentation</Link>
            </li>
            <li>
                <Link href="/search">Search</Link>
            </li>
            <li>
                <Link href="/try-it">Try It</Link>
            </li>
            <li>
                <Link href="/key-builder">Key Builder</Link>
            </li>
            <li className="menu-title">
                <div className="divider m-0">Sections</div>
            </li>
            <li>
                <Link href="/user">User</Link>
            </li>
            <li>
                <Link href="/property">Property</Link>
            </li>
            <li>
                <Link href="/faction">Faction</Link>
            </li>
            <li>
                <Link href="/company">Company</Link>
            </li>
            <li>
                <Link href="/market">Market</Link>
            </li>
            <li>
                <Link href="/torn">Torn</Link>
            </li>
            <li>
                <Link href="/key">Key</Link>
            </li>
            <li className="mt-auto">
                <a href="https://www.torn.com/swagger.php" target="_blank" rel="noreferrer">
                    <span className="inline-flex items-center gap-2">
                        API v2
                        <ExternalLinkIcon size={14} className="shrink-0" />
                    </span>
                </a>
            </li>
            <li>
                <a href="https://api-playground.cr-central.com" target="_blank" rel="noreferrer">
                    <span className="inline-flex items-center gap-2">
                        Unofficial v2 playground
                        <ExternalLinkIcon size={14} className="shrink-0" />
                    </span>
                </a>
            </li>
            <li>
                <ThemeSelector />
            </li>
        </ul>
    );
}

export default function Navigation({ children }: PropsWithChildren) {
    return (
        <div className="drawer drawer-mobile">
            <input id="navigation-drawer" type="checkbox" className="drawer-toggle hidden" />
            <div className="drawer-content relative">{children}</div>
            <nav className="drawer-side">
                {/** biome-ignore lint/a11y/noLabelWithoutControl: navigation */}
                <label htmlFor="navigation-drawer" className="drawer-overlay" />
                <Menu />
            </nav>
        </div>
    );
}
