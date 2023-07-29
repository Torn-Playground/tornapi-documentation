import { PropsWithChildren } from "react";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";

interface LimitTitleProps extends PropsWithChildren {
    id: string;
}

function LimitTitle({ children, id }: LimitTitleProps) {
    return (
        <h5 className="text-lg underline mt-1" id={id}>
            <ExtendedLink href={{ hash: id }} prefetch={false}>
                {children}
            </ExtendedLink>
        </h5>
    );
}

export default function Limits() {
    return (
        <>
            In order to have the game and the api keep running smooth, Torn applies some limits on their api. These limits are all rolling limits, meaning that
            they don&apos;t have a specific reset point.
            <LimitTitle id="call-limit">Call Limit</LimitTitle>
            Each user can make up to 100 requests per minute across all of their keys. Multiple requests using invalid keys may result in a temporary IP ban -
            you must account for this by removing disabled or invalid keys upon error.
            <LimitTitle id="ip-limit">IP Limit</LimitTitle>
            Alongside the call limit per user, there is also an IP limit of 1,000 calls a minute on a single IP.
            <LimitTitle id="cloud-limit">Cloud Limit</LimitTitle>
            Some data is stored in the cloud. Endpoints that pull that data have an additional limit of 50,000 rows a day (rolling 24 hours), for a specific
            category. These limits also exist in-game, but they are now separated and reaching the api limit will no longer. The different categories are
            faction news, events, activity log and personal stats.
            <LimitTitle id="cache">Cache</LimitTitle>
            Calls to the API are cached. This cache lasts 29 seconds, so you can space your calls 30 seconds between them. Changing the section, selection or id
            will have a different cache, but other parameters like to and from won&apos;t. Like always, there are exceptions to this which will be documented on
            the specific selections. You are <strong>NOT</strong> allowed to bypass the cache by using multiple API keys.
        </>
    );
}
