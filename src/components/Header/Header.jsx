import React from "react";
import { Link } from "react-router";
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>This is header I am fixed</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Mobils">Mobils</Link>
        <Link to="/laptops">Laptops</Link>
        
        
      </nav>
    </div>
  );
};

export default Header;
