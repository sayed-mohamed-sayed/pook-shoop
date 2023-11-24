
import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./slider.css"
import { useDispatch, useSelector } from "react-redux";
import OnSlide from "./onslide";
import { addproduct ,removeitem,remove,adds} from "../redux/ProductSlice";
import {BsCartDash,BsJustify} from 'react-icons/bs';
import {AiFillEye,AiOutlineFrown ,AiFillEnvironment,AiFillPhone, AiOutlineArrowRight} from "react-icons/ai"
import { fetchproduct } from "../redux/ProductSlice";
// import OnSlidetf from "./books/b/hj";
function Bestseller({ data }) {
    const [num, setnum] = useState(0);
    const [adddata, setadddata] = useState("")
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

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchproduct())
        
        },[])

    const Product = useSelector((item) => item.productSlice.product)
    const loading = useSelector((item) => item.productSlice.loading)

    localStorage.setItem("data" ,JSON.stringify(Product))


    const handel = (direction) => {
        if (direction === "left") {
            setnum(num + 1)
        }
        if (direction === "right") {
            setnum(num - 1)

        }
    }

    const add = (i) => {
        setadddata(i)
        dispatch(adds())
    }

    return (
        <>
        <div className="slider-contaner"  >
        {
           loading ? (
            <div>
                <p className="loading">loading....</p>
            </div>
        ) : null
        }
        <h1>Bestsellers</h1>
            <button className="plus" disabled={num == 4} onClick={() => handel("left")}> &lsaquo;</button>


            <div className="imgcontaner" style={{ transform: `translateX(${num * -30}vw)` }}>
                {

Product.books &&Product.books.map((i ,o) => (

                        <div className="image" key={o}>
                         <div className="img">
                                <img src={i.image} alt="image" />
                            </div>
                            <div className="title">

                                <p>{i.title}</p>
                            </div>
                            <div className="rat">
                           {
                            rat&&rat.map((i)=>(
                            
                                    <img key={i.id} src={i.img} alt="image"/>
                            ))
                           }
                            </div>
                            <div className="price">
                                <p>price:{i.price}$</p>
                            </div>
                            <div className="buy">
                                <p onClick={() => add(i)}><AiFillEye/></p>
                                <p onClick={() => dispatch(addproduct( i))}><BsCartDash/></p>
                            </div>
                        </div>
                    ))

                }


            </div>
            <button className="min" disabled={num == -3} onClick={() => handel("right")} > &rsaquo;</button>
<OnSlide data={adddata} />
        </div>
        </>
    );
}

export default Bestseller;
