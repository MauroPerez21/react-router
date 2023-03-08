
import { useParams } from "react-router-dom";
import {Row,Col} from 'react-bootstrap';
import {background} from '../../../utils/bgimage'
import './css/SubscribeCard.css'
const Product = ({ data }) => { 
  const { productId } = useParams();
  const service = data.find((p) => p.id === Number(productId));
  let productData;
  if (service) {
    productData = (
      <Row >
        <Col></Col>
          <Col md={6} >
            <section className="cardPlan">
              <header className="cardPlanHeader">
                <h2 className="cardPlan__title">
                  {service.name}
                </h2>

                <h2 className="cardPlan__summary">
                  {service.star}
                </h2>
              </header> 
           
              <div className="cardPlan__description bg-light">
                <h2>
                ${service.cost},000/a&ntilde;o
                </h2>
                <ul className="cardPlan__list">
                  <li className="cardPlan__feature">
                    {service.describe}.
                  </li>
                </ul>
                Ejemplo:
                <p className="cardPlan__text">
                Es recomendable en {service.recommend}
                </p> 
            
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