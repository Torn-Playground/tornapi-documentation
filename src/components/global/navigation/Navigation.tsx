import Link from "next/link";
import { PropsWithChildren } from "react";
import ThemeSelector from "@/components/global/theme-selector/ThemeSelector";

const Menu = () => {
    return (
        <ul className="menu bg-base-200 w-60">
            <li>
                <Link href="/">Documentation</Link>
            </li>
            <li>
                <Link href="/try-it">Try It</Link>
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
            <li className="disabled">
                <span>Faction</span>
            </li>
            <li className="disabled">
                <span>Company</span>
            </li>
            <li className="disabled">
                <span>Market</span>
            </li>
            <li>
                <Link href="/torn">Torn</Link>
            </li>
            <li>
                <Link href="/key">Key</Link>
            </li>
            <li className="mt-auto">
                <ThemeSelector />
            </li>
        </ul>
    );
};

export default function Navigation(props: PropsWithChildren) {
    return (
        <div className="drawer drawer-mobile">
            <input id="navigation-drawer" type="checkbox" className="drawer-toggle hidden" />
            <div className="drawer-content">{props.children}</div>
            <nav className="drawer-side">
                <label htmlFor="navigation-drawer" className="drawer-overlay"></label>
                <Menu />
            </nav>
        </div>
    );
}
