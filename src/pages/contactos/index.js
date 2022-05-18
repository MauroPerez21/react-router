import React from 'react';
//IMPORT-REACT-BOOTSTRAP
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//REACT-ICONS
import { DiAndroid } from "react-icons/di";
import { DiAppstore } from "react-icons/di";

//IMPORT-IMAGES
import City from "../assets/images/london.png";
//IMPORT COMPONENTS
import Info from './Info';
import Contents from './Contents'
import Hash from '../assets/HashLoader'
import useToggle from '../Layout/useToggle'
import Cat from '../assets/Cat'

//ABOUT DOM-RENDER
export default function About() 
{
const BgImage = {backgroundImage:`linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${City})`,}
const [loading, isLoading] = React.useState(true)
const [modal, setModal] = useToggle(false);
//const handleClose = () => setModal(false)
//const handleShow = ()=>setModal(prevModal => !prevModal)
React.useEffect(() => {
    document.getElementById("title").innerHTML = "tendencias.com | info"
      setTimeout(()=>{
      isLoading(false)
    },2000)
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
            <Row className="align-items-center">
              <Col><DiAndroid className="lime-icon"/></Col>
              <Col md={6}>
                <h1>¿Que hacemos?</h1>
                <p>Proyectos Web y M&oacute;viles para las <em>Pymes</em></p>
                <button className="btn-banner" onClick={setModal}>
                <Cat name="Contacto"/>
                </button>
                <Info show={modal} onHide={setModal}/>
              </Col>
              <Col><DiAppstore className="blue-icon"/></Col>
            </Row>
          </div>
        </div>
      <Contents />  
      </>
    }
        
    </>
  );
}


