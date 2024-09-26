import React from "react";



function BlogContentCard(props) {

     return (
        <div className="card">

  <span className="blogcard-details">   <h4 className="blogcard-year"> {props.year}</h4>     <h6 className="blogcard-date"> {props.date}</h6>
            <p className="blogcard-text"> {props.text}   </p>

            </span>  
    
          <div className="blogcardimg-box">
          <img  className="blogcard-img"   src={props.cardimg} alt="card article image" />
            </div>  

        </div>

     ); 
}



export default BlogContentCard;