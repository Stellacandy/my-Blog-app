import React from "react";
import TagContentCard from "./TagContentCard";


import leaf from '../assets/leaf.jpeg';
import lawn from '../assets/lawn.jpg';
import riverbed from '../assets/riverbed.jpeg';
import forestleaf from '../assets/forestleaf.jpeg';




function TagContentGrid () {

    return (
        
        <div className="tagcontent-box">
             <h4 className="tagcontentbox-text1"> 2024 </h4>

             <TagContentCard
               date= "2 Feb "
               text= "Living Light: The Minimalist Lifestyle and its Environmental Impact."
               cardimg={leaf}
          />

           
           <h4 className="tagcontentbox-text2"> 2023 </h4>


           <TagContentCard
               date= "21 Nov "
               text= "How Minimalist Spaces Support ECo-Friendly Living"
               cardimg={lawn}
          />
      

          <TagContentCard
               date= "11 Oct "
               text= "Simplifying Life for a Balanced, Eco-Conscious Tomorrow"
               cardimg={riverbed}
          />


          <TagContentCard
               date= "1 Oct  "
               text= "Redefining Success in a Earth-Friendly Life"
               cardimg={forestleaf}
          />



            <span className="tagcard-btnbox">
            <a href="#" classname="tagcard-btn" > Load Older </a>
            </span>

        </div>


    );
}


export default TagContentGrid;