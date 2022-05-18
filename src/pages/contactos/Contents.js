//CONTENTS-BODY
import React from 'react';
//IMPORT-REACT-BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
//REACT-ICONS
import { BsBookmarkCheck } from "react-icons/bs";
import {DiChrome} from "react-icons/di";
//IMPORT-IMAGES
import people from "./img/pngaaa.com-2106915.png"
import GraphDesign from "./img/pngaaa.com-2515423.png";
import Officialwebsite from "./img/pngaaa.com-2515331.png";
import Addedvalue from "./img/pngaaa.com-2106980.png";
import pluma from "./img/pngaaa.com-2515386.png";
import vaso from "./img/pngaaa.com-989975.png";
import oficial from "./img/pngaaa.com-989990.png"

const Contents = () => {
    return(<>
      <Row className="bg-color text-light ">
        <Col md={{order:`last`}}>
          <h3>Tendencias.com</h3>
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
                  Modelar
                </Figure.Caption>
              </Figure>
                </Col>
              <Col md={8}>
              <h3 className="display-6">Comunicaci&oacute;n Visual y Arte Gr&aacute;fico</h3>
              <p> Proyectar una imagen con armon&iacute;a y equlibrio requiere de herramientas tecnol&oacute;gicas
                y una excelente dise&ntilde;o, donde el modelado y prototipado agregan <em>valor</em> e <em>imagen</em> a los proyectos. 
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
                  Prototipar
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
                        <h5>Creatividad</h5>
                        <p>Proyecta tu negocio en la nube de acuerdo a expectativas y <em>tendencias</em> propias del desarrollo digital.</p>
                      </Col>
                      
                    </Row>
                </Accordion.Body>
              </Accordion.Item>
  
            <Accordion.Item eventKey="2">
                <Accordion.Header><h4>Construye</h4></Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                    <Col className="border-right"><i className="icon"><BsBookmarkCheck /></i>
                      <p>Complementando las redes sociales y una imagen de marca apropiada, ser&aacute;s mejor reconocido con tus clientes potenciales en la WWW</p>
                      
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
                
                 <p>Puedes crear campa&ntilde;as y utilizar todas las ventajas comerciales de la WWW.</p>
                
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
              Un negocio digital en manos responsables y <em> permanente actualizaci&oacute;n </em> de nuevas tecnolog&iacute;as.
              </Col>
          </Row>
         </Container>
        <div className="blank-space"></div>
      </>
      )
  }
  export default Contents