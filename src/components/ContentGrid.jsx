import React from "react";
import ContentCard from "./ContentCard";


import leaf from '../assets/leaf.jpeg';
import desert from '../assets/desert.jpeg';
import lemon from '../assets/lemon.jpeg';
import canoe from '../assets/canoe.jpeg';



function ContentGrid () {

    return (
        
        <div className="content-box">
             <h6 className="contentbox-text"> Recent Publications </h6>

             <ContentCard
               date= "2nd Feb,2024 . #minimalist"
               text= "Living Light: The Minimalist Lifestyle and its Environmental Impact."
               cardimg={leaf}
          />


           <ContentCard
               date= "2nd Feb,2024 . #minimalist"
               text= "Elevating Your Style With Minimal Environmental Footprint."
               cardimg={desert}
          />
           

           <ContentCard
               date= "2nd Feb,2024 . #minimalist"
               text= "Designing Tranquility: How Minimalist Spaces Support Eco-Friendly Living ."
               cardimg={lemon}
          />

            

           <ContentCard
               date= "2nd Feb,2024 . #minimalist"
               text= "Warning Wisely: Sustainable Travel Tips For the Minimalist Explorer."
               cardimg={canoe}
          />


            <span className="card-btnbox">
            <a href="#" classname="card-btn" > View More </a>
            </span>

        </div>


    );
}


export default ContentGrid;