"use client";

import { useEffect, useState } from "react";
import { useCalls } from "@/components/try-it/CallContext";
import type { InfoResponse } from "@/components/try-it/try-it";

export default function ValidateKey() {
    const [colorClass, setColorClass] = useState("");
    const [levelText, setLevelText] = useState("");
    const state = useCalls();

    const validate = async () => {
        setColorClass("");
        setLevelText("");
        const data = await fetch(`https://api.torn.com/key/?selections=info&key=${state.key}&comment=TornAPI`).then(
            (response) => response.json() as Promise<InfoResponse>,
        );

        if ("error" in data) {
            setColorClass("btn-error");
            setLevelText("");
        } else {
            setColorClass("btn-success");
            setLevelText(String(data.access_type));
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: reset state
    useEffect(() => {
        setColorClass("");
        setLevelText("");
    }, [state.key]);

    return (
        <button className={`btn ${colorClass}`} onClick={validate} disabled={!state.key} type="button">
            {levelText || "Validate"}
        </button>
    );
}
