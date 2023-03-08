import React from 'react';
//IMPORT REACT-SPINNERS
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";


const Spinner = ({color, loading})=>{

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
            {
                loading===true?
                   <RingLoader color={color} loading={loading} css={override} size={150} />:
                   ``
            }
      </div>
          )
  }
  export default Spinner;

