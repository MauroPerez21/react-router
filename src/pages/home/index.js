//REACT-BOOTSTRAP
import React,{useContext} from 'react';
import Cat from '../../assets/Cat'
import {Curly, LayoutBanner} from '../../components/snippets'
//import useTimeOut from '../Layout/useTimeOut'
import{ Col, Collapse, Button}from 'react-bootstrap';
//IMPORT-IMAGES
//REACT-ICONS
import { DiAndroid, DiAppstore } from "react-icons/di";
//IMPORT-COMPONENTS
import HomeBody from './Body'
import BgImage from '../../utils/bgimage'
//PROTECTED CONSTANTS
import useTimeOut from '../../hooks/useTimeOut';
import {Theme} from '../../components/app'

//HOME DOM-RENDER
const Banner = ({...props})=>(
<LayoutBanner> 
  <Col><DiAppstore className="blue-icon"/></Col>
      <Col md={6}>
          <h1>Tiendas_online</h1>    
          <p>Desarrollo de Sitios Web y Aplicaciones M&oacute;viles</p>
            <Button className="btn-banner"
            onClick={props.handleOpen}
            variant="outline-warning"
            >
            <Cat name="leer más"/>
            </Button>
            <Collapse in={props.stateOpen}>
              <div id="example-collapse-text">
              Creaci&oacute;n de Sitios-Web y Aplicaciones M&oacute;viles de excelente calidad t&eacute;cnica y a la medida de las micro-empresas colombianas.
              </div>
            </Collapse>
      </Col>
    <Col><DiAndroid className="lime-icon"/></Col>
</LayoutBanner>
)

export default function Home() 
{
const Rings = useContext(Theme)
const [loading, setLoading] = React.useState(true)
document.getElementById("title").innerHTML = "tiendas_online | inicio"
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(prevOpen => !prevOpen)
useTimeOut(()=>setLoading(false),1000)
return (
  <>{loading?  
      <div className="loader_active">
        <Rings color={`#f0f0f0`} loading={loading}/>
     </div>:
      <>
        <div style={BgImage} className="background">
        <Banner handleOpen={handleOpen} stateOpen={open}/>
        </div>        
        <Curly/>
        <HomeBody />
      </>
     }   
    </>
  );
}


