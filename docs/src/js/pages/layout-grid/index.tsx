import * as React from "react";

import * as classNames from "classnames";

import { Cell, Grid } from "@react-mdc/layout-grid";
import {
    Title,
    Typography,
} from "@react-mdc/typography";

import * as styles from "./styles.css";

function DemoGrid(p) {
    return (<Grid {...p} className={classNames(p.className, styles.grid)} />);
}

function DemoCell(p) {
    return (
        <Cell {...p} className={classNames(p.className, styles.cell)}>
            <Title>{p.children}</Title>
        </Cell>
    );
}

export default class TypographyExample extends React.Component<{}, {}> {
    public render() {
        return (
            <Typography className={styles.container}>
                <Title>
                    Layout Grid Examples
                </Title>
                <Title>
                    Grid of 1 column wide items
                </Title>
                <DemoGrid>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                    <DemoCell span={1}>
                        1
                    </DemoCell>
                </DemoGrid>
                <Title>
                    Grid of 4 column wide items
                </Title>
                <DemoGrid>
                    <DemoCell span={4}>
                        4
                    </DemoCell>
                    <DemoCell span={4}>
                        4
                    </DemoCell>
                    <DemoCell span={4}>
                        4
                    </DemoCell>
                </DemoGrid>
                <Title>
                    Grid of differently sized items
                </Title>
                <DemoGrid>
                    <DemoCell span={6}>
                        6
                    </DemoCell>
                    <DemoCell span={4}>
                        4
                    </DemoCell>
                    <DemoCell span={2}>
                        2
                    </DemoCell>
                </DemoGrid>
                <Title>
                    Grid of items with tweaks at different screen sizes
                </Title>
                <DemoGrid>
                    <DemoCell span={6} spanTablet={8}>
                        6 (8 Tablet)
                    </DemoCell>
                    <DemoCell span={4} spanTablet={6}>
                        4 (6 Tablet)
                    </DemoCell>
                    <DemoCell span={2} spanPhone={4}>
                        2 (4 Phone)
                    </DemoCell>
                </DemoGrid>
            </Typography>
        );
    }
}
