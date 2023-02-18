import { PropsWithChildren } from "react";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";

interface SelectorBadgeProps extends PropsWithChildren {
    section: string;
    selection: string;
}

export default function SelectorBadge(props: SelectorBadgeProps) {
    return (
        <ExtendedLink className="badge badge-lg" activeClassName="badge-primary" href={`/${props.section}/${props.selection}`}>
            {props.children}
        </ExtendedLink>
    );
}
