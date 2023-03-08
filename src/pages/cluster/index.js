import Cat from '../../assets/Cat'
import BgImage from '../../utils/bgimage'
import React,{useContext} from 'react';
//IMPORT-REACT-BOOTSTRAP
import { Col, Button} from 'react-bootstrap';
//REACT-ICONS
import { DiAndroid, DiAppstore } from "react-icons/di";
//IMPORT-IMAGES
//IMPORT COMPONENTS
import Info from './Info';
import Contents from './Contents'
import useToggle from '../../hooks/useToggle'
import useTimeOut from '../../hooks/useTimeOut';
import {Theme} from '../../components/app'
import {LayoutBanner} from '../../components/snippets'
const Banner = ({...props})=>(
<LayoutBanner>
      <Col><DiAndroid className="lime-icon"/></Col>
      <Col md={6}>
        <h1>¿Que hacemos?</h1>
        <p>Proyectos Web y M&oacute;viles para las <em>Pymes</em></p>
        <Button className="btn-banner" 
        variant="outline-warning"
        onClick={props.setModal}>
        <Cat name="Contacto"/>
        </Button>
        <Info show={props.modal} onHide={props.setModal}/>
      </Col>
      <Col><DiAppstore className="blue-icon"/></Col>
</LayoutBanner>
)

//ABOUT DOM-RENDER
export default function About() 
{
const Rings = useContext(Theme)
document.getElementById("title").innerHTML = "tiendas_online | info"
const [loading, isLoading] = React.useState(true)
useTimeOut(()=>isLoading(false),1000)
const [modal, setModal] = useToggle(false);
//const handleClose = () => setModal(false)
//const handleShow = ()=>setModal(prevModal => !prevModal)
return (
    <>
    {loading?
    <div className="loader_active">
      <Rings color={`#ffebcc`} loading={loading}/>
    </div>
    :
    <>
      <div style={BgImage} className="background">
        <Banner 
        setModal={setModal}
        modal={modal}
        />
      </div>
      <Contents />  
    </>
    }
        
    </>
  );
}


