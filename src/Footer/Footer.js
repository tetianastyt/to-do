import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import logo from './Brainstation.png'


function Footer() {
    return (
        <div className="footer">
            <img src={logo}/>
        </div>
    );
}

export default Footer;
