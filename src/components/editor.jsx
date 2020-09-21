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
            <div className="editor-box">
                <textarea 
                    id="editor" 
                    onChange={this.handleChange}
                >
                    {this.props.text}
                </textarea>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps,
    { saveText }
)(Editor);