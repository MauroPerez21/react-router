
import { IoCartOutline } from "react-icons/io5"
import {Image, Navbar, Container} from 'react-bootstrap'

import logo from './logo.svg'

const Header = ({children, getTotalQuantity}) =>
{
  
    return (
      <header>
        <div className="blank-space"></div>
      <Navbar fixed="top">
      <Container>
        <input type="checkbox" id="nav" className="hidden" 
        />
        <label htmlFor="nav" className="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
      <Navbar.Brand href="/">
        <div className="navBrand">
        <Image src={logo} width="48" alt="tiendas_online" />
        <span className="shoppingIcon">
        <IoCartOutline/>
        <small className="exponent">{(getTotalQuantity() === 0)?``:getTotalQuantity()}</small>
        </span>
        </div>
      </Navbar.Brand>
          <div className="nav-wrapper">
            <div className="topnav">
              {children}
            </div>
          </div>
       </Container>
      </Navbar>  
        
      </header>  
    )
}

export default Header;

