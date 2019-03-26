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
            data: []
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
                this.setState({
                    ...this.state,
                    data: response.data
                })
            }).catch((e) => {this.handleError(e)})
    }

    render() {
        let data = this.state.data;
        let j = 0;

        return (
            <div className="display">
                {
                    data.map(i => {
                        return <BookListPosition key={j}
                                                 elem={i}
                                                 index={j++}
                                                 onShowDetails={this.props.onShowDetails}/>
                    })
                }
            </div>
        );
    }
}

export default BookListView;
