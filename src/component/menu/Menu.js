import React, {Component} from 'react';
import CustomLink from "./CustomLink";

class Menu extends Component {

    render() {
        const menuPosition = [
            {name: 'List of books', url: '/list'},
            {name: 'Test', url: '/test'}
        ];

        return (
            <div className="menu">
                {
                    menuPosition.map(i => {
                        return (
                            <CustomLink key={i.url} url={i.url} name={i.name}/>
                        )
                    })
                }

            </div>
        );
    }
}

export default Menu;
