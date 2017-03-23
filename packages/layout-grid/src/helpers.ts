import { CELL_BASE_CLASS_NAME } from "./constants";
import { Alignment, GridNumber, Screen } from "./types";

export function classNameForCellSpan (span: GridNumber, screen: Screen | null = null): string {
    const className = `${CELL_BASE_CLASS_NAME}--span-${span}`;
    if (screen != null) {
        return `${className}-${screen}`;
    } else {
        return className;
    }
}

export function classNameForCellOrder (order: GridNumber): string {
    return `${CELL_BASE_CLASS_NAME}--order-${order}`;
}

export function classNameForCellAlignment (alignment: Alignment): string {
    return `${CELL_BASE_CLASS_NAME}--align-${alignment}`;
}
