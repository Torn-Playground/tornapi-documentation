interface SizableIcon {
    size: number;
}
interface ColoredIcon {
    fill?: string;
}
interface ClassedIcon {
    className?: string;
}

export type DefaultIcon = SizableIcon & ColoredIcon & ClassedIcon;

export interface FilledIcon {
    filled?: boolean;
}
export interface SolidIcon {
    solid?: boolean;
}

export interface StrokeIcon {
    stroke?: number;
}

export interface ClickableIcon {
    onClick?: () => void;
}
