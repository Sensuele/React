import React from 'react';
import { Link } from "react-router-dom";
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to="/main-page" className="header__link">
                Menu
            </Link>
            <Link to="/cart-page" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;