import React from 'react'
import style from '../css/pagination.module.css'
//import { Pagination as AZ } from 'react-bootstrap'
const Pagination = ({total, perPage, paginate}) => {
    const pageNumbers = []
    const last = Math.ceil(total/perPage)
    for(let i = 1; i <= last ;i++){
      pageNumbers.push(i)   
    }
const Indexing = pageNumbers.map(number=>(
<li key={number} className={style.pageLinks}>
    <button 
    onClick={()=>paginate(number)}
    >{number}</button>
</li>
))
   //console.log(total/perPage)
return (
    <div className={style.pageListContainer}>
        <ul className={style.pageList}>
            <li
            onClick={()=>paginate(1)}
            >
                <button>&laquo;</button>
            </li>
                {Indexing}
            <li>
                <button
            onClick={()=>paginate(last)}
                >&raquo;</button>
            </li>
        </ul>
    </div>
    
  )
  
}
export default Pagination
