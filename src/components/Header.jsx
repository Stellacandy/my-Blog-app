import React from "react";

import {NavLink, useLocation} from "react-router-dom";



const Header = function() {

const location = useLocation();
console.log(location.pathname)


return (
    
          <header  className="header">
            <h4  className="header-text"> Starter </h4>

            <div  className="links">
            <NavLink to="/About" style={ location.pathname === '/about' ?  {textDecoration: "underline",} : {} }>About</NavLink> 
            <NavLink to="/Blog" style={ location.pathname === '/blog' ?  {textDecoration: "underline",} : {} }>Blog</NavLink>
            <NavLink to="/Tag" style={ location.pathname === '/tag' ?  {textDecoration: "underline",} : {} }>Tag</NavLink>

            </div>

          </header>
);

}



export default Header;