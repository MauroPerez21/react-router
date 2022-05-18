
//IMPORT REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
//IMPORT REACT-BOOTSTRAP
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//IMPORT IMAGES
import Paris from '../assets/images/paris.png';
const Product = ({ data, handle }) => {

  const background = {
    backgroundImage:`linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${Paris})`,
    } 
  const { productId } = useParams();
  const service = data.find((p) => p.id === Number(productId));

  let productData;
  if (service) {
    productData = (
      <Row >
        <Col></Col>
          <Col md={6} >
            <section className="card-plan mx-auto">
              <div className="card-plan__header">
                <h2 className="card-plan__title">
                  {service.name}
                </h2>
                <h2 className="card-plan__summary">
                  {service.star}
                </h2>
              </div>  
              <div className="card-plan__description bg-light">
                <ul className="card-plan__list">
                  <li className="card-plan__feature">
                    {service.describe}.
                  </li>
                </ul>
                Ejemplo:
                <p className="card-plan__text">
                Es recomendable en {service.recommend}
                </p> 
            
              </div>
              <div className="card-plan__actions bg-light">
                
              <p className="card-plan__cost">
                ${service.cost}/a&ntilde;o
                </p>
                <button className="card-plan__button"
                onClick={handle}
                >
                Items
                </button>
              </div>
            </section>
          </Col>         
        <Col></Col>
      </Row>
    );} else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }
  return (
        <div  style={background} className="background">
          <div style={{width: "80%",margin: "auto"}}>
            {productData}
          </div>
        </div>
  );
};

export default Product;