import React, {Component} from 'react';

class BookListPosition extends Component {

    determineStyle = () => {
        return this.props.index % 2 ? 'book-list-pos1' : 'book-list-pos2';
    };

    entry = () => {
        return (
            <div>
                <img src="http://www.kurshtml.edu.pl/pliki/obrazek.jpg"
                     align="left"
                     alt="" />

                <div>
                    <div>
                        Title: <b>{this.props.elem.title}</b>
                    </div>
                    <div>
                        Autor: {this.props.elem.author}
                    </div>
                    <div>
                        Price: {this.props.elem.price} PLN
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className={this.determineStyle()}>
                {this.entry()}
            </div>
        );

    }
}

export default BookListPosition;
