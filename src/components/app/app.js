import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import { BooksPage, HomePage } from '../pages';
import ShopHeader from '../shop-header.js/shop-header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import './app.css'

const App = () => {
    return (
        <main role="main" className="container">
            <Header />
            <ShopHeader numItems={5} total={55}/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/books' component={BooksPage} />
            </Switch>
            <ShoppingCartTable />
        </main>
    );
};

export default App;
