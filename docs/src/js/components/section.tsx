import * as React from "react";

import * as classNames from "classnames";

import { Elevation } from "@react-mdc/elevation";
import {
    Cell,
    Grid,
} from "@react-mdc/layout-grid";
import { Subheading2, Title, Typography } from "@react-mdc/typography";

import * as styles from "./styles.css";

/**
 * Section divider for each section
 */
export class Section extends React.Component<{
    title?: string,
    className?: string,
    children?: React.ReactChild,
}, {}> {
    public render() {
        const {
            title,
            className,
            children,
            ...props,
        } = this.props;
        let titleEl: React.ReactElement<any> | null = null;
        if (title != null) {
            titleEl = (
                <Cell.Meta span={12}>
                    <Typography>
                        <Title {...props}>
                            {title}
                        </Title>
                    </Typography>
                </Cell.Meta>
            );
        }
        return (
            <Grid className={classNames(styles.section, className)} {...props}>
                {titleEl}
                {children}
            </Grid >
        );
    }
}

/**
 * Section Title
 */
export class SectionTitle extends React.Component<{
    children?: React.ReactChild,
}, {}> {
    public render() {
        const {
            children,
            ...props,
        } = this.props;
        return (
            <Typography.Meta>
                <Cell span={12} {...props}>
                    <Title>
                        {children}
                    </Title>
                </Cell>
            </Typography.Meta>
        );
    }
}

type SectionPanelProps = {
    title: string,
    children?: React.ReactChild,
    [key: string]: any,
};

/**
 * Section panel
 */
export function SectionPanel(props: SectionPanelProps) {
    const {
        title,
        children,
        ...p,
    } = props;
    return (
        <Typography.Meta>
            <Cell {...p}>
                <Subheading2>
                    {title}
                </Subheading2>
                {children}
            </Cell>
        </Typography.Meta>
    );
}

/**
 * Section Subtitle
 */
export class SectionSubtitle extends React.Component<{
    children?: React.ReactChild,
}, {}> {
    public render() {
        const {
            children,
            ...props,
        } = this.props;
        return (
            <Typography.Meta>
                <Cell span={12} {...props}>
                    <Subheading2>
                        {children}
                    </Subheading2>
                </Cell>
            </Typography.Meta>
        );
    }
}

/**
 * Demo
 */
export class Demo extends React.Component<{ children?: React.ReactChild }, {}> {
    public render() {
        const {
            children,
            ...props,
        } = this.props;
        return (
            <Elevation.Meta zSpace={4}>
                <Cell className={styles.demo} span={12} {...props}>
                    <Typography className={styles["demo-title"]}>
                        <SectionSubtitle>
                            Demo
                        </SectionSubtitle>
                    </Typography>
                    <hr />
                    <div className={styles["demo-content"]}>
                        {children}
                    </div>
                </Cell>
            </Elevation.Meta>
        );
    }
}
