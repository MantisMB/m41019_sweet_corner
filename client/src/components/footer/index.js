import React from 'react';
import './footer.scss';

export default props => {
    const year = new Date().getFullYear();
    return (
        <div className="row">
            <footer>
                <div className="dots"></div> 
                <div className="date"><p>Copyright &copy; {year} Sweet Corner. All rights reserved.</p></div>
                <div className="phone"><p><i className="fa fa-phone"></i>&nbsp;&nbsp;800-264-2099</p></div> 
            </footer>
        </div>
    );
}