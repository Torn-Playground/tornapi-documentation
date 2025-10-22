"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";
import SaveKey from "@/components/try-it/key-input/SaveKey";
import ValidateKey from "@/components/try-it/key-input/ValidateKey";

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
        <section className="flex gap-2 flex-col sm:flex-row">
            <div className="form-control">
                <label className="input-group">
                    <span>API Key</span>
                    <input type="text" className="input input-bordered flex-grow sm:flex-grow-0" value={key} onChange={onChange} />
                </label>
            </div>

            <SaveKey />
            <ValidateKey />
        </section>
    );
}
