import {add} from '../../shopping/admin/PostsSlice'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import './css/project.style.css'
const Card = ({refs})=>{
  //const today = new Date()
  const {url} = useRouteMatch()
  const dispatch = useDispatch()
return(
    <article className="cardPlan">
        <header
        className="cardHeader"
        >{refs.project}
        </header>
        <img src={refs.url} alt={refs.id}></img>
        <section>  
  
         <h4><em>
          {(refs.price === 'free'?
          `Gratuito`:
          `$`+refs.price+`,000`
          )}
          </em></h4>         
        <p><small>{refs.desc}</small></p>
        <footer>
        <Link to={`/api${url}/${refs.id}`}>
          <button>
          ver&nbsp;{refs.id}
          </button>
          </Link>
          <button
          onClick={()=>
          dispatch(add({
            id:refs.id,
            project:refs.project,
            url:refs.url,
            desc:refs.desc,
            price:refs.price,
            available:refs.available
          }))
          }
          >
            agregar
          </button>
        </footer>
        </section>
    </article>    
)};
export default Card