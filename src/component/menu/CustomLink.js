import React, {Component} from 'react';
import { Link } from "react-router-dom";

class CustomLink extends Component {

    render() {
        return (
            <div className="custom-link-wrapper">
                <Link to={this.props.url}>{this.props.name}</Link>
            </div>
        );
    }
}

export default CustomLink;
