import React from "react";




const LoginHerosection = function() {


    return (


        <form action="loginpage.js">
<div   className="loghero-box">

        <p className="logherobox-text" >LOGIN ACCOUNT</p>
<div className="loglist-box">
         
           <input type="email"  placeholder="Email"  className="email"  />   <br></br>
           <input type="password"  placeholder="Password"  className="password" />  
           <div className="show-key"><i className="eye-slash"  class="fas fa-eye-slash"></i></div>
          </div>


          <a href="#"  className="forgot">Forgot Password ?</a> 

          <div className="signup-box">
           <p className="signup-text">Signup to receive our newsletters and promotion info. <br></br> You can unsubcribe from this in your email</p>
           </div>
        
          <button type="submit" className="log-btn">Login</button> <br></br>
          <button type="submit" className="signup-btn">Signup</button>

           

           </div>
        </form>

       

    );

}



export default LoginHerosection;