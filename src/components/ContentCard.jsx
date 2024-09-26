import React from "react";



function ContentCard(props) {

     return (
        <div className="card">
            <h6 className="card-date"> {props.date}</h6>
            <p className="card-text"> {props.text}   </p>
    
          <div className="card-img">
          <img src={props.cardimg} alt="card article image" />
            </div>  

        </div>

     ); 
}



export default ContentCard;