import { DefaultIcon } from "@/components/global/icons/icon.types";

export default function MenuIcon(props: DefaultIcon) {
    const width = "size" in props ? props.size : props.width;
    const height = "size" in props ? props.size : props.height;
    const fillColor = props.fill ?? "currentColor";

    return (
        <svg viewBox="0,0,256,256" width={width} height={height} className={props.className}>
            <g fill={fillColor}>
                <g transform="scale(10.66667,10.66667)">
                    <path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path>
                </g>
            </g>
        </svg>
    );
}
