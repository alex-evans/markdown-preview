import React from "react";
import { connect } from "react-redux";
import { saveText } from "../redux/actions";


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.saveText(event.target.value)
    }

    render() {
        return (
            <div id="editor-box">
                <textarea 
                    id="editor" 
                    rows="20" 
                    cols="50"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default connect(
    null,
    { saveText }
)(Editor);