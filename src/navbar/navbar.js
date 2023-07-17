
import './navbar.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';



const Navbar= () =>{

const [isMobile, setIsMobile] = useState(false);

const handleToggle = () => {
    setIsMobile(!isMobile);
};

    return(
     <header>
            <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
                <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
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