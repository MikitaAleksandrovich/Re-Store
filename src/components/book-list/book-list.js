import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { WithBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';


class BookList extends Component {

    componentDidMount() {
        // 1. Recieve data
        const { bookstoreService, 
                booksLoaded, 
                booksRequested, 
                booksError } = this.props;

        booksRequested();

        bookstoreService.getBooks()
            .then((data) => {
                // 2. Dispatch action to store
                booksLoaded(data)
            })
            .catch((err) => 
                // 2. Dispatch action(with error) to store
                booksError(err));
    };


    render() {

        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
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
        loading: state.loading,
        error: state.error,
    }; 
};

const mapDispatchToProps = {
    booksLoaded, 
    booksRequested,
    booksError,
};


export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));

