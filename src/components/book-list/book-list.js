import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { booksLoaded } from '../../actions/actions';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-swapi-service';
import './book-list.css';

// class BookList extends Component {
    
//     componentDidMount() {
//         const { bookstoreService } = this.props;
//         const data = bookstoreService.getBooks();
//         this.props.booksLoaded(data);
//     }

//     render() {
//         const { books } = this.props;
//         return (
//             <ul>
//                 {
//                     books.map((book) => {
//                         return (
//                             <li key={book.id}>
//                                 <BookListItem book={book} />
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         )
//     }
// };


const BookList = ({ books, booksLoaded, bookstoreService}) => { 
        useEffect(() => {
            const data = bookstoreService.getBooks();
            booksLoaded(data);
        }, [])
        
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        )
};

const mapStateToProps = ({ books }) => {
    return {
        books
    }
}; 

// const mapDispatchToProps = (dispatch) => {
//     return{
//         booksLoaded: (newBooks) => {
//         dispatch ({
//           type: 'BOOKS_LOADED',
//           payload: newBooks
//         });
//         }
//     } 
// };

// get booksLoaded from actions
const mapDispatchToProps = {
    booksLoaded
};

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
//     );

export default compose(
                    withBookstoreService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(BookList);    