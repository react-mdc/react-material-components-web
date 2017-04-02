import * as React from "react";

import Elevation from "@react-mdc/elevation";
import { Cell, Grid } from "@react-mdc/layout-grid";

function ElevationDemo(props) {
    let {
        style,
        ...p,
    } = props;

    style = {
        padding: 16,
        minHeight: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        ...style,
    };

    return (
        <Cell.Meta span={3}>
            <Elevation {...p} style={style} />
        </Cell.Meta>
    );
}

type State = {
    mouseIn: boolean,
};

class TransitionDemo extends React.Component<{}, State> {
    public state: State = {
        mouseIn: false,
    };

    public render() {
        const zSpace = this.state.mouseIn ? 20 : 3;

        return (
            <ElevationDemo {...this.props}
                onMouseEnter={this.handleMouseEnter}
                onMouseOut={this.handleMouseOut}
                zSpace={zSpace}
                transition />
        );
    }

    private handleMouseEnter = () => {
        this.setState({
            mouseIn: true,
        });
    }

    private handleMouseOut = () => {
        this.setState({
            mouseIn: false,
        });
    }
}

function BasicDemo() {
    return (
        <Grid margin={40} gutter={40}>
            <ElevationDemo zSpace={0}>
                Elevation with 0 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={1}>
                Elevation with 1 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={2}>
                Elevation with 2 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={3}>
                Elevation with 3 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={4}>
                Elevation with 4 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={5}>
                Elevation with 5 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={6}>
                Elevation with 6 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={7}>
                Elevation with 7 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={8}>
                Elevation with 8 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={9}>
                Elevation with 9 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={10}>
                Elevation with 10 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={11}>
                Elevation with 11 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={12}>
                Elevation with 12 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={13}>
                Elevation with 13 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={14}>
                Elevation with 14 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={15}>
                Elevation with 15 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={16}>
                Elevation with 16 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={17}>
                Elevation with 17 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={18}>
                Elevation with 18 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={19}>
                Elevation with 19 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={20}>
                Elevation with 20 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={21}>
                Elevation with 21 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={22}>
                Elevation with 22 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={23}>
                Elevation with 23 z-space
            </ElevationDemo>
            <ElevationDemo zSpace={24}>
                Elevation with 24 z-space
            </ElevationDemo>
            <TransitionDemo>
                Move mouse cursor on me
            </TransitionDemo>
        </Grid>
    );
}
