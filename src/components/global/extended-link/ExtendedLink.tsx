"use client";

import type { UrlObject } from "node:url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ForwardedRef, forwardRef, type PropsWithChildren, useEffect, useState } from "react";

interface ExtendedLinkProps extends PropsWithChildren {
    href: string | UrlObject;
    className?: string;
    activeClassName?: string;
    prefetch?: boolean;
}

const ExtendedLink = forwardRef(function ExtendedLink(props: ExtendedLinkProps, ref: ForwardedRef<HTMLAnchorElement>) {
    const pathname = usePathname();
    const [url, setUrl] = useState<string | UrlObject>("");

    useEffect(() => {
        setUrl(
            typeof props.href === "string"
                ? props.href
                : {
                      pathname,
                      ...props.href,
                  },
        );
    }, [props.href, pathname]);

    return (
        <Link className={`${props.className ?? ""} ${pathname === props.href ? props.activeClassName : ""}`} href={url} prefetch={props.prefetch} ref={ref}>
            {props.children}
        </Link>
    );
});

export default ExtendedLink;
