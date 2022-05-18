//IMPORT-REACT-ICONS-BOOTSTRAP

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Networks = ()=>{
    return(
        <div className="icons-container">  
            <div className="icons-container__d-flex">
                <a className="aref" href="https://www.facebook.com/mauricio.b.perez.982/"><BsFacebook className="network-facebook"/></a>
                <a className="aref" href="https://www.linkedin.com/in/mauricio-b-p%C3%A9rez-6a1ba9181/"><BsLinkedin className="network"/></a>
                <a className="aref" href="https://github.com/MauroPerez21"><BsGithub className="network-wine"/></a>
            </div>  
        </div>);
          }  
export default Networks;