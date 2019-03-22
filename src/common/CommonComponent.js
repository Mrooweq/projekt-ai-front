import {Component} from 'react';
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

class CommonComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            mockAdapter: new MockAdapter(axios)
        };
    }

    setMock(url, data) {
        this.state.mockAdapter
            .onGet(url)
            .reply(200, data);
    }
}

export default CommonComponent;
