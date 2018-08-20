import React, {Component} from 'react';
import detailsIcon from '../../image/details_icon.png';
import placeholder from '../../image/placeholder.jpg';
import axios from "axios";
import DefaultHeaders from "../../constants/Constants";


class BookListPosition extends Component {

    constructor(){
        super();
        this.state = {
            response: []
        };

        this.url = 'http://localhost:8080/api/book/getBook/';
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails(id) {
        axios.get(this.url + id, DefaultHeaders)
            .then((response) => {
                this.props.clb(response.data);
            })
            .catch((error) => {alert('error: ' + error)})
    }

    determineStyle = () => {
        return this.props.index % 2 ? 'book-list-pos1' : 'book-list-pos2';
    };

    entry = () => {
        return (
            <div>
                <div className="book-list-pos-section1">
                    <img src={placeholder} align="left" alt="" className="placeholder"
                         onClick={() => this.getDetails(this.props.elem.id)}/>

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

                <div className="book-list-pos-section2">
                    <img src={detailsIcon}  alt="" className="img"
                         onClick={() => this.getDetails(this.props.elem.id)}/>
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

