"use client";

import { useCalls } from "@/components/try-it/CallContext";

export default function CallResponse() {
    const calls = useCalls();

    return (
        <div>
            <h3>Responses</h3>

            {calls.responses.length
                ? calls.responses
                      .sort((a, b) => b.timestamp - a.timestamp)
                      .map((response) => (
                          <div key={response.timestamp} className="collapse collapse-arrow">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium">{response.url}</div>
                              <div className="collapse-content prose max-w-none">
                                  <pre>{JSON.stringify(response.data, null, 4)}</pre>
                              </div>
                          </div>
                      ))
                : "You haven't made any calls yet."}
        </div>
    );
}
