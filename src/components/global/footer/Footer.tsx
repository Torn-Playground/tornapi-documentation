import Link from "next/link";
import type { PropsWithChildren } from "react";
import GithubIcon from "@/components/global/icons/GithubIcon";

function DiscordLink({ children }: PropsWithChildren) {
    return (
        <Link href="https://discord.gg/2wb7GKN" target="_blank" className="text-accent link">
            {children}
        </Link>
    );
}

function GitHubLink({ children }: PropsWithChildren) {
    return (
        <Link href="https://github.com/Torn-Playground/tornapi-documentation" target="_blank" className="text-accent link">
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 bg-base-300 available-width text-center p-1 z-40">
            <span className="text-primary-content flex items-center justify-center">
                Brought to you by&nbsp;<DiscordLink>the TornAPI Discord</DiscordLink>.&nbsp;
                <GitHubLink>
                    <GithubIcon size={21} fill="hsl(var(--pc))" />
                </GitHubLink>
            </span>
        </footer>
    );
}
