//REACT-BOOTSTRAP
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image'
//IMPORT-IMAGES
import City from './img/london.png';
import Mobile from './img/mobile.png';
import People from './img/people.png';
import World from './img/world.png';
import Diamond from './img/flickr/pngaaa.com-2515427.png';
import Sea from './img/SEA.png'
//REACT-ICONS
import { DiAndroid } from "react-icons/di";
import { DiAppstore } from "react-icons/di";
//IMPORT-COMPONENTS
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import TopButton from './Layout/TopButton';
import Example from './Layout/Example';
import Intro from './Layout/Intro';
//IMPORT-VIDEO
import myVideo from './video/city.mp4';

//PROTECTED CONSTANTS
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
       <Figure>
        <Figure.Image
          className="scale-images"
          alt="171x180"
          src={Mobile}
        />
         <h3 className="display-6">Aplicaciones m&oacute;viles</h3>
    
        <Figure.Caption>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
        </Figure.Caption>
      </Figure>

     </Col>
     <Col className="text-center" md>
       <h3 className="display-6">Tiendas online</h3>
     <Figure>
        <Figure.Image
          className="scale-images"
          alt="171x180"
          src={People}
        />
        <Figure.Caption>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
        </Figure.Caption>
      </Figure>
     </Col>
     <Col className="text-center" md>
       <h3 className="display-6">Imagen corporativa</h3>
       <Figure.Caption>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
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
      <p>Construimos aplicaciones a la medida para independientes, emprendedores y micro-empresarios</p> 
      <Image src={Diamond} className="scale-images" fluid/>
      <Example />
    </div>
    </Col>
  </Row>
</Container>
<div className="blank-space"></div>
  <TopButton />
  </>
)
}
const Cat = (props =>{return <h5>{props.name}</h5>}) 
//HOME DOM-RENDER
export default function Home() 
{
const [open, setOpen] = React.useState(false);
const BgImage = {
  backgroundImage:
  `linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${City})`,
}

React.useEffect(() => {
  document.getElementById("title").innerHTML = "tendencias.com | inicio"
  //rotate_string()
});
return (
      <>
      <Header />
      <div style={BgImage} className="background">
        <div className="background-text">
            <Row className="align-items-center">
                <Col><DiAppstore className="blue-icon"/></Col>
                <Col md={6}>
                    <h1>www.tendencias.com</h1>    
                    <p>Desarrollo de Sitios Web y Aplicaciones M&oacute;viles</p>
                      <button className="btn-banner"
                      onClick={() => setOpen(!open)}
                      >
                      <Cat name="leer más"/>
                      </button>
                      <Collapse in={open}>
                        <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </Collapse>
                </Col>
                <Col><DiAndroid className="lime-icon"/></Col>
            </Row> 
        </div>
      </div>        
      <div className="curly">
        <Row>
          <Col md={8}></Col>
          <Col md={4}><h4>Tendencias.com</h4>
          </Col>
        </Row>
      </div>
      <HomeBody />
      <Footer />
      </>
  );
}


