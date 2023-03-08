import React from 'react'
import './css/app/app.css';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//COMPONENTS
//ROUTES
import Layout from './components/app'
import Routes from './pages/routes'
//IMPORT REACT-ROUTER-DOM;
import {Route} from 'react-router-dom'

import ReactGA from 'react-ga'
/**
 * Google_Analytics Package Manager
 */
const TRACKING_ID = ""
ReactGA.initialize(TRACKING_ID)

export default function app(){
    return (
          <Layout>
                <Route path='/' exact component={Routes.Intro}/>
                <Route path='/inicio' exact component={Routes.Home}/>
                <Route path='/info' exact component={Routes.Cluster}/>
                <Route path='/blog' component={Routes.Contents}/>
                  <Route path="/bloglist">
                  <Routes.Bloglist />
                </Route>
                <Route path='/projects' component={Routes.Projects}/>
                  <Route path="/api/projects/:id">
                    <Routes.CardItem />
                  </Route>
                  <Route path='/shoppings' component={Routes.Payments}/>
                <Route path="*">
                <Routes.Err404/>
                </Route>
         </Layout>
    
            );
          }


/*
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
*/
