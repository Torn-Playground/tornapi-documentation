import type { DefaultIcon } from "@/components/global/icons/icon.types";

export default function ExternalLinkIcon({ className, fill, size }: DefaultIcon) {
    const width = size;
    const height = size;
    const fillColor = fill ?? "currentColor";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={className}>
            <title>External Link</title>
            <path fill={fillColor} d="M14 3a1 1 0 1 0 0 2h3.59l-8.3 8.29a1 1 0 1 0 1.42 1.42L19 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1z" />
            <path fill={fillColor} d="M5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V7h5a1 1 0 1 0 0-2z" />
        </svg>
    );
}
