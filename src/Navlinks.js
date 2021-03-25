import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/Navlinks.css';

function Navlinks(){
    return(
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                <Link to="/">
                    Today's Deals
                </Link>
                <Link to="/">
                    Customer Service
                </Link>
                <Link to="/">
                    Gift Cards
                </Link>
                <Link to="/">
                    Registry
                </Link>
                <Link to="/sell">
                    Sell
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Navlinks;