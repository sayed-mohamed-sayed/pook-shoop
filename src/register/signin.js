// @flow strict

import * as React from 'react';
import { useState } from "react";
import "./register.css"

function Signin() {

    const [dataname, setdataname] = useState("");
    const [datapass, setdatapass] = useState("");
    const [dataemail, setdataemail]= useState("");
    const [hide, sethide] = useState(true);

  const supmit = () => {
    if (dataname == "") {

      alert("please enter data");
    }
    if (datapass == "") {
        alert("please enter data");
      }if (datapass == "") {
        alert("please enter data");
      }
  };
    return (
        <div>
           <div>
      <div className="contanerlogin">
      <div className="box">
          <input
            type="name"
            placeholder="name"
            value={dataname}
            onChange={(e) => setdataname(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="email"
            placeholder="email"
            value={dataemail}
            onChange={(e) => setdataemail(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type={hide?"password" :"text"}
            placeholder="password"
            value={datapass}
            onChange={(e) => setdatapass(e.target.value)}
            
          />
          <i onClick={()=>sethide(!hide)}>*</i>

        </div>

        <div className="box">
          <input
            type="submit"
            value="login in"
            id="button"
            onClick={() => supmit()}
          />
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Signin;