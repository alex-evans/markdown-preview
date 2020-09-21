import React from "react";
import { connect } from "react-redux";
import marked from "marked";

class Preview extends React.Component {
    render() {
        return (
            <div className="preview-box">
                <div id="preview">
                    <div dangerouslySetInnerHTML={{ __html: marked(this.props.text) }} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Preview);