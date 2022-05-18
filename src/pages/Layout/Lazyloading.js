import React, {useState, useEffect} from 'react';

//IMPORT REACT-SPINNERS
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
const Spinner = ()=>{
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");
    
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
        setColor(true)
      },5000);
   rotate_string()
    },[])
  
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `; 
    function rotate_string ()
        {
          var element = document.getElementById('target')
          var textNode = element.childNodes[0]
          var text = textNode.data
          setInterval (function(){
            text = text[text.length-1] + text.substring(0,text.length-1)
            textNode.data = text
          },100)
        } 
    return(
          <div className="App-intro">
            <HashLoader color={color} loading={loading} css={override} size={150} />
                <h1 id="target">www.tendencias.com </h1>
          </div>
          )
  }
  export default Spinner;