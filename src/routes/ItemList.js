import React from 'react';
//IMPORT REACT-ROUTER-DOM
import { Link, Route, useRouteMatch, useParams} from "react-router-dom";
//IMPORT REACT-BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
//IMPORT-IMAGES
import Paris from './images/paris.png';
//IMPORT-COMPONENTS
import Blogfooter from '../components/Layout/Footer';
import Service from './db/Category';
import Available from './db/Available';
import CardList from './CardList';
import Header from '../components/Layout/Header';
import { IoCartOutline } from "react-icons/io5";
const Item = ( props => 
{ 
  const [product, setProduct] = React.useState([])
  const { ref } = useParams();
  React.useEffect(()=>{
    findProduct(props.data)
  })
  const findProduct = (targ)=>{
    setTimeout(()=>{
      const product = targ.find((p) => p.ref === Number(ref));
      (!product) ? <h1>Not found</h1> : 
      console.log(product.name)
      setProduct(product)
    },1000)
  }
  let thereis;
  (product) ? thereis=(<h2 className="text-danger">{product.description}</h2>) : thereis=(<h1>Not found</h1>)
  return(
          <>
            <Col className="text-center" md={4}>
                {thereis} 
                <h6 className="text-primary">${product.deferral}</h6>
            </Col>
            <Col md={4}>
              <div className="App-header">
                <h3 className="text-warning">Product is {product.status}</h3>
                <h4>{product.subscribe} at ${product.deferral},000</h4>
                <h5>${product.price},000 per month</h5>
              </div> 
            </Col>
          </>
      )
})
const LinkedList = () => 
{
  React.useEffect(() => {
    document.getElementById("title").innerHTML = "tendencias.com | blog"
  });
    const [showList, setShowList ] = React.useState(false)
    const handleClose = () => setShowList(false);
    const handleShow = () => setShowList(true);
    //const list = useState(Available)
    const {url} = useRouteMatch(); 
    const background = {
      backgroundImage:`linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${Paris})`,
      } 
    /* Create an array of `<li>` items for each link */
    const handleProduct = Available.map((link) => {
      return(<li key={link.ref}>
                <Link to={`${url}/${link.ref}`}
                onClick={handleClose}
                className="sidebar" >
                  {link.name}
                </Link>
              </li>)
    });
    const handleService = Service.map((link)=>{
      return (<li key={link.id}>
                <Link  to={`/bloglist/${link.id}`} onClick={handleClose}
                className="sidebar">
                  {link.subscribe}
                </Link>
              </li>)
    });

    const [handleList, setHandleList] = React.useState([handleProduct])
      return (
              <>
                <Header />
                  <Route path={`${url}`}>
                    <div style={background} className="background">
                      <div className="background-text">
                        <Row className="align-items-center">
                          <Route path={`${url}/:ref`}>
                            <Item data={Available} handle={handleShow}/>
                          </Route>
                          <Col md={{ order:"first"}}>
                            <h1>Blog</h1>
                              <p>¡Compra un Plan y Escala tu Negocio!</p>
                              <button className="btn-banner"
                              onClick={handleShow}
                              >
                                <h5>Servicios</h5>
                              </button>
                          </Col>
                        </Row> 
                      </div>
                    </div>
                  </Route>
                  
                  <div className="blank-space bg-dark">
                    <Row>
                    <Col md={8}></Col>
                    <Col md={4}><h4>Tendencias.com</h4></Col>
                    </Row>
                    </div>  
                    <Offcanvas show={showList} onHide={handleClose} className="bg-dark text-light">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title><h5><IoCartOutline className="cart-icon"/> Selecciona una opci&oacute;n</h5></Offcanvas.Title>
                    </Offcanvas.Header>
                      <Button variant="primary" onClick={()=>setHandleList(handleProduct)}
                      aria-controls="example-collapse-text"
                      >
                      <h5>Productos</h5>
                      </Button>
                      <Button variant="success" onClick={()=>setHandleList(handleService)}
                      aria-controls="example-collapse-text"
                      >
                      <h5>Planes</h5>
                      </Button>
                    <Offcanvas.Body>
                      <ul className="expo-list">
                        {handleList} 
                      </ul>
                    </Offcanvas.Body>
                    </Offcanvas>
                <CardList items={Available}/>
                <Blogfooter />
              </>
      )
}
export default LinkedList;