
import Container from 'react-bootstrap/Container';
import { IoIosHome} from "react-icons/io";
import { IoIosPeople} from "react-icons/io";
import { IoMdClipboard} from "react-icons/io";
import Image from 'react-bootstrap/Image';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
  return (
    <>
      <Navbar fixed="top">
      <Container>
        <input type="checkbox" id="nav" className="hidden" 
        />
        <label htmlFor="nav" className="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <Navbar.Brand href="#home"><Image src={logo} /></Navbar.Brand>
        <div className="nav-wrapper">
          <div className="fixed-nav">
            <div className="topnav">
                <Link to="/" 
                className="nav-links"
                ><IoIosHome />&nbsp;Inicio</Link>
                <Link to="/about" 
                className="nav-links"><IoIosPeople />&nbsp;Nosotros</Link>
                <Link to="/blog" 
                className="nav-links"><IoMdClipboard/>&nbsp;Blog</Link>
            </div>
          </div>
        </div>
      </Container>
      </Navbar>     
    </>
  );
}

export default Nav;