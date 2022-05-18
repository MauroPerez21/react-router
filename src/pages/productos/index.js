import React from 'react'
//IMPORT REACT-ROUTER-DOM
import { Link, Route, useRouteMatch, useParams} from "react-router-dom"
//IMPORT REACT-BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Offcanvas from 'react-bootstrap/Offcanvas'
//IMPORT-IMAGES
import Paris from '../assets/images/paris.png'
//IMPORT-COMPONENTS
import Service from './db/Category'
import Available from './db/Available'
import CardList from './CardList'
import Hash from '../assets/HashLoader'
import Cat from '../assets/Cat'
import { IoCartOutline } from "react-icons/io5"
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
  (product) ? thereis=(<div className="offer-product">{product.description}</div>) : thereis=(<h1>Not found</h1>)
  return(
          <>
            <Col className="text-center" md={4}>
                {thereis} 
                <div className="halloween">${product.deferral}</div>
            </Col>
            <Col md={4}>
              <div className="App-header">
                <div className="offer-text">Producto {product.status}</div>
                  <p className="snow">{product.subscribe} en ${product.deferral},000</p>
                  <p className="snow">${product.price},000 mensual</p>
              </div> 
            </Col>
          </>
      )
})
const LinkedList = () => 
{
   
  const [loading, isLoading] = React.useState(true)
  React.useEffect(() => {
    document.getElementById("title").innerHTML = "tendencias.com | blog"
      setTimeout(()=>{
      isLoading(false)
    },2000)    
  },[loading]);
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
              {loading?
              <div className="loader_active">
              <Hash /> 
             </div>:
             <>
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
                                <Cat name="servicios"/>
                              </button>
                          </Col>
                        </Row> 
                      </div>
                    </div>
                  </Route>
                  
                  <div className="blank-space bg-dark">
                    <Row>
                    <Col md={8}></Col>
                    <Col md={4}><h3>Tendencias.com</h3></Col>
                    </Row>
                    </div>  
                    <Offcanvas show={showList} onHide={handleClose} className="bg-dark text-light">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>
                      <p className="colortheme"><IoCartOutline className="cart-icon"/> 
                      Selecciona una opci&oacute;n</p>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                      <button
                      onClick={()=>setHandleList(handleProduct)}
                      aria-controls="example-collapse-text"
                      className="btn-aside"
                      >
                      <em>Productos</em>
                      </button>
                      <button 
                      className="btn-aside" 
                      onClick={()=>setHandleList(handleService)}
                      aria-controls="example-collapse-text"
                      >
                      <em>Subscripci&oacute;n</em>
                      </button>
                    <Offcanvas.Body>
                      <ul className="expo-list">
                        {handleList} 
                      </ul>
                    </Offcanvas.Body>
                    </Offcanvas>
                <CardList items={Available}/>
             </>
            }
              </>
      )
}
export default LinkedList;