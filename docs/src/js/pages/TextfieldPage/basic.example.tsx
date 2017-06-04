import * as React from "react";

import FormField from "@react-mdc/form-field";
import TextField from "@react-mdc/textfield";

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
                <legend>Basic</legend>
                <FormField style={{ margin: 16 }}>
                    <TextField>
                        <TextField.Input id="textfield1" autoComplete="email" />
                        <TextField.Label htmlFor="textfield1">
                            Email Address
                        </TextField.Label>
                    </TextField>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Multiline</legend>
                <FormField style={{ margin: 16 }}>
                    <TextField multiline>
                        <TextField.Input.Meta>
                            <textarea
                                id="textfield2"
                                style={{ width: "100%" }}
                                rows={8}
                                cols={40} />
                        </TextField.Input.Meta>
                        <TextField.Label htmlFor="textfield2">
                            Comment
                        </TextField.Label>
                    </TextField>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Full Width</legend>
                <TextField.Simple
                    inputId="textfield3"
                    placeholder="Title"
                    fullwidth />
                <TextField fullwidth multiline>
                    <TextField.Input.Meta>
                        <textarea
                            rows={8}
                            cols={40}
                            id="textfield4"
                            placeholder="Content" />
                    </TextField.Input.Meta>
                </TextField>
            </FieldSet>
        </div>
    );
}
