import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


function Header() {
  return (
    <div className="header">
        <span style={{color: "#2c98f2"}}> React </span> Todo List
        <h1>Click on task to toggle complete</h1>
    </div>
  );
}

export default Header;
