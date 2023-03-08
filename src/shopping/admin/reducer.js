
import ACTION from './actions'
//import {useSelector} from 'react-redux'
export default function reducer(state=[], action )
{
    switch(action.type){
            case ACTION.ADD:
                const itemInCart = state.post.find((i) => 
                i.id === action.payload.id);
                itemInCart?
                itemInCart.qty++ :
                state.post.push({...action.payload, qty: 1}) 
            break; 
            case ACTION.REMOVE:
                    const removeItem = state.post.filter((i)=>i.id !== action.payload.id)
                    state.post = removeItem
            break;
            case ACTION.INCREASE:
                const postUp = state.post.find((p)=>p.id === action.payload)
                postUp.qty++
            break;
            case ACTION.DECREASE:
                console.log(action.payload)
                const postDown = state.post.find((p)=>p.id === action.payload)
                postDown.qty === 1?
                postDown.qty = 1:
                postDown.qty--
            break;
            case ACTION.FILTER:
               // const items = 
//console.log(action.payload.catg)
//console.log(action.payload.posts)
const things = action.payload.posts
const filters = things.filter((t)=>t.catg === action.payload.catg)
console.log(filters)
//posts.map((i) => console.log(i.title))
                
            break;
            default: return state
    }
}
