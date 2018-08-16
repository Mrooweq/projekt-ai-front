import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookListView from "../booklist/BookListView";

class Display extends Component {

    bookListView() {
        return (
            <BookListView/>
        );
    }

    render() {
        return (
            <Router>
                <div className="display">
                    <Route exact path="/" component={() => {
                        return (
                            <div />
                        );
                    }}/>
                    <Route path="/list" component={this.bookListView}/>
                </div>
            </Router>
        );
    }
}

export default Display;
