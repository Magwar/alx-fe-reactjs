import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
    <navbar style={navbarStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={linkStyle}>
          <a href="/">Home</a>
        </li>
        <li style={linkStyle}>
          <a href="/about">About</a>
        </li>
        <li style={linkStyle}>
          <a href="/services">Services</a>
        </li>
        <li style={linkStyle}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
