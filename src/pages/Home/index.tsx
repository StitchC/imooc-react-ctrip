import React from 'react'
import { Col, Row, Typography } from 'antd'
import style from './HomePage.module.css'
import { productList1, productList2, productList3 } from './mockup'
import AppHeader from '../../components/Header'
import AppFooter from '../../components/Footer'
import SideMenu from '../../components/SideMenu'
import Trotting from '../../components/Trotting'
import ProductCollection from '../../components/ProductCollection'
import BusinessPartner from '../../components/BusinessPartner'

import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.App}>
        { <AppHeader /> }
        {/* content */}
        <div className={style['app-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Trotting />
            </Col>
          </Row>
          <ProductCollection title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
                             sideImage={sideImage1}
                             products={productList1}/>
          <ProductCollection title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
                             sideImage={sideImage2}
                             products={productList2}/>
          <ProductCollection title={<Typography.Title level={3} type="success">国内游推荐</Typography.Title>}
                             sideImage={sideImage3}
                             products={productList3}/>
        </div>
        {/* content end */}
        { <AppFooter /> }
        { <BusinessPartner /> }
      </div>
    )
  }
}
