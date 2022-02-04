import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Star from './star.png';
import Logo192 from './logo192.png';
//REACT-ICONS
import {BsFillGeoAltFill} from "react-icons/bs";
import {BsCloudCheckFill} from "react-icons/bs";
import SocialNetworks from './SocialNetworks';
import {DiNodejsSmall} from 'react-icons/di';
//IMPORT MAP-BOX
import myMap from '../img/map.png'

const Footer = () => 
{
const Temp = ( props =>{
    return <h2>{props.title}</h2>  
}) 
const BgMap = {
    backgroundImage:
    `url(${myMap}`,
    }  
return (
<div className="bg-footer text-light">
    <Row>
        <Col></Col>
        <Col md>
            <div className="display-flex align-items-center">
                <Image src={Star} fluid/><Temp className="mx-auto" title="tendencias.com"/>
            </div>  
        </Col>
        <Col></Col>
    </Row>
    <Container>
    <Row className="align-items-center">
        <Col md={{order:`last`}}>
        <Image src={Logo192}/>
            <h5>Encuentranos en nuestras redes</h5>
            <SocialNetworks />
            
        </Col>
        <Col md><h3 className="lime-stone">Tu negocio en la WWW!</h3>
                <BsCloudCheckFill className="icon"/>
                <p>En Tecnolog&iacute;a de &Uacute;ltima Generaci&oacute;n!</p>
                <p><DiNodejsSmall className="node-icon"/></p>
        </Col>
        <Col md={{order:`first`}}>
        <h2><BsFillGeoAltFill className="text-danger"/></h2>
            <div id='map' className="map mx-auto" style={BgMap}></div>
            <p>St. 34C # 88A - 47</p>
            <p>Medell&iacute;n-Colombia-Latam</p>
        </Col>
    </Row>
    <Row className="text-center">
        <Col md={{span:6, offset:3}}>
            <h5>tendenciasweb@gmail.com</h5>   
        </Col>
    </Row>
</Container>
</div>
        );
} 

export default Footer;