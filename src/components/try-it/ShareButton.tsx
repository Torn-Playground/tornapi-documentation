"use client";

import { useEffect, useState } from "react";
import { useCalls } from "@/components/try-it/CallContext";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);
    const calls = useCalls();

    const copyUrl = () => {
        void navigator.clipboard.writeText(calls.share);
        setCopied(true);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: reset state
    useEffect(() => {
        setCopied(false);
    }, [calls.share]);

    return (
        <button className="btn" disabled={!calls.share || copied} onClick={copyUrl} type="button">
            {copied ? "Copied" : "Share"}
        </button>
    );
}
