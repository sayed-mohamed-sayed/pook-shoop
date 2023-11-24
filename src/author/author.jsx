
import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./author.css"

function Author({data}) {
    const dispatch = useDispatch()
    const Products = useSelector((item) => item.ProductSlice)
const [search ,setsearch] =useState("")

    return (


        
        <div className="author">
           
            <div className="input">
                <input type="search" placeholder="search" value={search} onChange={(e)=>setsearch(e.target.value)}/>
            </div>
            <div className="authors">
                {data.filter((i)=>i.title.includes(search)).map((i,o)=>(
                    <div key={o} className="box-author">
                    <img src={i.img} alt="image" />
                   <h3>{i.title}</h3>
                    </div>

                ))
            }
                </div>
            </div>



    );
}

export default Author;

