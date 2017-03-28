
import * as React from "react";

import { Elevation } from "@react-mdc/elevation";
import { Ripple } from "@react-mdc/ripple";

import { Pen } from "app/js/components/icon";
import PageTitle from "app/js/components/page-title";
import { Section, SectionTitle } from "app/js/components/section";

import * as styles from "./styles.css";

export default class RippleExample extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <PageTitle>
                    Ripple Examples
                </PageTitle>
                <Section>
                    <SectionTitle>
                        Bounded
                    </SectionTitle>
                    <Ripple.Meta>
                        <Elevation
                            className={styles.bounded}
                            zSpace={2}>
                            Interact with me
                        </Elevation>
                    </Ripple.Meta>
                </Section>
                <Section>
                    <SectionTitle>
                        Unbounded
                    </SectionTitle>
                    <Ripple className={styles.unbounded} unbounded>
                        <Pen />
                    </Ripple>
                </Section>
                <Section>
                    <SectionTitle>
                        Primary
                    </SectionTitle>
                    <Ripple.Meta
                        color="primary">
                        <Elevation
                            className={styles.bounded}
                            zSpace={2}>
                            Interact with me
                        </Elevation>
                    </Ripple.Meta>
                </Section>
                <Section>
                    <SectionTitle>
                        Accent
                    </SectionTitle>
                    <Ripple.Meta
                        color="accent">
                        <Elevation
                            className={styles.bounded}
                            zSpace={2}>
                            Interact with me
                        </Elevation>
                    </Ripple.Meta>
                </Section>
            </div>
        );
    }
}
