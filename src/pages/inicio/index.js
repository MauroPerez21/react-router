//REACT-BOOTSTRAP
import React from 'react';
//import useTimeOut from '../Layout/useTimeOut'
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
//IMPORT-IMAGES
import City from '../assets/images/london.png';
//REACT-ICONS
import { DiAndroid } from "react-icons/di";
import { DiAppstore } from "react-icons/di";
//IMPORT-COMPONENTS
import HomeBody from './Body'
import Hash from '../assets/HashLoader'
import Cat from '../assets/Cat'

//PROTECTED CONSTANTS

//HOME DOM-RENDER
export default function Home() 
{
const [loading, setLoading] = React.useState(true)
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(prevOpen => !prevOpen)
const BgImage = {
  backgroundImage:
  `linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${City})`,
}

React.useEffect(() => {
  document.querySelector("#title").innerHTML = "tendencias.com | inicio"
    setTimeout(()=>{
    setLoading(false)
  },2000)
  //rotate_string()
},[loading]);
return (
  <>
      {loading?  
      <div className="loader_active">
      <Hash /> 
     </div>:
     <>
     <div style={BgImage} className="background">
     <div className="background-text">
         <div className="row align-items-center">
             <Col><DiAppstore className="blue-icon"/></Col>
             <Col md={6}>
                 <h1>www.tendencias.com</h1>    
                 <p>Desarrollo de Sitios Web y Aplicaciones M&oacute;viles</p>
                   <button className="btn-banner"
                   onClick={handleOpen}
                   >
                   <Cat name="leer más"/>
                   </button>
                   
                   <Collapse in={open}>
                     <div id="example-collapse-text">
                     Creaci&oacute;n de Sitios-Web y Aplicaciones M&oacute;viles de excelente calidad t&eacute;cnica y a la medida de las micro-empresas colombianas.
                     </div>
                   </Collapse>
             </Col>
             <Col><DiAndroid className="lime-icon"/></Col>
         </div> 
     </div>
   </div>        
   <div className="curly">
     <div className="row">
       <Col md={8}></Col>
       <Col md={4}><h3>Tendencias.com</h3>
       </Col>
     </div>
   </div>
  
   <HomeBody />
   </>
     }
     
    </>
  );
}

