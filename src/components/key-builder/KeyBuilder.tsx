"use client";

import { type ChangeEvent, type CSSProperties, useEffect, useMemo, useState } from "react";
import { getSelectableSelections } from "@/api-schema/data";
import type { SectionType } from "@/api-schema/schema.types";
import { KeyBuilderActionType, KeyBuilderProvider, useKeyBuilder, useKeyBuilderDispatch } from "@/components/key-builder/KeyBuilderContext";
import { buildCustomKeyUrl } from "@/components/key-builder/key-builder";

export default function KeyBuilder() {
    return (
        <KeyBuilderProvider>
            <div className="mb-10">
                <h2 className="text-3xl font-bold capitalize mt-1 mb-2">Key Builder</h2>

                <TitleInput />
                <div className="divider" />
                <SelectionSelectors />
                <div className="divider" />
                <BuildButton />
            </div>
        </KeyBuilderProvider>
    );
}

function TitleInput() {
    const keyBuilder = useKeyBuilder();
    const dispatch = useKeyBuilderDispatch();

    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(keyBuilder.title);
    }, [keyBuilder]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;

        setTitle(newTitle);
        dispatch({ type: KeyBuilderActionType.SET_TITLE, title: newTitle });
    };

    return (
        <div className="form-control">
            <label className="input-group">
                <span>Key Title</span>
                <input type="text" className="input input-bordered flex-grow sm:flex-grow-0" value={title} onChange={onChange} />
            </label>
        </div>
    );
}

function SelectionSelectors() {
    return getSelectableSelections().map(([section, selections], index, self) => (
        <section key={section}>
            <span className="capitalize">{section}</span>

            <SelectionSelector section={section} possibleSelections={selections} />

            {index + 1 < self.length && <div className="divider" />}
        </section>
    ));
}

interface SelectionSelectorProps {
    section: SectionType;
    possibleSelections: string[];
}

function SelectionSelector({ section, possibleSelections }: SelectionSelectorProps) {
    const state = useKeyBuilder();
    const dispatch = useKeyBuilderDispatch();

    const toggleSelection = (selection: string) => {
        dispatch({ type: KeyBuilderActionType.TOGGLE_SELECTION, section, selection });
    };

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
            {possibleSelections.map((selection) => (
                <div key={`${section}-${selection}`}>
                    <div className="form-control space-x-0.5">
                        <div className="space-x-0.5">
                            <input
                                type="checkbox"
                                id={`builder-${section}-${selection}`}
                                checked={state.selections[section].includes(selection)}
                                onChange={() => toggleSelection(selection)}
                                className="checkbox checkbox-xs mr-1.5 bg-transparent"
                                style={{ "--rounded-btn": "0.25rem" } as CSSProperties}
                            />
                            <label className="label-text cursor-pointer" htmlFor={`builder-${section}-${selection}`}>
                                {selection}
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function BuildButton() {
    const [copied, setCopied] = useState(false);
    const keyBuilder = useKeyBuilder();

    const copyUrl = () => {
        void navigator.clipboard.writeText(url ?? "");
        setCopied(true);
    };

    const url = useMemo(() => buildCustomKeyUrl(keyBuilder.title, keyBuilder.selections), [keyBuilder.title, keyBuilder.selections]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: reset state
    useEffect(() => setCopied(false), [url]);

    return (
        <button className="btn" disabled={!url || copied} onClick={copyUrl} type="button">
            {copied ? "Copied" : "Copy URL"}
        </button>
    );
}
