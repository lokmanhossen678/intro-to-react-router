import React from "react";
import { Link, NavLink } from "react-router";
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>This is header I am fixed</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Mobils">Mobils</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        
        
      </nav>
    </div>
  );
};

export default Header;
