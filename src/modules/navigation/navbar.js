import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
  return (
    <div className="navbar-conatiner">
      <ul className="navbar-list">
        <Link to="/"><li>HOME</li></Link>
        <Link to="/shop"><li>SHOP</li></Link>
      </ul>
    </div>
  );
}

export default NavBar;
