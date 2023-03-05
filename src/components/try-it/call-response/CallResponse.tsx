"use client";

import { useCalls } from "@/components/try-it/CallContext";

export default function CallResponse() {
    const calls = useCalls();

    return (
        <div>
            <h3 className="text-xl font-bold capitalize mb-2">Responses</h3>

            {calls.responses.length ? (
                <div className="rounded-lg border-base-300 border-4">
                    {calls.responses
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map((response) => (
                            <label key={response.timestamp} className="collapse collapse-arrow odd:bg-base-300 even:bg-base-200">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">{response.url}</div>
                                <div className="collapse-content prose max-w-none">
                                    <pre>{JSON.stringify(response.data, null, 4)}</pre>
                                </div>
                            </label>
                        ))}
                </div>
            ) : (
                "You haven't made any calls yet."
            )}
        </div>
    );
}
