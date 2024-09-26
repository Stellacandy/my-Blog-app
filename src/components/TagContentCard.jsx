import React from "react";



function TagContentCard(props) {

     return (
        <div className="card">

  <span className="tagcard-details">   <h4 className="tagcard-year"> {props.year}</h4>     <h6 className="tagcard-date"> {props.date}</h6>
            <p className="tagcard-text"> {props.text}   </p>

            </span>  
    
          <div className="tagcardimg-box">
          <img  className="tagcard-img"   src={props.cardimg} alt="card article image" />
            </div>  

        </div>

     ); 
}



export default TagContentCard;