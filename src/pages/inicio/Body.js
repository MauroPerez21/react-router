import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image'
//IMPORT-IMAGES

import Mobile from './img/mobile.png';
import People from './img/people.png';
import World from './img/world.png';
import Diamond from './img/pngaaa.com-2515427.png';
import Sea from './img/SEA.png'

//IMPORT-COMPONENTS
import Intro from './Intro';
//IMPORT-VIDEO
import myVideo from './city.mp4';
//HOME BODY
const HomeBody = () =>{
    //Css Styles
    const BgFooter = {
      backgroundImage:`url(${Sea})`
    }
    return(
      <>
      <div className="blank-space"></div>
      <Container className="box-shadow mt-2 pb-0">
       <Row>
         <Col className="text-center" md>
           <h4 className="display-6">Aplicaciones m&oacute;viles</h4>
           <Figure>
            <Figure.Image
              className="scale-images"
              alt="171x180"
              src={Mobile}
            />
             
        
            <Figure.Caption>
                Soluciones tecnol&oacute;gicas en la telefon&iacute;a m&oacute;vil.
            </Figure.Caption>
          </Figure>
    
         </Col>
         <Col className="text-center" md>
           <h4 className="display-6">Tiendas online</h4>
         <Figure>
            <Figure.Image
              className="scale-images"
              alt="171x180"
              src={People}
            />
            <Figure.Caption>
                  El E-commerce es una gran alternativa para muchos micro-empresarios, 
                  con tecnolog&iacute;a de respaldo y seguridad inform&aacute;tica.
            </Figure.Caption>
          </Figure>
         </Col>
         <Col className="text-center" md>
           <h4 className="display-6">Imagen corporativa</h4>
           <Figure.Caption>
              <p>A&uacute;n no tienes imagen de marca?</p>  
              <p>Comienza ya con un plan b&aacute;sico y escala hacia nuevas tecnolog&iacute;as de desarrollo.</p>  
            </Figure.Caption>
            <Figure>
              <Figure.Image
                className="scale-images"
                alt="171x180"
                src={World}
              /> 
          </Figure>
          
         </Col>
       </Row>
      
      <Row className="align-items-center background-footer" style={BgFooter}>
        
        <Col md={6}>
          <div className="wrapper-container">
          <div className="video-container">
            <Intro />
            <video autoPlay loop muted
              style={{
                width:"100%"
                }}
              >
                <source src={myVideo} type="video/mp4"/>
              </video>
          </div> 
          </div>
        </Col>
    
        <Col>
        <div className="wrapper-container">
          <p>Con un plan b&aacute;sico, se dise&ntilde;a tu logo y complementas el marketing digital en redes! </p> 
          <Image src={Diamond} className="scale-images" fluid/>
        </div>
        </Col>
      </Row>
    </Container>
    <div className="blank-space"></div>
      
      </>
    )
    }
    export default HomeBody;
   