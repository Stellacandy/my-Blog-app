import React from "react";


function ThemeSection () {

      return (
            <div  className="theme-box">
     <div  className="theme-details">         <h4 className="theme-title"> Starter </h4>
               <p  className="theme-text">This theme is designed by <a href="#" classname="nrk-link" > nrk9819 </a>. You can <br></br>
                   download the figma file for from <a href="#" classname="dribble-link" > dribble </a>
               </p>   </div> 

             
             <span className="theme-listbox">
             <ul  className="theme-list">
                   <li>
                   <p>Mastodon</p>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
</svg>
                      
                   </li>


                   <li>
                   <p>Dribble</p>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
</svg>
                   </li>


                   <li>
                   <p>Github</p>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
</svg>
                   </li>

             </ul>
             </span>

            </div>





      );
}



export default ThemeSection;