import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
function Shop() {
  useEffect(()=>{
    fetchIcons()
  },[]);
  const [items, setItems] = useState([])
  const fetchIcons = async()=>{
    const data = await fetch("./items.json")
    const items = await data.json()
    console.log(items)  
    setItems(items)
  }
  return (
    
    <div>
      <h1>Shop page</h1>
      {items.map(item=>(
        <h4 key={item.id}>
        <Link to={`/shop/${item.id}`}>{item.type}</Link>
        </h4>
      ))}
    </div>
  );
}

export default Shop;