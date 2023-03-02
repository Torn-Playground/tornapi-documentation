import { createContext, Dispatch, PropsWithChildren, useContext, useEffect, useReducer } from "react";

type CallState = {
    key: string;
    url: string;
};

const defaultState: CallState = {
    key: "",
    url: "",
};

const CallContext = createContext<CallState>(defaultState);
const CallDispatchContext = createContext<Dispatch<CallAction>>(() => {});

export enum CallActionType {
    SET_KEY = "SET_KEY",
    SET_URL = "SET_URL",
}

type CallAction = { type: CallActionType.SET_KEY; key: string } | { type: CallActionType.SET_URL; url: string };

function callsReducer(state: CallState, action: CallAction): CallState {
    switch (action.type) {
        case CallActionType.SET_KEY: {
            return {
                ...state,
                key: action.key,
            };
        }
        case CallActionType.SET_URL: {
            return {
                ...state,
                url: action.url,
            };
        }
        default: {
            throw Error(`Unknown action.`, action);
        }
    }
}

export const API_STORAGE_KEY = "tornapi-apikey";

export function CallProvider({ children }: PropsWithChildren) {
    const [calls, dispatch] = useReducer(callsReducer, defaultState);

    useEffect(() => {
        // setKey(localStorage.getItem(STORAGE_KEY) ?? "");
        const key = localStorage.getItem(API_STORAGE_KEY) ?? "x";

        dispatch({ type: CallActionType.SET_KEY, key });
    }, []);

    return (
        <CallContext.Provider value={calls}>
            <CallDispatchContext.Provider value={dispatch}>{children}</CallDispatchContext.Provider>
        </CallContext.Provider>
    );
}

export function useCalls() {
    return useContext(CallContext);
}

export function useCallsDispatch() {
    return useContext(CallDispatchContext);
}
