import React from 'react'
import { Col, Row, Typography } from 'antd'
import { WithTranslation, withTranslation } from 'react-i18next'
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

class Home extends React.Component<WithTranslation> {
  constructor(props) {
    super(props)
  }

  render() {
    const { t } = this.props
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
          <ProductCollection title={<Typography.Title level={3} type="warning">{ t('home_page.hot_recommended') }</Typography.Title>}
                             sideImage={sideImage1}
                             products={productList1}/>
          <ProductCollection title={<Typography.Title level={3} type="danger">{ t('home_page.new_arrival') }</Typography.Title>}
                             sideImage={sideImage2}
                             products={productList2}/>
          <ProductCollection title={<Typography.Title level={3} type="success">{ t('home_page.domestic_travel') }</Typography.Title>}
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

export default withTranslation()(Home)
