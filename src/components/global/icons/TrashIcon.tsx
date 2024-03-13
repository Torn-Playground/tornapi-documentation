import { ClickableIcon, DefaultIcon, SolidIcon } from "@/components/global/icons/icon.types";

export default function TrashIcon({ fill, size, solid, onClick }: DefaultIcon & SolidIcon & ClickableIcon) {
    const width = size;
    const height = size;
    const fillColor = fill ?? "currentColor";

    if (solid) {
        return (
            <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor} onClick={onClick}>
                <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
            </svg>
        );
    }
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor} onClick={onClick}>
            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" />
            <path d="M9 10h2v8H9zm4 0h2v8h-2z" />
        </svg>
    );
}
