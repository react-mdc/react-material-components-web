import * as React from "react";

import FormField from "@react-mdc/form-field";
import {
    Container as TextFieldContainer,
    default as Textfield,
    Input,
    Label,
} from "@react-mdc/textfield";

import PageTitle from "app/js/components/page-title";
import { Section, SectionTitle } from "app/js/components/section";

import * as styles from "./styles.css";

export default class TextfieldExample extends React.Component<{}, {}> {
    public render() {
        return (
            <div className={styles.layout}>
                <PageTitle>
                    Textfield Examples
                </PageTitle>
                <Section>
                    <SectionTitle>Basic</SectionTitle>
                    <FormField className={styles["form-field"]}>
                        <TextFieldContainer>
                            <Input id="textfield1" autoComplete="email" />
                            <Label htmlFor="textfield1">
                                Email Address
                            </Label>
                        </TextFieldContainer>
                    </FormField>
                </Section>
                <Section>
                    <SectionTitle>Multiline</SectionTitle>
                    <FormField className={styles["form-field"]}>
                        <TextFieldContainer multiline>
                            <Input.Meta>
                                <textarea
                                    id="textfield2"
                                    className={styles.textarea}
                                    rows={8}
                                    cols={40} />
                            </Input.Meta>
                            <Label htmlFor="textfield2">
                                Comment
                            </Label>
                        </TextFieldContainer>
                    </FormField>
                </Section>
                <Section>
                    <SectionTitle>Full Width</SectionTitle>
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
                </Section>
            </div>
        );
    }
}
