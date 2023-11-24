
import * as React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import "./show.css"
import {addbook} from "../redux/ProductSlice"
function Showmore({data}) {
   const params=useParams()
const finddata=data.find((i)=>i.id===parseInt(params))

    return (
       

<div className="showmore">
    <div className="show">
    <div className="img">
                        <img src="../7.jpg" alt="image" />
                    </div>
                    <div className="box">

<div className="title">

    <p>book</p>
</div>
<div className="all">
<div className="rating ">
    <p>@@@@@@</p>
</div>
<div className="price">
    <p>price:<span>$45</span></p>
</div>

</div>
<div className="show-buy">
    <input type="number" placeholder="quantitty" />
    <button>Add To Cart</button>
</div>

</div>
    </div>
<div className="details">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium quia, fugiat tenetur quos dolorem cumque, enim eius aliquam quod repudiandae! Fugit molestiae deleniti ea a at possimus nobis atque.
    Ducimus ad placeat officiis dolorem amet earum praesentium, molestiae expedita sequi eos perferendis inventore atque nostrum veniam, aperiam necessitatibus neque? Velit alias placeat perferendis iusto ad minus facere provident explicabo?
</div>
</div>    

      
    );
}

export default Showmore;
