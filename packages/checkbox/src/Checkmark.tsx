import * as React from "react";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__checkmark`;
export const PATH_CLASS_NAME = `${CLASS_NAME}__path`;

/**
 * Checkbox checkmark svg component
 */
export default class Checkmark extends React.Component<{}, {}> {
    public render() {
        return (
            <svg version="1.1"
                className={CLASS_NAME}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                xmlSpace="preserve">
                <path className={PATH_CLASS_NAME}
                    fill="none"
                    stroke="white"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
        );
    }
}
