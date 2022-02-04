import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTS
import Nav from './components/Layout/Nav';
import About from './components/About';
import Home from './components/Home';
import Spinner from './components/Layout/Lazyloading';
//ROUTES
import Bloglist from './routes/BlogList';
import ItemList from './routes/ItemList';
//IMPORT REACT-ROUTER-DOM;
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Class APP
// Can be a string as well. Need to ensure each key-value pair ends with ;
class App extends React.Component 
{
  render(){
    return (
            <div className="App">
              <Router>
                <Nav />
                <Switch>
                  <Route path='/' exact><Home /></Route>
                  <Route path='/about' component={About}/>
                  <Route path='/blog' component={ItemList}/>
                  <Route path="/bloglist">
                    <Bloglist />
                  </Route>
                  <Route path="/:id">
                    <Spinner />
                  </Route>
                </Switch>
              </Router>
            </div>
            );
          }
}
export default App;


