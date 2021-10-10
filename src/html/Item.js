import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
function Item({match}) {
  useEffect(()=>{
    fetchItem()
    const id = match.params.id
    console.log(id)
  },[]);
  const [item, setItem] = useState([])
  const fetchItem = async()=>{
      const fetchItem = await fetch('./items.json')
      const item = await fetchItem.json()
      setItem(item)
      console.log(item)

  }
  return (
    
    <div>
      <h1>Item page</h1>
      
    </div>
  );
}

export default Item;