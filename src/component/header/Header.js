import React, {Component} from 'react';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            searchValue: ''
        };
    }

    updateSearchInput = (evt) => {
        this.setState({
            searchValue: evt.target.value
        });
    };

    render() {
        return (
            <div className="header">
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
                            value={this.state.searchValue}
                            onChange={evt => this.updateSearchInput(evt)}
                        />
                    </label>
                    <input type="submit"
                           value="Search"
                           onClick={() => {
                               // this.searchBook(this.state.searchValue);
                           }}/>
                </div>
            </div>
        )
    }
}

export default Header;
