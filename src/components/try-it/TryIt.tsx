"use client";

import { Suspense } from "react";
import { CallProvider } from "@/components/try-it/CallContext";
import CallResponse from "@/components/try-it/call-response/CallResponse";
import KeyInput from "@/components/try-it/key-input/KeyInput";
import ShareButton from "@/components/try-it/ShareButton";
import TryItButton from "@/components/try-it/TryItButton";
import UrlSelector from "@/components/try-it/url-selector/UrlSelector";

export default function TryIt() {
    return (
        <CallProvider>
            <div className="mb-10">
                <h2 className="text-3xl font-bold capitalize mt-1 mb-2">Try It</h2>

                <KeyInput />
                <div className="divider" />
                <Suspense>
                    <UrlSelector />
                </Suspense>
                <div className="divider" />
                <section className="space-x-2">
                    <TryItButton />
                    <ShareButton />
                </section>
                <div className="divider" />
                <CallResponse />
            </div>
        </CallProvider>
    );
}
