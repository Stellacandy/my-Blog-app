import React from "react";

import {Link, NavLink} from "react-router-dom";



const BlogHeader = function() {


return (
    
          <header  className="header">
            <h4  className="header-text"> Starter </h4>

            <div  className="links">
            <NavLink to="/About">About</NavLink> 
            <NavLink to="/Blog">Blog</NavLink>
            <NavLink to="/Tag">Tag</NavLink>

            </div>

          </header>
);

}



export default BlogHeader;