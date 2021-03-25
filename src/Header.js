import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBascketIcon from '@material-ui/icons/ShoppingBasket';
import './Styling/header.css';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import Navlinks from './Navlinks';
import { auth } from './firebase';

function Header(){
    const [{basket, loggedinuser}, dispatch] = useStateValue();

    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    return (
        <div>
            <nav className="header">
                <img className="header__logo"  alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                <div className="header__search">
                    <input type="text" className="header__searchInput" placeholder="Search for that special item"/>
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav" >
                    {/* Sign in N out link*/}
                    <Link to={!loggedinuser &&"/login"} className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                            <span className="header__optionLineTwo">{loggedinuser ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    {/* Ret & orders link*/}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Return</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                
                </div>
                {/* Basket icon with number of items in the basket */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBascketIcon/>
                        {/* Number of items */}
                        <span className="header__optionLineTwo header__basketCount" >{basket.length}</span>
                    </div>
                </Link>
            </nav>
            <Navlinks />
        </div>
    )
}

export default Header;