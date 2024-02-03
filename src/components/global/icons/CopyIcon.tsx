import { DefaultIcon } from "@/components/global/icons/icon.types";

export default function CopyIcon({ className, fill, size }: DefaultIcon) {
    return (
        <svg className={className} width={size} height={size} fill={fill ?? "currentColor"} viewBox="0 0 1024 1024">
            <path d="M736 768H160V128h576z m-512-64h448V192H224z" />
            <path d="M864 896H336V736h64v96h400V320h-112v-64h176v640z" />
        </svg>
    );
}
