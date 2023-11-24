// @flow strict

import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css"
import {AiOutlineLeftCircle,AiOutlineFrown ,AiFillEnvironment,AiFillPhone, AiOutlineArrowRight} from "react-icons/ai"
import {BsCartDash,BsJustify} from 'react-icons/bs';
import { useSelector } from "react-redux";

function Header() {
  const [dataname, setdataname] = useState("");
  const [datapass, setdatapass] = useState("");

 
const productlength=useSelector((i)=>i.productSlice.cart)
  return (
    <div className="header">
      <div className="header-top">
<div className="numper">
<p>18364752</p>
<i><AiFillPhone/></i>

</div>
<div className="head"> welcome to online Bookstore</div>
<div className="login"> <a href="/login"> login</a></div>

      </div>
      <div className="header-medium">
<div className="head">
  <p>Book</p>
<img  src="../book1.png" alt="image" />
<p>Store</p>
</div>

<div className="input">
  <input type="search"  placeholder="Search in bookStore"/>

</div>

<div className="icon">
<NavLink to="/cart"> 
<div style={{display:"flex" ,position:"relative"}}>

<i style={{fontWeight:"bold" ,fontSize:"25px" ,color:"white" }}><BsCartDash/></i>
<p className="productlength">

{productlength.length}
</p>
</div>
</NavLink>
</div>
      </div>

<div className="header-bottom">
<NavLink to="/">  Home </NavLink>
<NavLink to="/author">Authors</NavLink>
<NavLink to="/"> About Us</NavLink>
<NavLink to="/contact"> Contact Us</NavLink>
    
</div>

    </div>
  );
}

export default Header;
