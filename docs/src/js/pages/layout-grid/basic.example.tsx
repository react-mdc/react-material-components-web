import * as React from "react";

import {
    Cell,
    Grid,
} from "@react-mdc/layout-grid";
import {
    Title,
    Typography,
} from "@react-mdc/typography";

function DemoGrid(p) {
    let { style, ...props } = p;
    style = {
        background: "#9e9e9e",
        ...style,
    };
    return (<Grid {...props} style={style} />);
}

function DemoCell(p) {
    let { style, ...props } = p;
    style = {
        background: "#f5f5f5",
        color: "#212121",
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        textAlign: "center",
        ...style,
    };

    return (
        <Cell {...props} style={style}>
            <Title>{props.children}</Title>
        </Cell>
    );
}

function BasicDemo() {
    return (
        <Typography>
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
