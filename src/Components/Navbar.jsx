import React, { useState } from "react";
import brand_logo  from "../assets/images/brand_logo.png";

const Navbar = () => {

  return (
    <div>
        <nav className="nav container">
            <div className="logo">
                <img src={brand_logo} alt="" />
            </div>
            <div>
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
            </div>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar; 