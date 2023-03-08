import { useDispatch} from 'react-redux'
import {up, down} from '../../shopping/admin/PostsSlice'

const Counters = ({id,qty}) => {
    const dispatch = useDispatch()
    return ( 

        <div className="countersBtn">
         <button
         onClick = {()=>dispatch(down(id))}
         >-</button>
         <span>&nbsp;&nbsp;{qty}&nbsp;&nbsp;</span>
         <button
         onClick = {()=>dispatch(up(id)) }
         >+</button>
        </div>
       
     
     );
}
 
export default Counters;