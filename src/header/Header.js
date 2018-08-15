import React, {Component} from 'react';
import ApiService from "../service/ApiService";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            inputValue: ''
        };

        this.apiService = new ApiService();
    }

    updateSearchInput = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    };

    render() {
        return <div className="header">
            <div className="header-title">
                <header>
                    <h1>Bookstore app</h1>
                </header>
            </div>

            <div>
                <label>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Find a book"
                        value={this.state.inputValue}
                        onChange={evt => this.updateSearchInput(evt)}
                    />
                </label>
                <input type="submit"
                       value="Search"
                       onClick={() => {
                           this.apiService.searchBook();
                       }}/>
            </div>

        </div>;
    }
}

export default Header;
