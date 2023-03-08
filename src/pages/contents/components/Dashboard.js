import {Offcanvas, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FaBlogger } from 'react-icons/fa'
const Dashboard = ({...props}) =>(
    <Offcanvas show={props.list} onHide={props.handleShow} className="bg-dark text-light">
      <Goto/>
    <Offcanvas.Body>
      <ul className="expo-list">
        {props.linkList}
      </ul>
    </Offcanvas.Body>
  </Offcanvas> 
  )
  const Goto = ()=>(
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
      <Link to="/blog">
        <Button variant="outline-light">
          <div className="dashboardBtn">
            <FaBlogger/>&nbsp;volver al blog;
          </div>
        </Button>
      </Link>
    </Offcanvas.Title>
    </Offcanvas.Header>
  )
  export default Dashboard