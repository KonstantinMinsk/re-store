import React from 'react';
import './header.css';

import {
    Link
  } from "react-router-dom";

const Header = () => { 
    // return(
    //     <div className='header d-flex justify-content-around'>
    //         <h1 onClick={ () => {} } >
    //             <Link  to='/'>BooksStore</Link>
    //         </h1>
    //         <ul className='d-flex' nav nav-pills id='nav'>
    //             <li onClick={ () => {} } className="nav-item">
    //                 <Link to='/'>Home</Link>
    //             </li>
    //             <li onClick={ () => {} } className="nav-item">
    //                 <Link to='/books'>Books</Link>
    //             </li>
    //         </ul>
    //     </div>
    // )
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary row justify-content-center">
            <Link className="navbar-brand" to='/'>BooksStore</Link>
            {/* <h1 onClick={ () => {} }></h1> */}
            <div className="collapse navbar-collapse col-md-8">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/books' className="nav-link">Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header