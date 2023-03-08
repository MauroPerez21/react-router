import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../../shopping/admin/PostsSlice'
import {Button} from 'react-bootstrap'
function ShoppingList() {
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.post)
    const myShoppings = cart.post
    
    const mapMyShoppings = myShoppings.map(s=>(
       <li key={s.id}>
            Me interesa:&nbsp;<q>{s.project}</q><br/>
            Valor:&nbsp;
            {(s.price === "free")?
            `¡Es gratis!`
            :
            `$` + s.price +`,000`
            }
            <br/>
            <Button
            variant="outline-light"
                onClick={()=>
                    dispatch(remove({id:s.id}))
                }
                >
                    descartar
                </Button>
            </li>
    ))
    return ( 
    <ul>
        {mapMyShoppings}
    </ul>
        
    );
}
 
export default ShoppingList;