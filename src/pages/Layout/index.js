
import Items from '../productos/ItemList'
import List from '../productos'
import About from '../contactos'
import Home from '../inicio'
import Spinner from './Lazyloading'
const Pages = [
    //Public pages
    {
        exact: true,
        path: '/',
        component: Home,
        
    },
    {
        exact: false,
        path: '/info',
        component: About,
       
    },
    {
        exact: false,
        path: '/blog',
        component: Items,
    },
    {
        exact: false,
        path: '/bloglist',
        component: List,
    },
    {
        exact: false,
        path: '/:id',
        component: Spinner,
    },
    {
        exact: false,
        path: '*',
        component: `There is nothing here`,
    }, 
    
    //Authenticated pages
]

export default Pages