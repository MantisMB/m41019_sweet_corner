import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart_widget';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.scss';

export default props => {
    return (
        <nav className="navbar float-right">
            <ul className="main-nav">
                <li className="nav-item nav-link active">
                    <Link className={`menuList link `} to="/">HOME</Link>
                </li>
                <li className="nav-item nav-link">
                <Link className={`menuList link `}
                to="/products">PRODUCTS</Link>
            </li>
                <li className="nav-item nav-link">
                <Link className={`menuList link `}
                to="/about">ABOUT US</Link>
            </li>
                <li className="nav-item nav-link">
                <Link className={`menuList link `}
                to="/services">SERVICES</Link>
            </li>
                <li className="nav-item nav-link">
                <Link className={`menuList link `}
                to="/contact">CONTACT</Link>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}