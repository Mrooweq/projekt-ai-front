import React, {Component} from 'react';
import {Route} from "react-router-dom";
import BookListView from "../booklist/BookListView";
import BookPosDetails from "../booklist/BookPosDetails";

class Display extends Component {

    constructor(){
        super();
        this.state = {
            showList: true,
            showDetails: false,
            details: {},
        };
    }

    onShowDetails = (data) => {
        this.setState({
            ...this.state,
            showList: false,
            showDetails: true,
            details: data,
        });
    };

    onShowList = () => {
        this.setState({
            ...this.state,
            showList: true,
            showDetails: false,
            details: null,
        });
    };

    render() {
        const showDisplay = () => {
            const {showList, showDetails} = this.state;

            if(showList){
                return (
                    <BookListView onShowDetails={this.onShowDetails}/>
                );
            }
            else if(showDetails){
                return (
                    <BookPosDetails onShowList={this.onShowList} data={this.state.details}/>
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
