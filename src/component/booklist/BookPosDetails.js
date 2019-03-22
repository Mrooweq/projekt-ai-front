import React from 'react';
import placeholder from "../../image/placeholder.jpg";
import CommonComponent from "../../common/CommonComponent";


class BookPosDetails extends CommonComponent {

    constructor(){
        super();

        this.state = {
            ...this.state,
            response: []
        };
    }


    render() {
        return (
            <div>
                <img src={placeholder}  alt="" className="placeholder"/>

                <div>
                    <div>
                        <b>Title:</b> <i>{this.props.data.title}</i>
                    </div>
                    <div>
                        <b>Autor:</b> {this.props.data.author}
                    </div>
                    <div>
                        <b>Category:</b> {this.props.data.category}
                    </div>
                    <div>
                        <b>ISBN:</b> {this.props.data.isbn}
                    </div>
                    <div>
                        <b>Publisher:</b> {this.props.data.publisher}
                    </div>
                    <div>
                        <b>Year of publish:</b> {this.props.data.yearOfPublish}
                    </div>
                    <div>
                        <b>Place of publish:</b> {this.props.data.placeOfPublish}
                    </div>
                    <div>
                        <b>Type of cover:</b> {this.props.data.typeOfCover}
                    </div>
                    <div>
                        <b>Description:</b> {this.props.data.description}
                    </div>
                    <div>
                        <b>Price:</b> {this.props.data.price} PLN
                    </div>
                </div>

            </div>
        );
    }
}

export default BookPosDetails;
