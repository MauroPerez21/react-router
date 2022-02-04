import React from 'react';
//IMPORT-REACT-BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
//REACT-ICONS
import { DiAndroid } from "react-icons/di";
import { DiAppstore } from "react-icons/di";
import { BsBookmarkCheck } from "react-icons/bs";
import {DiChrome} from "react-icons/di";
//IMPORT-IMAGES
import people from "./img/flickr/pngaaa.com-2106915.png"
import GraphDesign from "./img/flickr/pngaaa.com-2515423.png";
import Officialwebsite from "./img/flickr/pngaaa.com-2515331.png";
import Addedvalue from "./img/flickr/pngaaa.com-2106980.png";
import pluma from "./img/flickr/pngaaa.com-2515386.png";
import vaso from "./img/flickr/pngaaa.com-989975.png";
import oficial from "./img/flickr/pngaaa.com-989990.png"
import City from "./img/london.png";
//IMPORT COMPONENTS
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Info from './Layout/AboutModal';
//PROTECTED CONSTANTS

//ABOUT-BODY
const AboutContents = () => {
  return(<>
    <Row className="bg-color text-light ">
      <Col md={{order:`last`}}>
        <h4>Tendencias.com</h4>
        <p>Soluciones para las <em>tendencias</em> del mercado digital</p>
      </Col>
      <Col md ></Col>
      <Col md={{order:`first`}}>
      <div className="wrapper">
        <ul className="banner-list">
          <li>Dise&ntilde;o Gr&aacute;fico</li>
          <li>Desarrollo de Aplicaciones</li>
          <li>Administraci&oacute;n del Negocio Online</li>
        </ul>
      </div>
      </Col>
    </Row>
    <div className="blank-space"></div>
    <Container>
        <Row className="align-items-center">
            <Col md>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={pluma}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
              </Col>
            <Col md={8}>
            <h3 className="display-6">Comunicaci&oacute;n Visual y Arte Gr&aacute;fico</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus repellat expedita temporibus?
            </p>
            </Col>
            <Col md>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={vaso}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
            </Col>
        </Row>
   
         
        <Container className="box-shadow">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h4>Conecta</h4></Accordion.Header>
              <Accordion.Body>
                <Row className="align-items-center">
                <Col>
                <h5>Comparte tus ideas de negocio</h5>
                </Col>
                    <Col md>
                    <Image src={people} 
                        className="avatar"
                        fluid/>
                    </Col>
                    <Col><p>Son importantes para entender el sector comercial donde te encuentras</p></Col>
                    </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h4>transforma</h4></Accordion.Header>
              <Accordion.Body>
                <Row>
                    <Col md={4}>
                      <Figure.Image src={GraphDesign} 
                          className="clipboard-rotate20"
                          fluid/>
                      </Col>
                      <Col md>
                      <h6>Creatividad</h6>
                      <p>Tus motivaciones nos hacen entender mejor tu negocio y crear el sello de marca que deseas proyectar</p>
                    </Col>
                    
                  </Row>
              </Accordion.Body>
            </Accordion.Item>

          <Accordion.Item eventKey="2">
              <Accordion.Header><h4>Construye</h4></Accordion.Header>
              <Accordion.Body>
                <Row className="align-items-center">
                  <Col className="border-right"><i className="icon"><BsBookmarkCheck /></i>
                    <p>Con tus redes sociales y una imagen de marca apropiada, tus clientes te reconocen m&aacute;s f&aacute;cilmente en la WWW</p>
                    
                  </Col>
                  <Col className="border-right" md>
                    <Image src={Officialwebsite} fluid/>
                  </Col>
                  <Col><i className="x8-icon"><DiChrome /></i></Col>
                </Row>
              
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><h4>Agrega valor</h4></Accordion.Header>
              <Accordion.Body>
              <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={Addedvalue}
              />
              <Figure.Caption>
               Puedes crear campa&ntilde;as y utilizar todas las ventajas comerciales de la WWW.
              </Figure.Caption>
            </Figure>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
    
        <div className="blank-space"></div>
        <Row className="align-items-center">
            <Col><Figure.Image src={oficial} 
            width={320}
            height={180}
            /></Col>
            <Col md={8}><h3 className="display-6">Administraci&oacute;n de Aplicaciones</h3 >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus repellat expedita temporibus?
            </Col>
        </Row>
       </Container>
      <div className="blank-space"></div>
    </>
    )
}
const Cat = (props =>{return <h5>{props.name}</h5>})
//ABOUT DOM-RENDER
export default function About() 
{
const BgImage = {backgroundImage:`linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${City})`,}
const [modalShow, setModalShow] = React.useState(false);
const handleClose = () => setModalShow(false)
const handleShow = () => setModalShow(true);
React.useEffect(() => {
    document.getElementById("title").innerHTML = "tendencias.com | nosotros"
  });
return (
    <>
      <Header />
        <div style={BgImage} className="background">
          <div className="background-text">
            <Row className="align-items-center">
              <Col><DiAndroid className="lime-icon"/></Col>
              <Col md={6}>
                <h1>Que hacemos</h1>
                <p>Proyectos Web para las <em>Pymes</em></p>
                <button className="btn-banner" onClick={handleShow}>
                <Cat name="Contacto"/>
                </button>
                <Info show={modalShow} onHide={handleClose}/>
              </Col>
              <Col><DiAppstore className="blue-icon"/></Col>
            </Row>
          </div>
        </div>
      <AboutContents />
      <Footer />
    </>
  );
}


