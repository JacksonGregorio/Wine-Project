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
                    <li><Link to='/'><a href="">Vinhos</a></Link></li>
                    <li><Link to='/Analise'><a href="">Analises</a></Link></li>
                    <li><Link to='/Professor'><a href="">Professor</a></Link></li>
                </ul>
            </nav>
     </header>
    );

}

export default Navbar;