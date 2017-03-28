import { SURFACE_BASE_CLASS_NAME } from "./constants";
import { Color } from "./types";

export function classNameForColor(color: Color): string {
    return `${SURFACE_BASE_CLASS_NAME}--${color}`;
}
