// @flow strict

import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {data} from "../data/data"

import "./picture.css"
import Bestseller from "../sliders/bestseller";
function Show() {
  const [num, setnum] = useState(0);
  const [title, settitle] = useState([{id:1 , img:"./Book.jpg" ,title:"Book Shop"} 
  ,{id:2 , img:"imagee.jpg" ,title:"Hello My Friend"} 
  ,{id:3, img:"./images.jpg"  ,title:"Book Shop"}]);
const handel=(direction)=>{           
if (direction==="left") {
  setnum(num+1)
}
if (direction==="right") {
  setnum(num-1)
}
}


  return (
    <div className="slide-contaner">
      <div className="slidewarper">
        <div className="slidefirstslide">
  <button className="plus" disabled={num==2} onClick={()=>handel("left")}>+</button>
<div className="slideimg" style={{ transform:` translateX(${num*-100}vw)`}}>
{
  title.map((i)=>(
    <div key={i.id} className="img">

      <img  src={i.img} alt="image"/>
    </div>

    
    ))
}
    </div>

<button className="min" disabled={num==0} onClick={()=>handel("right")} >-</button>
        </div>
      </div>
      <Bestseller/>
    </div>
  );
}

export default Show;
