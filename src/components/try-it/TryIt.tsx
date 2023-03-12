"use client";

import KeyInput from "@/components/try-it/key-input/KeyInput";
import { CallProvider } from "@/components/try-it/CallContext";
import UrlSelector from "@/components/try-it/url-selector/UrlSelector";
import TryItButton from "@/components/try-it/TryItButton";
import CallResponse from "@/components/try-it/call-response/CallResponse";

export default function TryIt() {
    return (
        <CallProvider>
            <div className="mb-10">
                <h2 className="text-3xl font-bold capitalize mt-1 mb-2">Try It</h2>

                <KeyInput />
                <div className="divider" />
                <UrlSelector />
                <div className="divider" />
                <TryItButton />
                <div className="divider" />
                <CallResponse />
            </div>
        </CallProvider>
    );
}
