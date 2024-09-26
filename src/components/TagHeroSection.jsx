import React from "react";
import TagHeroimg from '../assets/sunset.jpeg';



const TagHerosection = function() {


    return (

       <div   className="taghero-sectionbox">

        <p className="taghero-text1">
            #sustainability 
        </p>

        <p  className="taghero-text2">
            Sustainability is the ability to exist and develop without depleting <br></br>
            natural resources for the future.
        </p>


         <div  className="tagheroimg-box">
            <img  className="taghero-img" src={TagHeroimg} alt="Heroimg jpeg"></img>
         </div>

       </div>

       

    );

}



export default TagHerosection;