import * as React from "react";

import { FormField } from "@react-mdc/form-field";
import {
    Container as TextFieldContainer,
    default as Textfield,
    Input,
    Label,
} from "@react-mdc/textfield";

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
                    <TextFieldContainer>
                        <Input id="textfield1" autoComplete="email" />
                        <Label htmlFor="textfield1">
                            Email Address
                        </Label>
                    </TextFieldContainer>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Multiline</legend>
                <FormField style={{ margin: 16 }}>
                    <TextFieldContainer multiline>
                        <Input.Meta>
                            <textarea
                                id="textfield2"
                                style={{ width: "100%" }}
                                rows={8}
                                cols={40} />
                        </Input.Meta>
                        <Label htmlFor="textfield2">
                            Comment
                        </Label>
                    </TextFieldContainer>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Full Width</legend>
                <Textfield
                    inputId="textfield3"
                    placeholder="Title"
                    fullwidth />
                <TextFieldContainer fullwidth multiline>
                    <Input.Meta>
                        <textarea
                            rows={8}
                            cols={40}
                            id="textfield4"
                            placeholder="Content" />
                    </Input.Meta>
                </TextFieldContainer>
            </FieldSet>
        </div>
    );
}
