
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
//IMPORT REACT-ICONS
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneOutbound }  from "react-icons/bs";
import { FiAlertTriangle} from "react-icons/fi";
//IMPORT COMPONENTS
import SocialNetworks from "./SocialNetworks";
//IMPORT IMAGES
import Phone from '../img/phone.png';

//MODAL-WINDOW
const Info = (props)=>{
    return(
    <Modal {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <div className="bg-color android-theme"><h2 className="text-muted"><FiAlertTriangle /> MAS INFO...</h2></div>
      <Modal.Body className="text-center bg-color text-light">
          <Row>
            <Col md={4}><h4>Linea de Atenci&oacute;n</h4>
              <h2 className="text-vertical">CONTACT</h2>
              
              <div className="icons-container__d-grid">
                
                  <a 
                  className="aref icons-container__items"
                  href="tel:6045876725">
                  <BsTelephoneOutbound className="icon-phone"/>
                  </a>
                 
                  <a 
                  className="aref icons-container__items"
                  href="https://api.whatsapp.com/send?phone=+573106323631">
                    <BsWhatsapp className="network-whatsapp" />
                  </a>
                

                </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
            <Image src={Phone} className="scale-images" fluid/>
            </Col>
          </Row>
    <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h5>Redes Sociales</h5>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><SocialNetworks />
            <p className="text-muted">www.tendencias.com</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body> 
      <Modal.Footer>
        <i className="icon"><BsTelephoneOutbound /></i><h2>310 632 3631</h2></Modal.Footer>
    </Modal>
      )
    }
export default Info;