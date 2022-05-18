import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//COMPONENTS
import Nav from './pages/Layout/Navbar'
import Footer from './pages/Layout/Footr'
import About from './pages/contactos'
import Home from './pages/inicio'
import Spinner from './pages/Layout/Lazyloading'
//ROUTES
import Bloglist from './pages/productos/Item'
import ItemList from './pages/productos'
import TopButton from './pages/Layout/TopButton'
import WppButton from './pages/Layout/WppButton'
//IMPORT REACT-ROUTER-DOM;
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import ReactGA from 'react-ga'

//Class APP
// Can be a string as well. Need to ensure each key-value pair ends with ;
class App extends React.Component 
{
  /*
  setGA = () =>{
    ReactGA.initialize('UA-209126814-1');
    ReactGA.pageview('Init page view')
  }
  
  componentDidMount(){
    this.setGA();
  }*/
  render(){
    return (
            <div className="App">
              <Router> 
                <Nav />
                <WppButton />
                <Switch>
                  <Route path='/' exact><Home /></Route>
                  <Route path='/info' component={About}/>
                  <Route path='/blog' component={ItemList}/>
                  <Route path="/bloglist">
                    <Bloglist />
                  </Route>
                  <Route path="/:id">
                    <Spinner />
                  </Route>
                  <Route path="*">
                    <div>Ooops, There is nothing here?</div>
                  </Route>
                </Switch>
                <TopButton />
               <Footer /> 
              </Router>
            </div>
            );
          }
}
export default App;


