"use client";

import KeyInput from "@/components/try-it/key-input/KeyInput";
import { CallProvider } from "@/components/try-it/CallContext";

// FIXME 2023/02/17 - Implement try it page.
export default function TryIt() {
    return (
        <CallProvider>
            <h2 className="text-3xl font-bold capitalize mt-1 mb-2">Try It</h2>

            <KeyInput />

            <span>URL selector</span>

            <button className="btn" disabled>
                Try It
            </button>
            <span>OUTPUT</span>
        </CallProvider>
    );
}
