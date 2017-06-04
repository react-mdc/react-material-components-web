import { SECTION_BASE_CLASS_NAME } from "./constants";
import { Alignment } from "./types";

export function classNameForSectionAlignment(alignment: Alignment): string {
    return `${SECTION_BASE_CLASS_NAME}--align-${alignment}`;
}
