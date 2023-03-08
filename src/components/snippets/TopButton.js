import React from "react";
export default function TopButton(){
    const viewRef = React.useRef()
    const [state, setState] = React.useState(document.documentElement.scrollTop)
    // console.log(state)  
    // console.log(viewRef.current) 
    const displayTop = ()=>{
        setState(document.documentElement.scrollTop)
    }
    const windowTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    React.useEffect(()=>{
        window.addEventListener("scroll",displayTop)
        return () =>{
            window.removeEventListener("scroll",displayTop) 
            //console.log("removed") 
        }
    }, [state]);
    return (
        <>
        {(state > 240)?
          <div 
            ref={viewRef}
            className="topbtn"
            onClick={windowTop}
            >&#9195;</div>: ``
        }
        </>     
    )
}