import React, {Component} from 'react';


class Menu extends Component {

    render() {
        const menuPosition = [
            {name: 'Buy a book', url: 'url'},
            {name: 'Usuń konto', url: 'delete'}
        ];

        return (
            <div className="menu">
                {
                    menuPosition.map(i => {
                        return (
                            <div>
                                <a href={i.url}>{i.name}</a>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default Menu;
