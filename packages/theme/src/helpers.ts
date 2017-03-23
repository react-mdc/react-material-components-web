import { BASE_CLASS_NAME } from "./constants";
import {
    BackgroundColor,
    Color,
    OnColor,
    TextColor,
} from "./types";

export function classNameForTextColor(textColor: TextColor, onColor: OnColor): string {
    return `${BASE_CLASS_NAME}--text-${textColor}-on-${onColor}`;
}

export function classNameForColor(color: Color): string {
    return `${BASE_CLASS_NAME}--${color}`;
}

export function classNameForBackground(backgroundColor: BackgroundColor): string {
    return `${BASE_CLASS_NAME}--${backgroundColor}-bg`;
}
