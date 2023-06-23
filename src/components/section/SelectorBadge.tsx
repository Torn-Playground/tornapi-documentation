import { PropsWithChildren } from "react";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";

interface SelectorBadgeProps extends PropsWithChildren {
    section: string;
    selection: string;
}

export default function SelectorBadge({ children, section, selection }: SelectorBadgeProps) {
    return (
        <ExtendedLink className="badge badge-lg" activeClassName="badge-primary" href={`/${section}/${selection}`}>
            {children}
        </ExtendedLink>
    );
}
