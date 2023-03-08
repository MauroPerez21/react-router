import {Offcanvas, Button} from 'react-bootstrap'
import {ImBlogger} from 'react-icons/im'
import {IoStorefrontSharp} from 'react-icons/io5'
import { IoCartOutline } from "react-icons/io5"
import ShoppingList from './shopping-list'
import {useState} from 'react'
import Service from './db/Category'
import Available from './db/Available'
import {Link, useRouteMatch} from 'react-router-dom'
import './header/css/dashboard.css'

const Dashboard = ({...props})=>{
  const { url } = useRouteMatch();
  const [list, setList] = useState([]) 
  const handleProduct = Available.map((link) => {
    return (<li key={link.id}>
      <Link to={`${url}/${link.id}`}
        onClick={props.handleClick}
        className="sidebar" >
        {link.project}
      </Link>
    </li>)
  });

  const handleService = Service.map((link) => {
    return (<li key={link.id}>
      <Link to={`/bloglist/${link.id}`}
        onClick={props.handleClick}
        className="sidebar">
        {link.subscribe}
      </Link>
    </li>)
  });


return(
(<>
    <Offcanvas show={props.dashboard} onHide={props.handleClick} className="bg-dark text-light">
      <Goto/>
      <hr/>        <button
        onClick={()=>setList(handleProduct)}
        className="btn-aside"
        >
        <em>Productos</em>
      </button>
  
      <button 
        className="btn-aside" 
        onClick={()=>setList(handleService)}
        >
        <em>Subscripci&oacute;n</em>
      </button>

      <Link to="/projects">
      <button
      className="btn-aside"
      ><ImBlogger/>&nbsp;
      <em>Blog</em>
      </button>
      </Link>
      
    <Offcanvas.Body>

    <ul className="expo-list">
      {list} 
    </ul>
      <hr/>
      <Link to="/shoppings">
      <Button
      variant="outline-light"
      >
       <IoCartOutline className="cart-icon"/>&nbsp;
      </Button>
      
      </Link>
      
      
      <br/>
      <ShoppingList/>
    </Offcanvas.Body>
    </Offcanvas>
</>)
    
  )}
    const Goto = ()=>(
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Link to="/bloglist">
          <Button variant="outline-light">
            <div className="dashboardBtn">
            <IoStorefrontSharp/>&nbsp;ver planes
           </div>
          </Button>
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>
    )

  export default Dashboard