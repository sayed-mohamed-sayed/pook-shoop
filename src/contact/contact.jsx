
import * as React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import "./contact.css"
function Contact({data}) {
   
    return (
       

<div className="contactus">
  <div className="contaner">
      <div className="adress">
<h4>Adress</h4>
<p>Cairo</p>
      </div>
      <div className="phone">
      
      <h4>Phone</h4>
      <p>01018364752</p>
      </div>
      <div className="email">
        <h4>Email</h4>
          <p>faki@gmail.com</p>
      </div>
  </div>
  <div className="sendcontact">
      <h1>ContactesForme</h1>
     <div className="input">
     <input type="text"  placeholder="name"/>
      <input type="text" placeholder="subject"/>
      <input type="email" name="" id="" placeholder="email"/>
     </div>
     <div className="textarea">
     <textarea name="message" placeholder="YourMessage" id="" cols="30" rows="10"></textarea>
  <button >Send</button>
     </div>
  </div>
</div>    

      
    );
}

export default Contact;
