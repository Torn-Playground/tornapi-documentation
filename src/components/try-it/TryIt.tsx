"use client";

import KeyInput from "@/components/try-it/key-input/KeyInput";
import { CallProvider } from "@/components/try-it/CallContext";
import UrlSelector from "@/components/try-it/url-selector/UrlSelector";

// FIXME 2023/02/17 - Implement try it page.
export default function TryIt() {
    return (
        <CallProvider>
            <h2 className="text-3xl font-bold capitalize mt-1 mb-2">Try It</h2>

            <KeyInput />
            <div className="divider" />
            <UrlSelector />
            <div className="divider" />
            <button className="btn" disabled>
                Try It
            </button>
            <div className="divider" />
            <span>OUTPUT</span>
        </CallProvider>
    );
}
