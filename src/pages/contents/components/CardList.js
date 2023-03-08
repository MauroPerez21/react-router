import React from 'react';
import {Container, Col, Row, Modal, Image, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {add} from '../../../shopping/admin/PostsSlice'
import './css/modal.css'
export default function CardList({items}){
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
              <Col md={4} key={I.id}>
              <section className="cardPlan mx-auto">
                <div className="cardPlanHeader">
                  <h2 className="cardPlan__title">
                    {I.project}
                  </h2>
                  <h2 className="cardPlan__summary">
                    {I.desc}
                  </h2>
                </div>  
                <div className="cardPlan__description">
                  <ul className="cardPlan__list">
                    <li className="cardPlan__feature">Producto #{I.id}</li>
                  </ul>
                </div>
                <div className="cardPlan__actions">
                  <p className="cardPlan__cost">
                  ${I.price},000/mes
                  </p>
                  <p className="cardPlan__text">
                  {I.subscribe}
                  </p> 
                  <button 
                  className="cardPlan__button"
                  onClick={() => setMyImage({id:I.id, project:I.project,url:I.url, desc:I.desc,price:I.price})}
                  >
                  mostrar
                  </button>
                  <p className="cardPlan__text">
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
  const dispatch = useDispatch()
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
      Mi Tienda: <p>{props.sample.project}</p>
    </Modal.Title>
    </Modal.Header>
      <Modal.Body>
        {
          loading ? 
              <p>Loading...</p>
              :
              <div className="flex-container">
                <Image 
                src={props.sample.url} 
                alt={props.sample.project}
                width={480}
                fluid/>
              </div>      
        }
      
      </Modal.Body>
    <Modal.Footer>
      <Button 
      variant="outline-danger"
      onClick={props.onHide}>salir</Button>
      <Button 
      variant="outline-success"
      onClick={()=>
        dispatch(add({
          id:props.sample.id,
          project:props.sample.project,
          url:props.sample.url,
          desc:props.sample.desc,
          price:props.sample.price,
          available:props.sample.available
        }))
        }
      >comprar</Button>
    </Modal.Footer>
  </Modal>
  )
})

