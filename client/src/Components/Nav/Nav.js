import React from "react";
import {NavLink} from "react-router-dom";
import "./navStyle.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
  <NavLink className="customNav" to="/">Daily Wines</NavLink>


  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link nav-style" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-style" to="./DailyOffering">Daily Offering</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-style" href="https://barcelona.lemonstand.com/shop">Shopping Cart</a>
      </li>
    </ul>
    
  </div>
</nav>
)

export default Navbar;