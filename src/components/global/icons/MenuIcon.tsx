import type { DefaultIcon } from "@/components/global/icons/icon.types";

export default function MenuIcon({ className, fill, size }: DefaultIcon) {
    const width = size;
    const height = size;
    const fillColor = fill ?? "currentColor";

    return (
        <svg viewBox="0,0,256,256" width={width} height={height} className={className}>
            <title>Menu</title>
            <g fill={fillColor}>
                <g transform="scale(10.66667,10.66667)">
                    <path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z" />
                </g>
            </g>
        </svg>
    );
}
