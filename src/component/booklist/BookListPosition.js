import React, {Component} from 'react';
import placeholder from '../../image/image.jpg';
import axios from "axios";

class BookListPosition extends Component {

    constructor(){
        super();
        this.state = {
            response: []
        };

        this.getDetails = this.getDetails.bind(this);
        this.url = 'http://localhost:8080/api/book/getBook/';
        this.headers = {
            'headers':
                {'Authorization': 'xDD'}
        };
    }

    getDetails(id) {
        axios.get(this.url + id, this.headers)
            .then((response) => {
                this.setState({response: response.data})
            })
            .catch((error) => {alert('error: ' + error)})
    }

    determineStyle = () => {
        return this.props.index % 2 ? 'book-list-pos1' : 'book-list-pos2';
    };

    entry = () => {
        return (
            <div onClick={() => this.getDetails(this.props.elem.id)}>
                <img src={placeholder} align="left" alt="" className="image" />

                <div>
                    <div>
                        Title: <b>{this.props.elem.title}</b>
                    </div>
                    <div>
                        Autor: {this.props.elem.author}
                    </div>
                    <div>
                        Price: {this.props.elem.price} PLN
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className={this.determineStyle()}>
                {this.entry()}
            </div>
        );
    }
}

export default BookListPosition;
