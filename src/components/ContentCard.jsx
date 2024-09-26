import React from "react";



function ContentCard(props) {

     return (
        <div className="card">

  <span className="card-details">        <h6 className="card-date"> {props.date}</h6>
            <p className="card-text"> {props.text}   </p>

            </span>  
    
          <div className="cardimg-box">
          <img  className="card-img"   src={props.cardimg} alt="card article image" />
            </div>  

        </div>

     ); 
}



export default ContentCard;