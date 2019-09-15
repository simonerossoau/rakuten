import * as React from 'react';
import MenuItem from './menu';
import LogoItem from './logo';
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="nav">
      <div className="nav__items">
        {/* <Link to="/"> */}
          <LogoItem />
      {/*   </Link> */}
        <MenuItem />
      </div>
    </div>
  )
}