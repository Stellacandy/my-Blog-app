import React from "react";




const RegHerosection = function() {


    return (


        <form action="loginpage.js">
<div   className="reghero-box">

        <p className="regherobox-text" >REGISTER ACCOUNT</p>
<div className="reglist-box">
         
           
           <input type="text"  placeholder="First Name"  className="firstname"  /> <br></br>
             <input type="text"  placeholder="Last Name"  className="lastname"  />  <br></br>
            {/* <input type="text"  placeholder="Username"  className="username" />  <br></br> */}
           <input type="email"  placeholder="Email"  className="email"  />   <br></br>
           <input type="password"  placeholder="Password"  className="password" />  <br></br>
           <input type="password"  placeholder="Confirm Password"  className="confirmpassword"  />  
          
          </div>

          <p className="terms">By creating an account you agree to our <br></br> <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" className="reg-btn">Register</button>


           <div className="signin-box">
           <p className="already">Already have an account? <a href="#" className="signin">Sign in</a>.</p>
           </div>

           </div>
        </form>

       

    );

}



export default RegHerosection;