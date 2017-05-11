import * as  React from "react";
import * as  ReactDOM from "react-dom";

import * as classNames from "classnames";
import * as CodeMirror from "codemirror";
import * as _ from "lodash";

function normalizeLineEndings(str: string | null | undefined) {
    if (str == null) {
        return str;
    }
    return str.replace(/\r\n|\r/g, "\n");
}

type CodemirrorType = typeof CodeMirror;

export type Props = {
    value: string,

    className?: string,
    codeMirrorInstance?: CodemirrorType,
    defaultValue?: string,
    onFocusChange?: (focused: boolean) => void,
    onChange?: (value: string, change: CodeMirror.EditorChangeLinkedList) => void,
    onScroll?: (instance: CodeMirror.Editor) => void,
    options?: object,
    path?: string,
    preserveScrollPosition?: boolean,
};

type State = {
    focused: false,
};

export default class ReactCodemirror extends React.Component<Props, State> {
    public static defaultProps = {
        preserveScrollPosition: false,
    };

    public state: State = {
        focused: false,
    };

    private codeMirror: CodeMirror.EditorFromTextArea;

    public componentWillMount() {
        this.componentWillReceiveProps = _.debounce(this.componentWillReceiveProps, 0);
    }
    public componentDidMount() {
        const textareaNode = ReactDOM.findDOMNode(this.refs.textarea) as HTMLTextAreaElement;
        if (textareaNode.tagName.toLowerCase() !== "textarea") {
            throw new Error("Editor should be a textarea");
        }
        const codeMirrorInstance = this.getCodeMirrorInstance();
        this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);
        this.codeMirror.on("change", this.codemirrorValueChanged);
        this.codeMirror.on("focus", this.focusChanged.bind(this, true));
        this.codeMirror.on("blur", this.focusChanged.bind(this, false));
        this.codeMirror.on("scroll", this.scrollChanged);
        this.codeMirror.setValue(this.props.defaultValue || this.props.value || "");
    }

    public componentWillUnmount() {
        // is there a lighter-weight way to remove the cm instance?
        if (this.codeMirror) {
            this.codeMirror.toTextArea();
        }
    }

    public componentWillReceiveProps(nextProps: Props) {
        if (this.codeMirror &&
            nextProps.value !== undefined &&
            normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
            if (this.props.preserveScrollPosition) {
                const prevScrollPosition = this.codeMirror.getScrollInfo();
                this.codeMirror.setValue(nextProps.value);
                this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
            } else {
                this.codeMirror.setValue(nextProps.value);
            }
        }
        if (typeof nextProps.options === "object") {
            for (const optionName in nextProps.options) {
                if (nextProps.options.hasOwnProperty(optionName)) {
                    this.codeMirror.setOption(optionName, nextProps.options[optionName]);
                }
            }
        }
    }
    public render() {
        const editorClassName = classNames(
            "ReactCodeMirror",
            this.state.focused ? "ReactCodeMirror--focused" : null,
            this.props.className,
        );
        return (
            <div className={editorClassName}>
                <textarea ref="textarea"
                    name={this.props.path}
                    defaultValue={this.props.value}
                    autoComplete="off" />
            </div>
        );
    }

    public focus() {
        if (this.codeMirror) {
            this.codeMirror.focus();
        }
    }

    public getCodeMirror() {
        return this.codeMirror;
    }

    private getCodeMirrorInstance(): CodemirrorType {
        return this.props.codeMirrorInstance || CodeMirror;
    }

    private focusChanged = (focused) => {
        this.setState({
            focused,
        });
        if (this.props.onFocusChange) {
            this.props.onFocusChange(focused);
        }
    }

    private scrollChanged = (cm) => {
        if (this.props.onScroll) {
            this.props.onScroll(cm.getScrollInfo());
        }
    }

    private codemirrorValueChanged = (doc: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => {
        if (this.props.onChange && change.origin !== "setValue") {
            this.props.onChange(doc.getValue(), change);
        }
    }
}
