import React from 'react'

function Document({items}) {
  
  const [text, setText] = React.useState(``)
  const toShop = items.map(item =>item.id +`-`+item.project +`-cant:` + item.qty)
  const handleSubmit = (e)=>
    {
     
        setText(`https://api.whatsapp.com/send?phone=+573125486792&text=`+toShop) 
        console.log(text)   
              }
  
  return (
    <div>
      {toShop}
    
        <button 
        onClick={handleSubmit}
        >
          <a href={text}>envoyer</a>
        </button>
      
    </div>
  )
}
export default Document