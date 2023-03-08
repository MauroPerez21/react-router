import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row, Col,Button} from 'react-bootstrap'
import {HiOutlineTrash} from 'react-icons/hi'
import {FaCartArrowDown} from 'react-icons/fa'
import {remove} from '../../shopping/admin/PostsSlice'
import Counters from './Counters'
import Icons from './Icons'

export default function Payments() {  
  document.getElementById("title").innerHTML = "tiendas_online | solicitudes"
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.post)
    const myShoppings = cart.post
    const [text, setText] = React.useState(``)
    const toShop = myShoppings.map(item => `\t`+item.id +`-`+item.project +`-cant:` + item.qty)
    const handleSubmit = (e)=>
      {
       
          setText(`https://api.whatsapp.com/send?phone=+573106323631&text=`+toShop) 
          console.log(text)   
                }
    function getAll(){
        let total=0
        myShoppings.forEach((p)=>{
            total +=p.qty
        })
        return total
    }
const shops = myShoppings.map(s=>(
    <tr key={s.id}>
        <td data-label="ID">{s.id}</td>
        <td data-label="ARTICULO">{s.project}</td>
        <td data-label="CANTIDAD"><Counters id={s.id} qty={s.qty}/></td>
        <td data-label="VALOR">

            {(s.price === `free`)?
            `Es gratuito`
            :
            `$`+s.price * s.qty +`,000`
            }

        </td>       
        <td data-label="PAPELERA">
            <button
            className="countersTrash"
            onClick={()=>dispatch(remove({id:s.id}))}
            >
              <i><HiOutlineTrash/></i> 
            </button>
        </td>
    </tr>
)) 
  return (
<Container> 
    <Header/>
    <Row>
    <Col>
      <Icons/>
      <i className="facartarrowdown"><FaCartArrowDown/></i>   
      {
        (getAll() === 0)?
        <p>No se han descargado art&iacute;culos</p>:
        <>
        <p>Se han descargado {getAll()} art&iacute;culos.</p>
        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Art&iacute;culo</th>
            <th>Cantidad</th>
            <th>Valor</th>
            <th>Papelera</th>
          </tr>
        </thead>
        <tbody>
          {shops}
          </tbody>
        </table>
        <Button
      
        variant="outline-dark"
        onClick={handleSubmit}
        >
          <a
          href={text}
          >enviar</a>
          
        </Button>
      <Icons/>
        </>
      }  
    </Col>
  </Row>
</Container>
  )
}
const Header = ()=>(
    <header>
      <h2>Descargas</h2>
      <h3>Mis intereses</h3>
     
    </header>
)
