import "./slider.css"
import { useDispatch, useSelector } from "react-redux";
import {addproduct,add,remove} from "../redux/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";

function OnSlide({data}) {
    
    const Product = useSelector((item) => item.productSlice.typeer)
    const dispatch = useDispatch()
    const [rat, setrat] = useState([
        {
            id:1,
            img:"stars.webp"
        }, {
            id:2,
            img:"stars.webp"
        }, {
            id:3,
            img:"stars.webp"
        }, {
            id:4,
            img:"stars.webp"
        }, {
            id:5,
            img:"stars.webp"
        },

    ])  
    const [io, setio] = useState("")


    
    return (
        <>
       
        
        {
            Product&&<div key={data.length} className="page">
    
                <div className="slide">
                    <div className="dellet">
                    </div>
                    <div className="imag">
                        <h3 onClick={()=>dispatch(remove())}>x</h3>
                        <div className="img">
                            <img src={data.image} alt="image" />
                        </div>
    
                        <div className="box">
    
                        <div className="title">
    
                            <p>name:{data.title}</p>
                            <p>author:johan</p>
                        </div>
                        <div className="all">
                        <div className="rat " style={{width:"30px", display:"flex"}}>
                        {
                            rat&&rat.map((i)=>(
                                    <img key={i.id} src={i.img} alt="image"/>
                            ))
                           }                        </div>
                        <div className="price">
                            <p>price:<span>{data.price}$</span></p>
                        </div>

                        </div>
                        <div className="details">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatibus magni sed debitis consectetur voluptates et harum quam optio explicabo dolorum aliquid, tenetur adipisci natus reiciendis architecto sunt fugiat doloremque.</p>
    
                        </div>
                        <div className="buy-carts">
                            <button onClick={()=>dispatch(addproduct(data))}>Add to Cart  </button>
                        </div>
                        </div>
                    </div>
    
                </div>
            </div>
        }
        </>
    );
}

export default OnSlide;
