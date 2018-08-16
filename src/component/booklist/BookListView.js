import React, {Component} from 'react';
import axios from "axios";
import BookListPosition from "./BookListPosition";

class BookListView extends Component {

    constructor(){
        super();
        this.state = {
            response: []
        };

        this.getList = this.getList.bind(this);
        this.url = 'http://localhost:8080/api/book/getBooks';
        this.headers = {
            'headers':
                {'Authorization': 'xDD'}
        };

        this.getList();
    }

    read(response) {
        let resp = response.data;
        this.setState({response: resp});
        //
        // alert(JSON.stringify(this.state.response));
        // alert(JSON.stringify(resp));
    }

    getList() {
        axios.get(this.url, this.headers)
            .then((response) => {
                this.read(response)
            })
            .catch((error) => {alert('error: ' + error)})
    }

    render() {
        let response = this.state.response;
        let j = 0;

        return (
            <div className="display">
                {
                    response.map(i => {
                        return <BookListPosition
                            key={j}
                            elem={i}
                            index={j++}/>
                    })
                }
            </div>
        );
    }
}

export default BookListView;
