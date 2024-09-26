import React from "react";
import BlogContentCard from "./BlogContentCard";


import leaf from '../assets/leaf.jpeg';
import desert from '../assets/desert.jpeg';
import wardrobe from '../assets/wardrobe.jpeg';
import lawn from '../assets/lawn.jpg';
import riverbed from '../assets/riverbed.jpeg';
import forestleaf from '../assets/forestleaf.jpeg';
import fruit from '../assets/fruit.jpeg';



function BlogContentGrid () {

    return (
        
        <div className="blogcontent-box">
             <h4 className="blogcontentbox-text1"> 2024 </h4>

             <BlogContentCard
               date= "2nd Feb,2024 . #minimalism"
               text= "Living Light: The Minimalist Lifestyle and its Environmental Impact."
               cardimg={leaf}
          />


           <BlogContentCard
               date= "2nd Feb,2024 . #minimalist"
               text= "Elevating Your Style With Minimal Environmental Footprint."
               cardimg={desert}
          />
           
           <h4 className="blogcontentbox-text2"> 2023 </h4>


           <BlogContentCard
               date= "19 Dec . #minimalist"
               text= "Capsule Closets: Elevating Your Style with Minimal Environmental Footprint"      
               cardimg={wardrobe}
          />



           <BlogContentCard
               date= "21 Nov  . #minimalist"
               text= "How Minimalist Spaces Support ECo-Friendly Living"
               cardimg={lawn}
          />
      

          <BlogContentCard
               date= "11 Oct  . #minimalist"
               text= "Simplifying Life for a Balanced, Eco-Conscious Tomorrow"
               cardimg={riverbed}
          />


          <BlogContentCard
               date= "1 Oct  . #minimalist"
               text= "Redefining Success in a Earth-Friendly Life"
               cardimg={forestleaf}
          />



           <BlogContentCard
               date= "5 Jul  . #minimalist"
               text= "Zero-Waste Living"
               cardimg={fruit}
          />



            <span className="blogcard-btnbox">
            <a href="#" classname="blogcard-btn" > Load Older </a>
            </span>

        </div>


    );
}


export default BlogContentGrid;