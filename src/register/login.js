// @flow strict

import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./register.css"
function LOGIN() {
  const [dataname, setdataname] = useState("");
  const [datapass, setdatapass] = useState("");
  const [hide, sethide] = useState(true);

  const supmit = () => {
    if (dataname == "") {

      alert("please enter data");
    }
    if (datapass == "") {
      alert("please enter data");
    }
  };

  return (
    <div>
      <div className="contanerlogin">
        <div className="box">
          <input
            type="email"
            placeholder="email"
            value={dataname}
            onChange={(e) => setdataname(e.target.value)}
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
<div>no account <a href="/signin">signin</a></div>
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
  );
}

export default LOGIN;
