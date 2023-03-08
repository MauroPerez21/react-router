import React from 'react'
import Image from 'react-bootstrap/Image'
import wppLogo from '../assets/images/wppLogo.png'
import useToggle from './useToggle'


const Wpp = () => {
    const [show, setShow] = useToggle(false)
    const popup = React.useRef()
    const button = React.useRef()
    React.useLayoutEffect(
        ()=>{
            setTimeout(()=>{
                setShow(false)
            },4000)
           
            if (popup.current == null || button.current == null) 
          return 
           const { top} = button.current.getBoundingClientRect()
           popup.current.style.top= `${top-20}px`
        }
    )
    return ( 
    <>
    <div
    className="fixed-wpp"
      ref={button}
      onMouseOver={setShow}
      ><a href="https://api.whatsapp.com/send?phone=+573106323631">
          <Image src={wppLogo}  width="72px" height="72px" alt="whatsapp"/>
          </a>
    </div>
         {show && (
             <div 
             className="overlay"
             ref={popup}
             >
                 Envia un mensaje
             </div>
         )}
        </>
     );
}
 
export default Wpp;
