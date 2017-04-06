import * as React from "react";

import { Elevation } from "@react-mdc/elevation";
import { Ripple } from "@react-mdc/ripple";

import { Pen } from "app/js/components/icon";

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

const boundedStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: 300,
    height: 150,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 8,
};

const unboundedStyle: React.CSSProperties = {
    width: 100,
    height: 100,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
};

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Bounded</legend>
                <Ripple.Meta>
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
            <FieldSet>
                <legend>Unbounded</legend>
                <Ripple style={unboundedStyle} unbounded>
                    <Pen />
                </Ripple>
            </FieldSet>
            <FieldSet>
                <legend>Primary</legend>
                <Ripple.Meta
                    color="primary">
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
            <FieldSet>
                <legend>Accent</legend>
                <Ripple.Meta
                    color="accent">
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
        </div>
    );
}
