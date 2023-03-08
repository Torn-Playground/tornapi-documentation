import ExtendedLink from "@/components/global/extended-link/ExtendedLink";
import { PropsWithChildren } from "react";

interface LimitTitleProps extends PropsWithChildren {
    id: string;
}

function LimitTitle(props: LimitTitleProps) {
    return (
        <h5 className="text-lg underline" id={props.id}>
            <ExtendedLink href={{ hash: props.id }} prefetch={false}>
                {props.children}
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
            Some data is stored in the cloud. Endpoints that pull that data have an additional limit of 100,000 rows a day, for a specific category. Looking at
            the same data in-game will also count towards the same limit, going over the limit will block access through both the api and in-game. The different
            categories are faction news, activity log and personal stats.
            <LimitTitle id="cache">Cache</LimitTitle>
            Calls to the API are cached. This cache lasts 29 seconds, so you can space your calls 30 seconds between them. Changing the section, selection or id
            will have a different cache, but other parameters like to and from won&apos;t. Like always, there are exceptions to this which will be documented on
            the specific selections.
        </>
    );
}
