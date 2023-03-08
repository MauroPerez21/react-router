import home from './home'
import contents from './contents'
import cluster from './cluster'
import bloglist from './contents/Item'
import intro from './home/Intro'
import projects from './projects'
import payments from './payments'
import carditem from './projects/components/carditem'
import Err404 from './404'
const routes = {
    Intro:intro,
    Home:home,
    Contents:contents,
    Bloglist:bloglist,
    Cluster:cluster,
    Payments:payments,
    Projects:projects,
    CardItem:carditem,
    Err404:Err404
}
export default routes

