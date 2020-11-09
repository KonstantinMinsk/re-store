import React, { Component } from 'react';

class BookStoreService extends Component {
    getBooks() {
        return [
            {
                id: 1,
                author: 'Mick',
                title: 'Start JS',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
            },
            {
                id: 2,
                author: 'Nickel',
                title: 'Start React',
                price: 45,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
            },
        ]
    }

};

export default BookStoreService;