import React, {Component} from 'react';

class CustomLink extends Component {

    render() {
        return (
            <div className="custom-link-wrapper">
                <a href={this.props.url} className="custom-link">{this.props.name}</a>
            </div>
        );
    }
}

export default CustomLink;
