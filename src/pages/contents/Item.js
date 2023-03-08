import React, {useState, useEffect} from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Category from '../../components/layout/db/Category';
import Available from '../../components/layout/db/Available';
import Blog from "./components/Blog";
import Table from "./components/Table";
import Dashboard from './components/Dashboard'
import {Container, Button, Image, Row, Col} from 'react-bootstrap'

import Logo512 from '../../assets/images/logo512.png';
const Ad = ({handleShow})=>(
  <Row className="align-items-center bg-banner text-light">
       <Col>
        <Image src={Logo512} className="scale-images" fluid/>
        </Col>
        <Col md>
          <p>Comprar un plan</p>
            <Button
            variant="success"
            onClick={handleShow}
            >
            mostrar
            </Button>
        </Col>
        <Col md>
        
        <ul className="expo-list">
          <li><i className="halloween">&#11088;</i> Obten un plan adecuado para tus necesidades</li>
          <li><i className="halloween">&#11088;</i> Configuramos tu imagen de marca en la www</li>
          <li><i className="halloween">&#11088;</i> Atrae clientes potenciales y vende por e-commerce</li>
        </ul>
      </Col>
      </Row>
      
      )

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
      <Dashboard list={list} handleShow={handleShow} linkList={linkList}/>
      <Route path={`${url}/:productId`}>
      <Blog data={Category} handle={handleShow} />
      </Route>
      <Ad handleShow={handleShow}/>
      <Container>
        <Table 
          products={Available} 
          plans={Category} 
          className="pt-4"/>  
      </Container>
    </>
  );
};

export default Products;