import React from 'react';
import './header.scss';
import Nav from '../nav';

export default props => {
    return (
        <div className="row">
            <header>
                <div className="top-image">
                </div>
                <Nav />
                <div className="main-icon"></div>
                <h2>We deliver cupcakes for the important events in your life!</h2>
            </header>
        </div>
    );
}