"use client";

import InfoIcon from "@/components/global/icons/InfoIcon";
import { useEffect, useState } from "react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const ALERT_STORAGE_KEY = "tornapi-community-alert";

export default function CommunityAlert() {
    const [closed, setClosed] = useState<boolean>();

    const close = () => {
        setClosed(true);
        localStorage.setItem(ALERT_STORAGE_KEY, "closed");
    };

    useEffect(() => {
        setClosed(localStorage.getItem(ALERT_STORAGE_KEY) === "closed");
    }, []);

    if (closed !== false) {
        return null;
    }

    return (
        <div className="fixed bottom-10 z-40 flex items-center w-full px-3 absolute">
            <div className="alert alert-info shadow-lg">
                <div>
                    <InfoIcon size={24} />
                    <span>We are not affiliated to Torn. Make sure to not report bugs here to them.</span>
                </div>
                <div className="cursor-pointer" onClick={close}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
}
