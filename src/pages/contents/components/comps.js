import Cat from '../../../assets/Cat'
import {useParams} from 'react-router-dom'
import {Col, Button} from 'react-bootstrap'
import React from 'react'

export const BtnContents = ({handleClick})=>(
    <Button className="btn-banner"
    variant="outline-warning"
    onClick={handleClick}
    >
      <Cat name="servicios" />
    </Button>
    )

export const Item = (props => {
        const [product, setProduct] = React.useState([])
        const { ref } = useParams();
        React.useEffect(() => {
          findProduct(props.data)
        })
        const findProduct = (targ) => {
          setTimeout(() => {
            const product = targ.find((p) => p.id === Number(ref));
            (!product) ? <h1>Not found</h1> :
              console.log(product.project)
            setProduct(product)
          }, 1000)
        }
        let thereis;
        (product) ? thereis = (<div className="offer-product">{product.descr}</div>) : thereis = (<h1>Not found</h1>)
        return (
          <>
            <Col className="text-center" md={4}>
              {thereis}
              <div className="halloween">${product.deferral}</div>
            </Col>
            <Col md={4}>
              <div className="App-header">
                <div className="offer-text">Producto {product.status}</div>
                <p className="snow">{product.subscribe} en ${product.deferral},000</p>
                <p className="snow">${product.price},000 mensual</p>
              </div>
            </Col>
          </>
        )
      })

