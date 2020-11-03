import React, { Component } from 'react';

class BookStoreService extends Component {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Start JS'
            },
            {
                id: 2,
                title: 'Start React'
            },
        ]
    }

};

export default BookStoreService;