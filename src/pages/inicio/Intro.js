import React from 'react';
export default function About() {

  return (
    <div>
      <Articulo />
    </div>
  );
}
var n = 0
var items = ["Diseño Gráfico","Aplicaciones Móviles", "Sitios Web"]

class Articulo extends React.Component
{
  constructor(props)
  {
    super(props)
  
    this.state = {item: ""}
  }
  
  componentDidMount()
  {
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
      )
  }
  componentWillUnmount()
  {
    clearInterval(this.timerID)
  }
  
  tick()
  {
    n++
    if(n > 3)
    {
      n = 1
    }
    //console.log( )
    this.setState(
      {item: items[n-1]}
    )
  }
  render()
  {

    return(
            <h2 className="theme-text">{this.state.item}</h2>   
    );
  }
}

