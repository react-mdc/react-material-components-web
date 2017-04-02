import * as React from "react";

import { Fab, Icon } from "@react-mdc/fab";
import { MaterialIcon, Pen } from "app/js/components/icon";

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
                <legend>FAB</legend>
                <Fab><Icon><Pen /></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Mini FAB</legend>
                <Fab mini><Icon><Pen /></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Plain FAB</legend>
                <Fab plain><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Plain mini FAB</legend>
                <Fab plain mini><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
            </FieldSet>
        </div>
    );
}
