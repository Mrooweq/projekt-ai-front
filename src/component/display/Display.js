import React, {Component} from 'react';
import {Route} from "react-router-dom";
import BookListView from "../booklist/BookListView";
import BookPosDetails from "../booklist/BookPosDetails";

class Display extends Component {

    constructor(){
        super();
        this.state = {
            id: null
        };
    }

    render() {

        const showDetails = (response) => {
            this.setState({response: response});
        };

        const showDisplay = () => {

            if(this.state.response !== undefined){
                return (
                    <BookPosDetails data={this.state.response}/>
                );
            }
            else {
                return (
                    <BookListView clb={showDetails}/>
                );
            }
        };

        return (
            <div className="display">
                <Route exact path="/" component={() => {
                    return (
                        <div />
                    );
                }}/>
                <Route path="/list" component={showDisplay}/>
            </div>
        );
    }
}

export default Display;
