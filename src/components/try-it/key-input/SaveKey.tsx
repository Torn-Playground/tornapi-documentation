"use client";

import { API_STORAGE_KEY, useCalls } from "@/components/try-it/CallContext";

export default function SaveKey() {
    const calls = useCalls();

    const save = () => {
        if (calls.key) localStorage.setItem(API_STORAGE_KEY, calls.key);
        else localStorage.removeItem(API_STORAGE_KEY);
    };

    return (
        <button className="btn" onClick={save}>
            Save
        </button>
    );
}
