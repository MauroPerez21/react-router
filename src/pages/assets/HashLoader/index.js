import React from 'react';
//IMPORT REACT-SPINNERS
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
const Spinner = ()=>{
let Colors = [
"#61dafb",
"#3366ff",
"#f1f1f1",
"#ff00ff",
"#00ff00",
"orange",
"#282c34",
"#ffff00",
"#61dafb",
"#009900",
"#cc33ff"   ]

let [loading] = React.useState(true);
let [color ] = React.useState(Colors[Math.ceil(Math.random()*10)]);
    const override = css`
display:block;
position:absolute;
left:0;
right:0;
margin:auto;
top:0;
bottom:0;
    `; 
    return(
        <div>
        <HashLoader color={color} loading={loading} css={override} size={150} />
    </div>
          )
  }
  export default Spinner;

