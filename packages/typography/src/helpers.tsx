import { BASE_CLASS_NAME } from "./constants";
import { TextStyle } from "./types";

export function classNameForTextStyle(style: TextStyle): string {
    return `${BASE_CLASS_NAME}--${style}`;
}
