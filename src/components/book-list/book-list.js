import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import Spinner from '../spinner';

import './book-list.css';


class BookList extends Component {

  
    componentDidMount() {
        // 1. Recieve data
        const { bookstoreService, booksLoaded, booksRequested } = this.props;

        booksRequested();

        bookstoreService.getBooks()
            .then((data) => {
                // 2. Dispatch action to store
                booksLoaded(data)
            });
    };


    render() {

        const { books, loading } = this.props;

        if(loading) {
            return <Spinner 
            />
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}> <BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        );
    };
};


const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading
    }; 
};

const mapDispatchToProps = {
    booksLoaded, 
    booksRequested
};


export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));

