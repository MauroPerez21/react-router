import R from 'react'
import data from './components/data'
import Dashboard from '../../components/layout/dashboard'
import {Container, Button} from 'react-bootstrap'
//import TextSlice from '../../utils/text-slice'
//import  './css/project.style.css'
import Card from './cardlayout'
import Pagination from './components/pagination'
import {useState} from 'react'
export default function Projects() {
  document.getElementById("title").innerHTML = "tiendas_online | proyectos"
  const [dashboard, showDashboard] = useState(false)
  const handleClick = ()=>showDashboard(p => !p)

  const [posts, setPosts] = R.useState([])
  const [currentPage, setCurrentPage] = R.useState(1)
  const [postsPerPage, ] = R.useState(2)
  R.useEffect(()=>{
    setPosts(data)
  },[])
  //Get Current Posts
  const indexOfLast = currentPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage
  const currentPosts = posts.slice(indexOfFirst, indexOfLast)
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)
  return (
    <Container>
        <header><h2>Proyectos</h2>
     
        <Button
        variant="outline-dark"
        onClick={handleClick}
        >carrito</Button>

        <h3>Tutor&iacute;as de programaci&oacute;n</h3>
       
        </header> 
        {currentPage * 2}&nbsp;de&nbsp;{posts.length}&nbsp;resultados
        
        <Pagination total={posts.length} 
        perPage={postsPerPage}
        paginate={paginate}/>
     
          <div className="cardContainer">
              {
              currentPosts.map(d=>{return(
              <Card key={d.id} 
              refs={d} 
              />)
              })
          }
          </div>
        <Dashboard
        dashboard={dashboard}
        handleClick={handleClick}
        />
    </Container>
  )
}

