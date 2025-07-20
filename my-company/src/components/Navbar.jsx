import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'end',
    borderRadius: '15px',
  };
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
  };
  const hoverStyle = {
    textDecoration: 'underline',
  };
  return (
    <nav style={navbarStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={linkStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/about">About</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/services">Services</Link>
        </li>
        <li style={linkStyle}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
