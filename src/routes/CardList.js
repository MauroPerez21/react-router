import React from 'react';
//IMPORT REACT-BOOTSTRAP
//import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
//import Tab from 'react-bootstrap/Tab';
const CardList = ({features, items, title}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [myImage, setMyImage]= React.useState([])
  React.useEffect(()=>{
  (myImage.length === 0)?
  setModalShow(false):
  setModalShow(true)
  },[myImage])

return(
<Container>
   <Row>
    {
         items.map((I)=>{
            return(
              <Col md={4} key={I.ref}>
              <section className="pricing-plan mx-auto">
                <div className="pricing-plan__header">
                  <h2 className="pricing-plan__title">
                    {I.name}
                  </h2>
                  <h2 className="pricing-plan__summary">
                    {I.description}
                  </h2>
                </div>  
                <div className="pricing-plan__description">
                  <ul className="pricing-plan__list">
                    <li className="pricing-plan__feature">Feature #1</li>
                  </ul>
                </div>
                <div className="pricing-plan__actions">
                  <p className="pricing-plan__cost">
                  ${I.price} monthly
                  </p>
                  <p className="pricing-plan__text">
                  {I.subscribe}
                  </p> 
                  <button 
                  className="pricing-plan__button"
                  onClick={() => setMyImage(I.img)}
                  >
                  Purchase
                  </button>
                  <p className="pricing-plan__text">
                    Minimum spend ${I.price} monthly over {I.subscribe}
                    </p> 
                </div>
              </section>
            </Col>
            )
        })
    }
    </Row>
      <ModalInfo
      sample={myImage}
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
</Container>
    );
}
const ModalInfo = (props =>{
  return(
  <Modal {...props} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      My products store
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Image src={props.sample} className="mx-auto" fluid/>
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
})
export default CardList;