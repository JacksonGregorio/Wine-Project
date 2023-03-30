import React from "react";
import './navbar.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Navbar(){

    return(
     <header>
            <nav>
                <ul>
                    <li><Link to='/Mais'><a href="">Mais</a></Link></li>
                    <li><Link to='/'><a href="">Home</a></Link></li>
                    <li><Link to='/Vitrine'><a href="">Vinhos</a></Link></li>
                </ul>
            </nav>
     </header>
    );

}

export default Navbar;