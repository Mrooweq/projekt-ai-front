import React, {Component} from 'react';

class CustomLink extends Component {

    render() {
        return (
            <div>
                <a href={this.props.url}>{this.props.name}</a>
            </div>
        );
    }
}

export default CustomLink;
