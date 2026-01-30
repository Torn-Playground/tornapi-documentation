"use client";

import Link from "next/link";
import { type InputEvent, useEffect, useState } from "react";
import { type SearchField, type SearchResult, type SearchSection, type SearchSelection, search } from "@/components/search/search-utilities";

function ResultSelection({ section, selections }: { section: SearchSection; selections: SearchSelection[] }) {
    return (
        <div>
            <h3 className="font-bold text-lg">Selections</h3>
            <ul className="space-y-0.5">
                {selections.map((selection) => (
                    <li key={selection.name}>
                        <Link href={`/${section.name}/${selection.name}`}>{selection.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ResultFields({ section, fields }: { section: SearchSection; fields: SearchField[] }) {
    return (
        <div>
            <h3 className="font-bold text-lg">Fields</h3>
            <ul className="space-y-0.5">
                {fields.map((field) => {
                    if (field.structure) {
                        return (
                            <li key={`${field.selection}-${field.structure}-${field.name}`}>
                                <Link href={`/${section.name}/${field.selection}#${field.structure}`}>
                                    {field.name} in {field.selection}#{field.structure}
                                </Link>
                            </li>
                        );
                    } else {
                        return (
                            <li key={`${field.selection}-${field.name}`}>
                                <Link href={`/${section.name}/${field.selection}`}>
                                    {field.name} in {field.selection}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

function ResultSection({ result }: { result: SearchResult }) {
    return (
        <div className="card bg-base-300">
            <div className="card-body">
                <h2 className="card-title capitalize">
                    <Link href={`/${result.section.name}`}>{result.section.name}</Link>
                </h2>

                <section className="md:grid auto-cols-auto" style={{ gridTemplateColumns: "1fr 3rem 1fr" }}>
                    {result.fields.length ? <ResultFields section={result.section} fields={result.fields} /> : <div />}
                    <div className={`divider md:divider-horizontal ${!result.fields.length ? "hidden md:flex" : ""}`}></div>
                    {result.selections.length ? <ResultSelection section={result.section} selections={result.selections} /> : <div />}
                </section>
            </div>
        </div>
    );
}

function SearchResults({ query }: { query: string }) {
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        setResults(search(query));
    }, [query]);

    return (
        <ul className="space-y-8 mb-8">
            {results.map((result) => (
                <li key={result.section.name}>
                    <ResultSection result={result} />
                </li>
            ))}
        </ul>
    );
}

export default function Search() {
    const [query, setQuery] = useState<string>("");

    const updateQuery = (event: InputEvent<HTMLInputElement>) => {
        setQuery((event.target as HTMLInputElement).value);
    };

    return (
        <>
            <input type="text" placeholder="Search..." className="input input-bordered input-lg w-full my-4" value={query} onInput={updateQuery} />
            <SearchResults query={query} />
        </>
    );
}
