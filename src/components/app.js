import React,{createContext} from 'react'
import Header from './layout/header'
import Footer from './layout/footer'
import Rings from '../assets'
import {Provider} from 'react-redux'
import {store} from '../shopping/store'
//import Dashboard from './dashboard'
import {HashRouter as Router, Switch} from 'react-router-dom'
export const Theme = createContext()

export default function App({ children }) {
    return (
        <Theme.Provider value={Rings}>
            <Provider store={store}>
                <Router> 
                    <Header/>
                        <Switch>
                            {children}
                        </Switch> 
                    <Footer />
                </Router>
            </Provider>
        </Theme.Provider>
    )
}
