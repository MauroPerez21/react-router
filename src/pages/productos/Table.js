
export default function Table(props){
  /*
  const products = props.products.map(x =>{
    return(
      <th>
        {x.name}
      </th>
    )
  })
  const plans = props.plans.map(y =>{
    return(
      <>
      {(y.features.whatsapp === true)? <p>&#10004;</p>: <p>&#10006;</p>}
      </>
    )
  })
  */
    return(
        <>
  <table className="table">
    <thead>
      <tr>
        <th>Item</th>
        <th>P&aacute;gina de aterrizaje</th>
        <th>E-commerce</th>
        <th>Sitio Web Oficial</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Item">Whatsapp</td>
        <td data-label="Pagina de aterrizaje">&#10004;</td>
        <td data-label="E-commerce">&#10004;</td>
        <td data-label="Sitio Web Oficial">&#10004;</td>
       
   
      </tr>
      <tr>
        <td data-label="Item">Tel&eacute;fono</td>
        <td data-label="Pagina de aterrizaje">&#10004;</td>
        <td data-label="E-commerce">&#10004;</td>
        <td data-label="Sitio Web Oficial">&#10004;</td>
        
      
      </tr>
      <tr>
        <td data-label="Item">Emails</td>
        <td data-label="Pagina de aterrizaje">&#10006;</td>
        <td data-label="E-commerce">&#10006;</td>
        <td data-label="Sitio Web Oficial">&#10004;</td>
        
      
      </tr>
      <tr>
        <td data-label="Item">Cat&aacute;logo</td>
        <td data-label="Pagina de aterrizaje">&#10006;</td>
        <td data-label="E-commerce">&#10004;</td>
        <td data-label="Sitio Web Oficial">&#10004;</td>
       
        
      </tr>
      <tr>
        <td data-label="Item">Status</td>
        <td data-label="Pagina de aterrizaje">[ disponible ]</td>
        <td data-label="E-commerce">[ disponible ]</td>
        <td data-label="Sitio Web Oficial">[ no disponible ]</td>
        
       
      </tr>
      <tr>
        <td data-label="Item" className="text-center">#</td>
        <td data-label="Pagina de aterrizaje"><button className="pricing-plan__button">Comprar</button></td>
        <td data-label="E-commerce"><button className="pricing-plan__button">Comprar</button></td>
        <td data-label="Sitio Web Oficial"><button className="pricing-plan__button">Comprar</button></td>
        
    
      </tr>
      </tbody>
  </table>
        </>
    )
}