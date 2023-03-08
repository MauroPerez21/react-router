import R from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {Image, Container, Button} from 'react-bootstrap'
import data from './data'
const CardItem = () => {
    const lastPage = useHistory()
    const [item, setItem] = R.useState([])
 //   const lastPage = useHistory()
    const ref = useParams()
    console.log()
    R.useLayoutEffect(()=>{
        findTheItem(data)
    },[item])
    const findTheItem = (targ)=>{
        const Item = targ.find(i=>i.id === (ref.id))
        setItem(Item)
    }
    return ( <>
    <Container>
      
        {(item.price === "free")?
        <h2>¡Pruebalo gratis!</h2>
        :
        <h2> ${item.price}</h2> 
        }
       
        <Image
        width={240}
        alt={item.project}
        src={item.url}
        fluid
        />
        <h3>#ref:&nbsp;{item.id}</h3>
        <p>{item.desc}</p>
        <Button
        variant="outline-dark"
        onClick={()=>lastPage.goBack()}
        >
            &laquo; volver
        </Button>
    </Container>
    
    </> );
}
 
export default CardItem;