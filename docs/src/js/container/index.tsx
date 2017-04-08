import * as React from "react";
import * as ReactDOM from "react-dom";

import Drawer from "./drawer";
import Toolbar from "./toolbar";

import { Children } from "app/js/common/types";

import * as styles from "./styles.css";

declare type Props = {
    children?: Children<any>,
    location: any,
};

export default class Container extends React.Component<Props, {}> {
    private shouldScrollToTop: boolean = true;
    private inner: HTMLDivElement | null;

    public render() {
        return (
            <div className={styles.layout}>
                <Toolbar />
                <div className={styles["content-layout"]}>
                    <Drawer className={styles["drawer-layout"]} />
                    <div ref={this.handleInnerLayoutRef} className={styles["inner-layout"]}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    public componentWillUpdate(nextProps: Props) {
        const { location } = this.props;
        const { location: nextLocation } = nextProps;

        if (nextLocation.action !== "PUSH") {
            return;
        }
        const href = location.pathname + location.search;
        const nextHref = nextLocation.pathname + nextLocation.search;
        if (href !== nextHref) {
            this.shouldScrollToTop = true;
        } else {
            this.shouldScrollToTop = false;
        }
    }

    public componentDidMount() {
        this.scrollInnerToTopIfNeeded();
    }

    public componentDidUpdate() {
        this.scrollInnerToTopIfNeeded();
    }

    private scrollInnerToTopIfNeeded() {
        if (this.shouldScrollToTop) {
            this.shouldScrollToTop = false;
            if (this.inner != null) {
                this.inner.scrollTop = 0;
                this.inner.scrollLeft = 0;
            }
        }
    }

    private handleInnerLayoutRef = (x) => this.inner = x;
}
