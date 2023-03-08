import React, { useContext } from 'react'
import Dashboard from '../../components/layout/dashboard'
import { BlogRow, LayoutBanner } from '../../components/snippets'
import CardList from './components/CardList'
import { Route, useRouteMatch } from "react-router-dom"
import { Col} from 'react-bootstrap'
import { background } from '../../utils/bgimage'
import Available from '../../components/layout/db/Available'
import {BtnContents, Item} from './components/comps'
import useTimeOut from '../../hooks/useTimeOut'
import { Theme } from '../../components/app'
import { FaBlogger } from 'react-icons/fa'

const LinkedList = () => {
  const Rings = useContext(Theme)
  const [loading, isLoading] = React.useState(true)
  useTimeOut(() => isLoading(false), 1000)
  document.getElementById("title").innerHTML = "tiendas_online | blog"

  const [dashboard, showDashboard] = React.useState(false)
  const handleClick = () => showDashboard((p) => !p);
  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each link */

  const Banner = () => (
    <>
          <div style={background} className="background">
            <LayoutBanner>
                <Route path={`${url}/:ref`}>
                  <Item data={Available} handle={handleClick} />
                </Route>
                <Col md={{ order: "first" }}>
                  <h1><FaBlogger />&nbsp;Blog</h1>
                  <p>¡Compra un Plan y Escala tu Negocio!</p>
                  <BtnContents handleClick={handleClick}/>
                </Col>
              </LayoutBanner>
          </div>
      <BlogRow />
    </>

  )
  return (
    <>
      {loading ?
        <div className="loader_active">
          <Rings color={`#ffad99`} loading={loading} />
        </div> :
        <>
          <Banner />
          <CardList items={Available} />
          <Dashboard
            dashboard={dashboard}
            handleClick={handleClick}
          />
        </>
      }
    </>
  )
}

export default LinkedList;