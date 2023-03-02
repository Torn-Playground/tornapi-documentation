"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";
import ValidateKey from "@/components/try-it/key-input/ValidateKey";
import SaveKey from "@/components/try-it/key-input/SaveKey";

export default function KeyInput() {
    const calls = useCalls();
    const dispatch = useCallsDispatch();

    const [key, setKey] = useState("");

    useEffect(() => {
        setKey(calls.key);
    }, [calls]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newKey = event.target.value;

        setKey(newKey);
        dispatch({ type: CallActionType.SET_KEY, key: newKey });
    };

    return (
        <section className="flex gap-2">
            <div className="form-control">
                <label className="input-group">
                    <span>API Key</span>
                    <input type="text" className="input input-bordered" value={key} onChange={onChange} />
                </label>
            </div>

            <SaveKey />
            <ValidateKey />
        </section>
    );
}
