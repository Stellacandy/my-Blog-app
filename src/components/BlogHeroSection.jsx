import React from "react";
import BlogHeroimg from '../assets/canoe.jpeg';



const BlogHerosection = function() {


    return (

       <div   className="bloghero-sectionbox">

        <p className="bloghero-text1">
            Living Light: The <br></br>
            Minimalist Lifestyle and its <br></br>
            Environmental Impact
        </p>

        <p  className="bloghero-text2">
            Explore the profound connection between embracing minimalism and  <br></br>
            reducing your environmental footprint, discovering how living light <br></br>
            can lead to a more sustainable and fulfilling life.
        </p>


         <div  className="blogheroimg-box">
            <img  className="bloghero-img" src={BlogHeroimg} alt="Heroimg jpeg"></img>
            <h6 className="blogimg-text"> Minimalism is the key of peaceful life </h6>
         </div>

       </div>

       

    );

}



export default BlogHerosection;