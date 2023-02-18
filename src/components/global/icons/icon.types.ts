type SizableIcon = { height: number; width: number } | { size: number };
type ColoredIcon = { fill?: string };
type ClassedIcon = { className?: string };

export type DefaultIcon = SizableIcon & ColoredIcon & ClassedIcon;

export type FilledIcon = { filled?: boolean };
export type SolidIcon = { solid?: boolean };
