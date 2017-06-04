import * as React from "react";

import FAB from "@react-mdc/fab";
import { MaterialIcon, Pen } from "app/js/components/Icon";

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
                <FAB><FAB.Icon><Pen /></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Mini FAB</legend>
                <FAB mini><FAB.Icon><Pen /></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Plain FAB</legend>
                <FAB plain><FAB.Icon><MaterialIcon>face</MaterialIcon></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Plain mini FAB</legend>
                <FAB plain mini><FAB.Icon><MaterialIcon>face</MaterialIcon></FAB.Icon></FAB>
            </FieldSet>
        </div>
    );
}
