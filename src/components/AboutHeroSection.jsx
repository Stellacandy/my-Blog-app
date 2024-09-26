import React from "react";
import AboutHeroimg from '../assets/aboutimg.jpg';



const AboutHerosection = function() {


    return (

       <div   className="hero-sectionbox">

        <p className="abouthero-text">
            About Starter 
        </p>



         <div  className="heroimg-box">
            <img  className="hero-img" src={AboutHeroimg} alt="Heroimg jpeg"></img>
         </div>

       </div>

       

    );

}



export default AboutHerosection;