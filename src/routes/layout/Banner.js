//REACT
import React from 'react';
//REACT-BOOTSTRAP
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//IMAGES
import Paris from './paris.png';
export default function Banner(){
        const background = {
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${Paris})`,
        }   
    return (
        <div style={background} className="background">
            <div className="background-text">
                <Row className="align-items-center">
                    <Col></Col>
                      <Col className="text-center" md={6}>
                        <h1>
                            Blog
                        </h1>    
                      <p>Productos y servicios</p>
                      </Col>
                    <Col></Col>
                </Row> 
            </div>
        </div>
    )
    
}