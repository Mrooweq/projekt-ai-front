import {createStore} from "redux";

const Reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
};

const Store = createStore(Reducer);

export default Store;