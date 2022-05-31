import React from 'react'
export default function Article() {
    const Tick = () => {
        const [integer, setInteger] = React.useState(null)
        React.useLayoutEffect(()=>{
            const timerId = setInterval(()=>{
                let n = 1
                if (n > 3) {
                n = 1
                }
                setInteger(n)
                console.log(setInteger)
              
            },1000)
        },
        [integer])
        

        return ( <>
        </> );
    }
     
    
  
}
 
