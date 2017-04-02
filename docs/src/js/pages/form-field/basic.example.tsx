import * as React from "react";

import FormField from "@react-mdc/form-field";

function FieldSet(props) {
    let { style } = props;
    style = {
        ...style,
        margin: 16,
    };
    return (
        <fieldset {...props} style={style} />
    );
}

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Form Field</legend>
                <FormField>
                    <input type="checkbox" id="input" />
                    <label htmlFor="input">Input Label</label>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Form Field Align End</legend>
                <FormField alignEnd>
                    <input type="checkbox" id="input-end" />
                    <label htmlFor="input-end">Input Label</label>
                </FormField>
            </FieldSet>
        </div>
    );
}
