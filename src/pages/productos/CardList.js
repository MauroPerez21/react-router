import React from 'react';
//IMPORT REACT-BOOTSTRAP
//import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import Image from 'react-bootstrap/Image';
//IMPORT-COMPONENTS
import Hash from '../assets/HashLoader'

//import Tab from 'react-bootstrap/Tab';
const CardList = ({features, items, title}) => {
  
  const [modal, setModal] = React.useState(false);
  const [myImage, setMyImage]= React.useState([])
  React.useEffect(()=>{
    
  (myImage.length === 0)?
  setModal(false):
  setModal(true)
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
                    <li className="pricing-plan__feature">Producto #{I.ref}</li>
                  </ul>
                </div>
                <div className="pricing-plan__actions">
                  <p className="pricing-plan__cost">
                  ${I.price}/mes
                  </p>
                  <p className="pricing-plan__text">
                  {I.subscribe}
                  </p> 
                  <button 
                  className="pricing-plan__button"
                  onClick={() => setMyImage(I.img)}
                  >
                  Comprar
                  </button>
                  <p className="pricing-plan__text">
                    Gasto m&iacute;nimo de ${I.price}/mes en {I.subscribe}
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
      show={modal}
      onHide={() => setModal(prevModal => !prevModal)}
      />
</Container>
    );
}
const ModalInfo = (props =>{

  const [loading, isLoading] = React.useState(true)
  React.useLayoutEffect(
    ()=>{
      setTimeout(()=>{
        isLoading(false)
      },2000)
    },[loading]
  )
  return(
  <Modal {...props} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      Mi Tienda
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {
        loading ? 
              <Hash /> 
             :
             <Image src={props.sample} className="mx-auto" fluid/>
      }
    
    </Modal.Body>
    <Modal.Footer>
    <button className="card-plan__button" onClick={props.onHide}>Salir</button >
    </Modal.Footer>
  </Modal>
  )
})
export default CardList;