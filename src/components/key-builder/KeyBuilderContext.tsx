import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react";
import { sections } from "@/api-schema/data";
import { SectionType } from "@/api-schema/schema.types";

interface KeyBuilderState {
    title: string;
    selections: Record<SectionType, string[]>;
}

const defaultState: KeyBuilderState = {
    title: "",
    selections: sections.reduce((acc, section) => ({ ...acc, [section]: [] }), {} as Record<SectionType, string[]>),
};

const KeyBuilderContext = createContext<KeyBuilderState>(defaultState);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const KeyBuilderDispatchContext = createContext<Dispatch<KeyBuilderAction>>(() => {});

export enum KeyBuilderActionType {
    SET_TITLE = "SET_TITLE",
    TOGGLE_SELECTION = "TOGGLE_SELECTION",
}

type KeyBuilderAction =
    | { type: KeyBuilderActionType.SET_TITLE; title: string }
    | { type: KeyBuilderActionType.TOGGLE_SELECTION; section: SectionType; selection: string };

function keyBuilderReducer(state: KeyBuilderState, action: KeyBuilderAction): KeyBuilderState {
    switch (action.type) {
        case KeyBuilderActionType.SET_TITLE: {
            return {
                ...state,
                title: action.title,
            };
        }
        case KeyBuilderActionType.TOGGLE_SELECTION: {
            let newSelections = state.selections[action.section];

            if (newSelections.includes(action.selection)) newSelections = newSelections.filter((selection) => selection !== action.selection);
            else newSelections = [...newSelections, action.selection];

            return {
                ...state,
                selections: { ...state.selections, [action.section]: newSelections },
            };
        }
    }
}

export function KeyBuilderProvider({ children }: PropsWithChildren) {
    const [calls, dispatch] = useReducer(keyBuilderReducer, defaultState);

    return (
        <KeyBuilderContext.Provider value={calls}>
            <KeyBuilderDispatchContext.Provider value={dispatch}>{children}</KeyBuilderDispatchContext.Provider>
        </KeyBuilderContext.Provider>
    );
}

export function useKeyBuilder() {
    return useContext(KeyBuilderContext);
}

export function useKeyBuilderDispatch() {
    return useContext(KeyBuilderDispatchContext);
}
