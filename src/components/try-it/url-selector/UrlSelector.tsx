"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPossibleParams, schema } from "@/api-schema/data";
import type { Param, SectionType } from "@/api-schema/schema.types";
import { isValidComment, performValidations, type ValidationResult } from "@/api-schema/validations";
import { CallActionType, useCalls, useCallsDispatch } from "@/components/try-it/CallContext";
import SelectionSelector from "@/components/try-it/url-selector/SelectionSelector";
import { createApiUrl, createShareUrl, type ParamInput, type SelectedParamMap } from "@/components/try-it/url-selector/url-utilities";

interface ParameterInputProps {
    param: Param;
    value: string;
    updateValue: (value: string) => void;
    selectedParams: SelectedParamMap;
}

function ParameterInput({ param, value, updateValue, selectedParams }: ParameterInputProps) {
    const [validation, setValidation] = useState<ValidationResult>({ valid: true });
    const calls = useCalls();

    useEffect(() => {
        const result = performValidations(param, value, selectedParams, calls.id);

        setValidation(result);
    }, [param, value, selectedParams, calls.id]);

    return <ValidatedInput name={param.name} value={value || ""} updateValue={updateValue} validation={validation} />;
}

interface AdditionalInputProps {
    name: string;
    value: string;
    updateValue: (comment: string) => void;
    validation: ValidationResult;
}

function ValidatedInput({ name, value, updateValue, validation }: AdditionalInputProps) {
    return (
        <div className="form-control">
            <label className="input-group">
                <span>{name}</span>
                <input
                    className={`input input-bordered ${!validation.valid ? "input-error" : ""} ${
                        validation.valid && validation.warning ? "input-warning" : ""
                    }`}
                    value={value}
                    onChange={(event) => updateValue(event.target.value)}
                />
            </label>
            {!validation.valid ? <span className="text-error">{validation.reason}</span> : null}
            {validation.valid && validation.warning ? <span className="text-warning">{validation.warning}</span> : null}
        </div>
    );
}

export default function UrlSelector() {
    const state = useCalls();
    const dispatch = useCallsDispatch();
    const searchParams = useSearchParams();

    const [section, setSection] = useState<SectionType | "">("");
    const [selections, setSelections] = useState<string[]>([]);
    const [customSelections, setCustomSelections] = useState<string[]>([]);
    const [id, setId] = useState<string>("");
    const [comment, setComment] = useState<string>("TornAPI");
    const [selectedParams, setSelectedParams] = useState<SelectedParamMap>({});

    const [possibleParams, setPossibleParams] = useState<Param[]>([]);

    useEffect(() => {
        const params = Object.entries(selectedParams)
            .filter(([param]) => possibleParams.find((p) => p.name === param))
            .filter(([, value]) => value !== "")
            .map(([param, value]) => ({ param, value }) as ParamInput);

        const url = createApiUrl(state.key, section, id, selections, customSelections, comment, params);
        const share = createShareUrl(section, id, selections, customSelections, comment, params);

        dispatch({ type: CallActionType.SET_ID, id });
        dispatch({ type: CallActionType.SET_URL, url });
        dispatch({ type: CallActionType.SET_SHARE, share });
    }, [state.key, dispatch, section, selections, customSelections, id, selectedParams, possibleParams, comment]);
    useEffect(() => {
        setPossibleParams(getPossibleParams(section, selections));
    }, [section, selections]);
    useEffect(() => {
        const querySection = searchParams.get("section") as SectionType | "" | null;
        if (querySection) setSection(querySection);

        const queryId = searchParams.get("id");
        if (queryId) setId(queryId);

        const queryComment = searchParams.get("comment");
        if (queryComment) setComment(queryComment);

        const otherParams = [...searchParams.entries()]
            .filter(([key]) => !["section", "id", "selections", "custom-selections", "comment"].includes(key))
            .reduce<SelectedParamMap>((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
        if (otherParams && Object.keys(otherParams).length > 0) setSelectedParams(otherParams);
    }, [searchParams]);

    return (
        <section className="mt-3">
            <div className="flex gap-2 flex-wrap">
                <div className="form-control">
                    <label className="input-group">
                        <span>Section</span>
                        <select
                            className="select select-bordered capitalize"
                            value={section}
                            onChange={(event) => setSection(event.target.value as "" | SectionType)}
                        >
                            <option disabled value="" />
                            {Object.keys(schema).map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <ValidatedInput name="ID" value={id} updateValue={setId} validation={{ valid: true }} />
                <ValidatedInput name="Comment" value={comment} updateValue={setComment} validation={isValidComment(comment)} />
            </div>
            {possibleParams.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2 items-start">
                    {possibleParams.map((param) => (
                        <ParameterInput
                            key={param.name}
                            param={param}
                            value={selectedParams[param.name]}
                            updateValue={(value) =>
                                setSelectedParams((p) => ({
                                    ...p,
                                    [param.name]: value,
                                }))
                            }
                            selectedParams={selectedParams}
                        />
                    ))}
                </div>
            )}

            {section && <SelectionSelector section={section} onSelectionsChange={setSelections} onCustomSelectionsChange={setCustomSelections} />}
        </section>
    );
}
