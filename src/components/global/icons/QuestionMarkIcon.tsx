import type { DefaultIcon } from "@/components/global/icons/icon.types";

export default function QuestionMarkIcon({ fill, size }: DefaultIcon) {
    const width = size;
    const height = size;
    const fillColor = fill ?? "currentColor";

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor}>
            <title>Question Mark</title>
            <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z" />
        </svg>
    );
}
