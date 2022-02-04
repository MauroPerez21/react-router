import React, { useState, useEffect } from 'react';
//REACT-ROUTER-DOM
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
//REACT-BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
//IMAGES
import London from "./images/london.png";
//COMPONENTS
import BlogFooter from './layout/BlogFooter'

const Item = () => {
                       
  const [blogItem] = useState([
    {title:'shoes', body:'buy beautiful shoes...', price:'$150u.s.'},
    {title:'boots', body:'these boots walk over you...', price:'$200u.s.'},
    {title:'footwear', body:'suck my sockets...', price:'$250u.s.'},
  ])
  const {name} = useParams()
  useEffect(()=>{
    document.getElementById("title").innerHTML = 'Tendencias.com | productos'
  },[blogItem])
  
  const product = blogItem.find((p) => p.title === name); 

  return (
          <Row>
            <Col></Col>
            <Col md={6}>
            <Card >
            <Card.Body>
              <Card.Title><h2 className="display-6">{product.title}</h2></Card.Title>
            </Card.Body>
              <Card.Text>
                {product.body}
              </Card.Text>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
          <Col></Col>
        </Row>
  )
}

export default function Category() 
{
   const background = {
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${London})`,
   
  }
  const Cat = (props =>{
    return <h1>{props.name}</h1>
  })
  const Blog = () => {
    return ( 
      <div>
        <Cat name="Blog"/>
      </div>
    );
  } 
const Sidebar = ()=> 
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Selection = () => 
  {
  const {url} = useRouteMatch()
    return (
          <ul className="expo-list">
              <li>
                <Link to={`${url}/shoes`} className="sidebar">Shoes</Link>
              </li>
              <li>
                <Link to={`${url}/boots`} className="sidebar">Boots</Link>
              </li>
              <li>
                <Link to={`${url}/footwear`} className="sidebar">Footwear</Link>
              </li>
            </ul>
    )
  }
  return (
    <>
      <Button variant="success" onClick={handleShow}
      aria-controls="example-collapse-text"
      >
        <h5>Productos</h5>
      </Button>

      <Button variant="primary" 
      aria-controls="example-collapse-text"
      ><Link to="/bloglist"><h5>Servicios</h5> </Link>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-light">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Selecciona una opci&oacute;n</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Selection />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const {path} = useRouteMatch()
  return (
    <>
        <div style={background} className="background">
              <div className="background-text">
                  <Row className="align-items-center">
                    <Col></Col>
                      <Col className="text-center" md={6}>
                        <h1>
                            <Blog />
                        </h1>    
                        <p>Productos y servicios</p>
                        <Sidebar />
                      </Col>
                      <Col></Col>
                  </Row> 
            </div>
            </div>

        <Container>
        <Route path={`${path}/:name`}>
          <Item  className="text-center"/>
        </Route>
        </Container>
        <BlogFooter />
      </>
  )
}




