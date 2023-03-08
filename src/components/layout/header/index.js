
import { Link } from 'react-router-dom'
import { IoIosHome, IoIosPeople} from "react-icons/io"
import Header from './Header'
import {FaBloggerB} from 'react-icons/fa'
import { IoCartOutline } from "react-icons/io5"
import './css/Navstyle.css'
import {useSelector} from 'react-redux'
const Nav = () =>  {
  const post = useSelector((state)=>state.post)
  const posts = post.post
  function getTotalQuantity(){
    let total=0
    posts.forEach(p=>{
      total +=p.qty
    })
    return total
  }
  return (
    <>
    <Header getTotalQuantity={getTotalQuantity}>
        <Link to="/inicio" className="nav-links">
          <IoIosHome />&nbsp;Inicio</Link>
        <Link to="/info" className="nav-links">
          <IoIosPeople />&nbsp;Info</Link>
        <Link to="/blog" className="nav-links">
          <FaBloggerB/>&nbsp;Blog</Link>
        {
          (getTotalQuantity()===0)?
          ``
          :
          <Link to="/shoppings" className="nav-links">
            &nbsp;<IoCartOutline/>
            <small className="exponent">
           {getTotalQuantity()}
            </small>
        </Link>
        }
    </Header>
    </>
  );
}

export default Nav;