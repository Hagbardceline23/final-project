import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>


  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link nav-style" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-style" to="/daily-offering">Daily Offering</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-style" to="/blog">Blog</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
)

export default Navbar;