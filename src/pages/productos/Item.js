import React, {useState, useEffect} from "react";
//IMPORT REACT-BOOTSTRAP
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//IMPORT REACT-ROUTER-DOM
import { Link, Route, useRouteMatch } from "react-router-dom";
//IMPORT REACT-BOOTSTRAP
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
//IMPORT-COMPONENTS
import Category from './db/Category';
import Available from './db/Available';
import Blog from "./Blog";
import Table from "./Table";
import Container from 'react-bootstrap/Container';
import { IoCartOutline } from "react-icons/io5";
//IMPORT IMAGES
import Logo512 from '../assets/images/logo512.png';
const Products = () => 
{
  const [list, setList ] = useState(false)
  //const handleClose = () => setShowList(false);
  const handleShow = () => setList(prevList => !prevList);
  const { url } = useRouteMatch();  
  useEffect(() => {
    document.getElementById("title").innerHTML = "tendencias.com | precios"
  });
  /* Create an array of `<li>` items for each product */
  const linkList = Category.map((product) => {
    return (
          <li key={product.id}>
            <Link to={`${url}/${product.id}`} className="sidebar" onClick={handleShow}>
              {product.subscribe}
            </Link>
          </li>   
    );
  });
return(
    <>
      <Offcanvas show={list} onHide={handleShow} className="bg-dark text-light">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
        <p className="colortheme"><IoCartOutline className="cart-icon"/> 
        Comprar un plan</p>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="expo-list">
            {linkList}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>      
    <Route path={`${url}/:productId`}>
      <Blog data={Category} handle={handleShow} />
    </Route>
    <Route exact path={url}>
      <p style={{ textAlign: "center" }}>Please select a product.</p>
    </Route>
      <div className="blank-space__x2 bg-color">
      </div>
      
 
      <Row className="align-items-center bg-banner text-light">
        <h2 className="colortheme">Con&eacute;ctate a la WWW</h2>
          <Col md><Image src={Logo512} className="scale-images" fluid/></Col>
          <Col md={8}>
          
            <ul className="expo-list">
              <li><i className="halloween">&#11088;</i> Obten un plan adecuado para tus necesidades</li>
              <li><i className="halloween">&#11088;</i> Configuramos tu imagen de marca en la www</li>
              <li><i className="halloween">&#11088;</i> Atrae clientes potenciales y vende por e-commerce</li>
            </ul>
          </Col>
        </Row>
      <Container>
        <Table products={Available} plans={Category} className="pt-4"/>  
      </Container>
    </>
  );
};
 
export default Products;