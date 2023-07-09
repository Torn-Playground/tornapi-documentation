"use client";

import { useEffect, useState } from "react";
import { getPossibleParams, schema } from "@/api-schema/data";
import { Param, SectionType } from "@/api-schema/schema.types";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";
import SelectionSelector from "@/components/try-it/url-selector/SelectionSelector";
import { createApiUrl, ParamInput } from "@/components/try-it/url-selector/url-utilities";

export default function UrlSelector() {
    const state = useCalls();
    const dispatch = useCallsDispatch();

    const [section, setSection] = useState<SectionType | "">("");
    const [selections, setSelections] = useState<string[]>([]);
    const [id, setId] = useState<string>("");
    const [comment, setComment] = useState<string>("TornAPI");
    const [selectedParams, setSelectedParams] = useState<{ [key: string]: string }>({});

    const [possibleParams, setPossibleParams] = useState<Param[]>([]);

    useEffect(() => {
        const params = Object.entries(selectedParams)
            .filter(([param]) => possibleParams.find((p) => p.name === param))
            .filter(([, value]) => value !== "")
            .map(([param, value]) => ({ param, value } as ParamInput));

        const url = createApiUrl(state.key, section, id, selections, comment, params);

        dispatch({ type: CallActionType.SET_URL, url });
    }, [state.key, dispatch, section, selections, id, selectedParams, possibleParams, comment]);
    useEffect(() => {
        setPossibleParams(getPossibleParams(section, selections));
    }, [section, selections]);

    return (
        <section className="mt-3">
            <div className="flex gap-2 flex-wrap">
                <div className="form-control">
                    <label className="input-group">
                        <span>Section</span>
                        <select className="select select-bordered capitalize" value={section} onChange={(event) => setSection(event.target.value as any)}>
                            <option disabled value="" />
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
                <div className="form-control">
                    <label className="input-group">
                        <span>Comment</span>
                        <input className="input input-bordered" value={comment} onChange={(event) => setComment(event.target.value)} />
                    </label>
                </div>
            </div>
            {possibleParams.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                    {possibleParams.map((param) => (
                        <div key={param.name} className="form-control">
                            <label className="input-group">
                                <span>{param.name}</span>
                                <input
                                    className="input input-bordered"
                                    value={selectedParams[param.name]}
                                    onChange={(event) =>
                                        setSelectedParams((p) => ({
                                            ...p,
                                            [param.name]: event.target.value,
                                        }))
                                    }
                                />
                            </label>
                        </div>
                    ))}
                </div>
            )}

            {section && <SelectionSelector section={section} onSelectionsChange={setSelections} />}
        </section>
    );
}
