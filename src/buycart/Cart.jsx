
import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../redux/ProductSlice";
import "./cart.css"
function Cart() {
    const dispatch = useDispatch()
    const Products = useSelector((item) => item.productSlice.cart)

    return (
        <div  className="buy-cart">
            <h1 className="header-buy">Your Shopping Cart</h1>
        {Products&&Products.map((i ,o)=>(
                    <div key={o} className="buy">
                        <div className="contaner">
                        <div className="img">
                            <img src={i.image} alt="image" />
                        </div>
                        <div className="title">
        
                            <h3>title:{i.title}</h3>
                            <h3>author:rrgdcee</h3>
                        </div>
        
                        </div>
                        <div className="quantity">
                        <div className="quant">
                            <button>+</button>
                            <p>4</p>
                            <button>-</button>
        
                            </div>
                            <div className="price">
                            <p>price:${i.price}</p>
                            </div>
                        </div>
                   <div className="delet" onClick={()=>dispatch(removeitem(i.isbn13))}>

                       deleate

                   </div>
                   </div>
                  
                   
                  ))
                }
                </div>
            

      
    );
}

export default Cart;
