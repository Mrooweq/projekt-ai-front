import React from 'react';
import axios from 'axios'

class ApiService  {

    constructor(){
        this.searchBook = this.searchBook.bind(this);
        this.url = 'https://api.github.com/users/maecapozzi';
    }

    read(response) {
        alert(response.data.login);
    }

    searchBook() {
        var headers = {
            'headers':
                {'Authorization': 'xDD'}
        };

        axios.get(this.url, headers)
            .then((response) => {
                this.read(response)
            })
            .catch((error) => {

            })
    }
}

export default ApiService;
