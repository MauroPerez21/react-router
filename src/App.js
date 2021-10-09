
import './css/App.css';
import Nav from './html/Nav';
import About from './html/About';
import Shop from './html/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
          <header className="App-header">
            <h1>Tecnitec</h1>
          </header>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Router>
    </div>
  );
}
const Home = ()=>
{
  return(
    <div>
    <h1>Home Page</h1>
  </div>
  )
  
}

export default App;
