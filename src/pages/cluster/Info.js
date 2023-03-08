
import { Modal, Button, Container, Col, Row, Image } from 'react-bootstrap';


//IMPORT REACT-ICONS
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
//IMPORT COMPONENTS
import SocialNetworks from "../../components/layout/footer/SocialNetworks";
//IMPORT IMAGES
import Phone from './img/phone.png';
import style from './info.module.css'
//MODAL-WINDOW
const Info = (props) => {
  return (
    <Modal {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="bg-color android-theme"><h2 className="colortheme">
            <FiAlertTriangle /> MAS INFO...</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <ContainsInfo />
      <Modal.Footer>
        <i className="icon"><BsTelephoneOutbound />
        </i><h6>Haz click en los &iacute;conos o marca directamente la linea de atenci&oacute;n</h6>
        <Button
          variant="outline-success"
          onClick={props.onHide}><BsTelephoneOutbound />&nbsp;llamar</Button>
        <Button
          variant="outline-dark"
          onClick={props.onHide}><BsWhatsapp />&nbsp;mensaje</Button>
      </Modal.Footer>
    </Modal>
  )
}
const ContainsInfo = () => (
  <div className={style.bgColor}>
    <Modal.Body >
      <Row>
        <Col md={4}><h4>Linea de Atenci&oacute;n</h4>
          <h2 className={style.textVertical}>CONTACTO</h2>
          <div className={style.icontainerDgrid}>
            <a
              className="aref"
              href="tel:6045876725">
              <BsTelephoneOutbound className="icon-phone" />
            </a>
            <a
              className="aref"
              href="https://api.whatsapp.com/send?phone=+573106323631&text=Cordial%20saludo,%20equipo%20de%20vector21%20quisiera%20tener%20una%20asesoria%20para%20comprar%20un%20plan.%20
              ">
              <BsWhatsapp className="network-whatsapp" />
            </a>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Image src={Phone} className="scale-images" fluid />
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
  </div>
)
export default Info;