"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { THEME_DARK, THEME_LIGHT } from "@/components/global/theme-selector/theme-utilities";
import { useCalls } from "@/components/try-it/CallContext";

export default function CallResponse() {
    const calls = useCalls();

    return (
        <div>
            <h3 className="text-xl font-bold capitalize mb-2">Responses</h3>

            {calls.responses.length ? (
                <div className="rounded-lg border-base-300 border-4">
                    {calls.responses
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map((response) => (
                            <div key={response.timestamp} className="collapse collapse-arrow odd:bg-base-300 even:bg-base-200">
                                <input type="checkbox" id={`response-${response.timestamp}`} defaultChecked />
                                <label
                                    className="collapse-title text-xl font-medium break-all break-words flex items-center gap-1.5"
                                    htmlFor={`response-${response.timestamp}`}
                                >
                                    {response.url}
                                    <CopyRequestUrl url={response.url} />
                                </label>
                                <CopyResponseButton json={response.data} />
                                <div className="collapse-content prose max-w-none">
                                    <pre>{JSON.stringify(response.data, null, 4)}</pre>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                "You haven't made any calls yet."
            )}
        </div>
    );
}

type CopyRequestUrlProps = {
    url: string;
};

function CopyRequestUrl({ url }: CopyRequestUrlProps) {
    function copyRequestURL() {
        void navigator.clipboard.writeText(url);
    }

    return (
        <button className="btn btn-outline btn-xs" onClick={copyRequestURL} type="button">
            Copy URL
        </button>
    );
}

type CopyResponseButtonProps = {
    json: string;
};

function CopyResponseButton({ json }: CopyResponseButtonProps) {
    const [ copied, setCopied ] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const timeout = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeout);
    }, [copied]);

    function copyResponse() {
        setCopied(true);
        navigator.clipboard.writeText(JSON.stringify(json, null, 4));
    }

    return (
        <button
            className="absolute rounded-lg right-8 top-20 btn btn-ghost"
            onClick={copyResponse}
            type="button"
        >
            {copied
            ? "✔ Copied"
            : <svg
                width="24px"
                height="24px"
                fill={theme === THEME_DARK ? "#fff" : "#000"}
                viewBox="0 0 1024 1024"
            >
                <path d="M736 768H160V128h576z m-512-64h448V192H224z" />
                <path d="M864 896H336V736h64v96h400V320h-112v-64h176v640z" />
            </svg>}
        </button>
    );
}
