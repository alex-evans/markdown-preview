import React from "react";
import Editor from "./editor";
import Preview from "./preview";


class MarkdownBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div id="markdown-box">
                <Editor />
                <Preview />
            </div>
        )
    }
}

export default MarkdownBox;