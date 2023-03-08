import {Row, Col} from 'react-bootstrap'
import {IoMdAppstore} from 'react-icons/io'
import style from './css/snippets.module.css'
export const ContextRow = ()=>(
    <>
      <Row className={style.bgColor}>
            <Col md={{order:`last`}}>
              <h3><i className={style.colortheme}><IoMdAppstore/></i>&nbsp;Tiendas_online</h3>
              <p>Soluciones <em>integrales</em> del comercio electr&oacute;nico</p>
            </Col>
            <Col md ></Col>
            <Col md={{order:`first`}}>
            <div className={style.wrapper}>
              <ul className={style.bannerList}>
                <li>Dise&ntilde;o Gr&aacute;fico</li>
                <li>Desarrollo de Aplicaciones</li>
                <li>Administraci&oacute;n del Negocio Online</li>
              </ul>
            </div>
            </Col>
          </Row>
          <div className="blank-space"></div>
        </>
  )
export  const Curly = ()=>(
    <div className={style.curly}>
       <div className="row">
         <Col md={8}></Col>
         <Col md={4}><h3><i className={style.colortheme}><IoMdAppstore/></i>&nbsp;Tiendas_online</h3>
         </Col>
       </div>
     </div>
  )
export  const BlogRow = ()=>(
    <>
    <div className={style.bgColor}>
          <Row>
          <Col md={8}></Col>
          <Col md={4}><h3><i className={style.colortheme}><IoMdAppstore/></i>&nbsp;Tiendas_online</h3></Col>
          </Row>
        </div>  
    </>
  )
export const LayoutBanner = ({children})=>(
<div className={style.backgroundText}>
  <Row>
    {children}
  </Row>
</div>
)