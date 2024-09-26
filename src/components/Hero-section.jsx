import React from "react";
import Heroimg from '../assets/mountain.jpeg';



const Herosection = function() {


    return (

       <div   className="hero-sectionbox">

        <p className="hero-text1">
            Starter - a Minimalist <br></br>
            Personal Blog Template. 
        </p>

        <p  className="hero-text2">
            "Starter" is a, well starter theme designed by nrk9819 for Ghost <br></br>
            (CMS), 11ty, enhance, astro and many other site generators.
        </p>


         <div  className="heroimg-box">
            <img  className="hero-img" src={Heroimg} alt="Heroimg jpeg"></img>
            <h6 className="img-text"> Exploring the mountains in indonesia -  <a href="#"> Unsplash </a>   </h6>
         </div>

       </div>

       

    );

}



export default Herosection;