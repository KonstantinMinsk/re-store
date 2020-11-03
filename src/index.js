import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import store from './store';
import ErrorBoundary from './components/error-boudary/error-boundary';
import BookStoreService from './services/bookstore-server';
import { BookstoreServiceProvider } from './components/bookstore-server-context/bookstore-server-context';

import './index.css';

const bookstoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
