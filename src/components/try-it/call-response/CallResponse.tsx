"use client";

import { useTheme } from "next-themes";
import { useCalls } from "@/components/try-it/CallContext";
import CopyButton from "@/components/try-it/copy-button/CopyButton";
import { THEME_DARK, THEME_LIGHT } from "@/components/global/theme-selector/theme-utilities";

import JsonView from '@uiw/react-json-view';
import { nordTheme } from '@uiw/react-json-view/nord';
import { githubLightTheme } from '@uiw/react-json-view/githubLight';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';

export default function CallResponse() {
    const calls = useCalls();
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <h3 className="text-xl font-bold capitalize mb-2">Responses</h3>

            {calls.responses.length ? (
                <div className="rounded-lg border-base-300 border-4">
                    {calls.responses
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map((response) => (
                            <div key={response.timestamp} className="collapse collapse-arrow odd:bg-base-300 even:bg-base-200">
                                <input type="checkbox" id={`response-${response.timestamp}`} defaultChecked />
                                <label className="collapse-title text-xl font-medium break-all break-words" htmlFor={`response-${response.timestamp}`}>
                                    {response.url}
                                </label>
                                <div className="collapse-content prose max-w-none text-l">
                                    <CopyButton></CopyButton>
                                    <JsonView value={response.data} style={{...(theme === THEME_DARK ? nordTheme : githubLightTheme), ...{ "font-size": "1rem" }}} indentWidth={25} >
                                        <JsonView.Arrow>
                                            <TriangleSolidArrow />
                                        </JsonView.Arrow>
                                    </JsonView>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                "You haven't made any calls yet."
            )}
        </div>
    );
}
