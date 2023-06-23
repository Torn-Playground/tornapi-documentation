import { PropsWithChildren } from "react";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";

interface DocumentationTitleProps extends PropsWithChildren {
    id: string;
}

export default function DocumentationTitle({ children, id }: DocumentationTitleProps) {
    return (
        <h4 className="text-xl font-bold" id={id}>
            <ExtendedLink href={{ hash: id }} prefetch={false}>
                {children}
            </ExtendedLink>
        </h4>
    );
}
