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
            <main id="markdown-box" className="markdown-container">
                <Editor />
                <Preview />
            </main>
        )
    }
}

export default MarkdownBox;