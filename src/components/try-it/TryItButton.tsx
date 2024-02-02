"use client";

import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";

export default function TryItButton() {
    const [executing, setExecuting] = useState(false);
    const calls = useCalls();
    const dispatch = useCallsDispatch();

    const executeCall = async () => {
        setExecuting(true);

        const data = await fetch(calls.url)
            .then((response) => response.json())
            .finally(() => setExecuting(false));

        dispatch({ type: CallActionType.EXECUTE_CALL, data, timestamp: Date.now(), url: calls.url });
    };

    return (
        <button className="btn" disabled={!calls.url || executing} onClick={executeCall} type="button">
            {executing ? <TailSpin width={12} height={12} fill="currentColor" /> : "Try It"}
        </button>
    );
}
