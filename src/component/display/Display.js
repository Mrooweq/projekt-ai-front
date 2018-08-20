import React, {Component} from 'react';
import {Route} from "react-router-dom";
import BookListView from "../booklist/BookListView";

class Display extends Component {

    bookListView() {
        return (
            <BookListView/>
        );
    }

    render() {
        return (
            <div className="display">
                <Route exact path="/" component={() => {
                    return (
                        <div />
                    );
                }}/>
                <Route path="/list" component={this.bookListView}/>
            </div>
        );
    }
}

export default Display;
