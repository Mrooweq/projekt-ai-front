import React from 'react';
import axios from "axios";
import BookListPosition from "./BookListPosition";
import Constants from "../../constants/Constants";
import Mocks from "../../constants/Mocks";
import CommonComponent from "../CommonComponent";

class BookListView extends CommonComponent {

    constructor(){
        super();

        this.state = {
            ...this.state,
            response: []
        };

        this.url = Constants.BASE_API + '/book/getBooks';

        if(Constants.ifMock){
            this.setMock(this.url, Mocks.books);
        }

        this.getList = this.getList.bind(this);
        this.getList();
    }

    getList() {
        axios.get(this.url, Constants.headers)
            .then((response) => {
                this.setState({response: response.data})
            })
            .catch((e) => {this.handleError(e)})
    }

    render() {
        let response = this.state.response;
        let j = 0;

        return (
            <div className="display">
                {
                    response.map(i => {
                        return <BookListPosition key={j}
                                                 elem={i}
                                                 index={j++}
                                                 clb={this.props.clb}/>
                    })
                }
            </div>
        );
    }
}

export default BookListView;
