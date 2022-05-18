import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import SocialNetworks from './SocialNetworks'
import star from './star.png'
import helmet from './logo192.png'
const Footer = () => {
    return ( 
    <div className="bg-footer">
        <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}><Image src={star} className="mx-auto" fluid/></Col>
        </Row>   
        <Row className="align-items-center">
            <Col lg>
            <p className="theme-text">Tu negocio en la WWW!</p>
            <ul className="banner-list">
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </Col>
            <Col lg={{ order: 12 }}>
                <p className="theme-text">Mayor info:</p>
                <p className="halloween">Haz click en los &iacute;conos</p>
                <SocialNetworks/>
            </Col>
            <Col lg={{ order: 1 }}><Image src={helmet} className="mx-auto" fluid/></Col>
        </Row>
        <Row>
            <Col md={4}><p className="lime-stone">Medell&iacute;n - Colombia</p > </Col>
            <Col md={{ span: 4, offset: 4 }}><p className="lime-stone">&#169; Todos Los Derechos Reservados - (2022) </p></Col>
        </Row>
        </Container>
    </div> );
}
 
export default Footer;