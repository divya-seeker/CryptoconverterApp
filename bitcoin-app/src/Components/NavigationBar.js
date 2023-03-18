import React from 'react'
import './Nav.css'
import About from './About';
import Contact from './Contact.js';
import Converter from './Converter'
import Notes from './Buy';
import Cart from './Cart'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function NavigationBar() {
    return (
        <>
        <Router>
            <div >
            <nav className="Navi">
             <ul>
               <li>
                 <Link style={{textDecoration: 'none'}} to="/">Home</Link>
               </li>
               <li>
                 <Link style={{textDecoration: 'none'}} to="/about">About Us</Link>
               </li>
               <li>
                 <Link style={{textDecoration: 'none'}} to="/contact">Contact Us</Link>
               </li>
               <li>
                 <Link style={{textDecoration: 'none'}} to="/Buy">AddNotes</Link>
               </li>
               <li>
                 <Link style={{textDecoration: 'none'}} to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
               </li>
             </ul>
            </nav>
            <Routes>
                  <Route exact path='/' element={< Converter />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
                  <Route exact path='/buy' element={< Notes />}></Route>
                  <Route exact path='/Cart' element={< Cart />}></Route>
           </Routes>
           </div>
        </Router>
        </>
    );
}

export default NavigationBar