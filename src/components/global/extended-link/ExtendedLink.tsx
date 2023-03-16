"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardedRef, forwardRef, PropsWithChildren, useEffect, useState } from "react";
import { UrlObject } from "url";

interface ExtendedLinkProps extends PropsWithChildren {
    href: string | UrlObject;
    className?: string;
    activeClassName?: string;
    prefetch?: boolean;
}

const ExtendedLink = forwardRef(function ExtendedLink(props: ExtendedLinkProps, ref: ForwardedRef<any>) {
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
