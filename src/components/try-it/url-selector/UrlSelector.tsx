"use client";

import { useEffect, useState } from "react";
import { schema } from "@/api-schema/data";
import SelectionSelector from "@/components/try-it/url-selector/SelectionSelector";
import { SectionType } from "@/api-schema/schema.types";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";
import { createApiUrl } from "@/components/try-it/url-selector/url-utilities";

// FIXME 2023/03/02 - Finish this component.
// - Query Params
export default function UrlSelector() {
    const state = useCalls();
    const dispatch = useCallsDispatch();

    const [section, setSection] = useState<SectionType | "">("");
    const [selections, setSelections] = useState<string[]>([]);
    const [id, setId] = useState<string>("");

    useEffect(() => {
        const url = createApiUrl(state.key, section, id, selections);

        dispatch({ type: CallActionType.SET_URL, url });
    }, [state.key, dispatch, section, selections, id]);

    return (
        <section className="mt-3">
            <div className="flex gap-2 flex-wrap">
                <div className="form-control">
                    <label className="input-group">
                        <span>Section</span>
                        <select className="select select-bordered capitalize" value={section} onChange={(event) => setSection(event.target.value as any)}>
                            <option disabled value=""></option>
                            {Object.keys(schema).map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>ID</span>
                        <input className="input input-bordered" value={id} onChange={(event) => setId(event.target.value)} />
                    </label>
                </div>
            </div>

            {section && <SelectionSelector section={section} onSelectionsChange={setSelections} />}
        </section>
    );
}
