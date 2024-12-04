import { createContext, Dispatch, PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { CallResponse } from "@/components/try-it/try-it";

interface CallState {
    key: string;
    url: string;
    share: string;
    responses: CallResponse[];
}

const defaultState: CallState = {
    key: "",
    url: "",
    share: "",
    responses: [],
};

const CallContext = createContext<CallState>(defaultState);
const CallDispatchContext = createContext<Dispatch<CallAction>>(() => {});

export enum CallActionType {
    SET_KEY = "SET_KEY",
    SET_URL = "SET_URL",
    SET_SHARE = "SET_SHARE",
    EXECUTE_CALL = "EXECUTE_CALL",
}

type CallAction =
    | { type: CallActionType.SET_KEY; key: string }
    | { type: CallActionType.SET_URL; url: string }
    | { type: CallActionType.SET_SHARE; share: string }
    | { type: CallActionType.EXECUTE_CALL; url: string; data: unknown; timestamp: number };

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
        case CallActionType.SET_SHARE: {
            return {
                ...state,
                share: action.share,
            };
        }
        case CallActionType.EXECUTE_CALL: {
            return {
                ...state,
                responses: [...state.responses, { url: action.url, timestamp: action.timestamp, data: action.data }],
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
        const key = localStorage.getItem(API_STORAGE_KEY) ?? "";

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
