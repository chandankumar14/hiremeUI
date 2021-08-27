import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Portfolio/portfolio.css';

const Plumber =() =>{
    return(
        <>
        <div className="header">
            <nav>
                <h1>Portfo<span>lio</span></h1>
                <ul>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Services</NavLink></li>
                    <li><NavLink to="#">Skils</NavLink></li>
                    <li><NavLink to="#">Testmonial</NavLink></li>
                </ul>
            </nav>
            <div className="container">
                <h4>Hello, my name is</h4>
                <h1>Ankit Kumar</h1>
                <h3>I'm A plumber.</h3>
                
            </div>
        </div>

        </>
    );
};

export default Plumber;