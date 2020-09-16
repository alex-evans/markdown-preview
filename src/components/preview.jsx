import React from "react";
import { connect } from "react-redux";


class Preview extends React.Component {
    render() {
        return (
            <div id="preview">
                {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Preview);