"use client";

import { useEffect, useState } from "react";
import CopyIcon from "@/components/global/icons/CopyIcon";
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

interface CopyRequestUrlProps {
    url: string;
}

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

interface CopyResponseButtonProps {
    json: unknown;
}

function CopyResponseButton({ json }: CopyResponseButtonProps) {
    const [copied, setCopied] = useState(false);

    // biome-ignore lint/correctness/useExhaustiveDependencies: reset state
    useEffect(() => {
        const timeout = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeout);
    }, [copied]);

    function copyResponse() {
        setCopied(true);
        void navigator.clipboard.writeText(JSON.stringify(json, null, 4));
    }

    return (
        <button className="absolute right-8 top-20 btn btn-ghost btn-circle" onClick={copyResponse} type="button">
            {copied ? "✔ Copied" : <CopyIcon className="copy-response" size={24} />}
        </button>
    );
}
