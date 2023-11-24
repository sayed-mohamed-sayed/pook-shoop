// @flow strict

import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Author from '../author/author';
import "./pagation.css"
function Pagation() {


    
const data=[
    {
        id:"1",
        img:"..//images2.jpg"
        ,title:"max"
    }, {
        id:"2",
        img:"..//images3.jpg"
        ,title:"khanm"
    }, {
        id:"3",
        img:"..//images4.jpg"
        ,title:"snam"
    }, {
        id:"4",
        img:"..//images5.jpg"
        ,title:"max"
    }, {
        id:"5",
        img:"..//images2.jpg"
        ,title:"khan"
    }, {
        id:"6",
        img:".//images3.jpg"
        ,title:"khans"
    }, {
        id:"7",
        img:"..//images4.jpg"
        ,title:"khany"
    }, {
        id:"8",
        img:"..//images5.jpg"
        ,title:"snam"
    }, {
        id:"9",
        img:"..//images4.jpg"
        ,title:"max"
    }, {
        id:"10",
        img:"..//images2.jpg"
        ,title:"hans"
    }, {
        id:"11",
        img:"..//images2.jpg"
        ,title:"johan"
    }, {
        id:"12",
        img:"..//images2.jpg"
        ,title:"khans"
    },
]

    
   
    const [current,setcurrent]=useState(1)
    
   


const productnumpage=3;
const pages=Math.ceil(data.length / productnumpage)


const startindex=(current-1)*productnumpage
const finshindex=current* productnumpage
const product=data.slice(startindex,finshindex)
const greatepage=[]
for (let index = 0; index < pages; index++) {
    greatepage.push(index+1)
    
}


return (
        <>
        <div className='allpro'>

     <Author data={product}/>
     <div className='pagtion'>        
         {
                greatepage.map((page,i)=>(
                    <div key={page} onClick={()=>setcurrent(page)} className={current === page ? "pages ac" :"pages"}>
{page}
                    </div>
                ))
            }
        </div>
        </div>
        </>
    );
};

export default Pagation;