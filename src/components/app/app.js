import React from 'react';
import withBookstoreService from '../hoc/with-swapi-service';


const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    
    return (
      <div> App </div>
    );
};

export default withBookstoreService()(App);
