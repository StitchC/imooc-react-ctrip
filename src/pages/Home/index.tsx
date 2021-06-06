import React from 'react'
import { connect } from 'react-redux'
import { GlobalStore } from '../../redux/store'
import { Col, Row, Typography, Spin } from 'antd'
import { WithTranslation, withTranslation } from 'react-i18next'
import style from './HomePage.module.css'
import AppHeader from '../../components/Header'
import AppFooter from '../../components/Footer'
import SideMenu from '../../components/SideMenu'
import Trotting from '../../components/Trotting'
import ProductCollection from '../../components/ProductCollection'
import BusinessPartner from '../../components/BusinessPartner'

import { TouristRoutesData } from '../../request'

import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { fetchRecommendProductListActionCreator } from '../../redux/actions'

const mapStateToProps = (state:GlobalStore) => {
  return {
    productList: state.productData || []
  }
}

const mapDispatchToProps = (dipatch) => {
  return {
    fetchProductData: (beforeFetch?:() => void, afterFetch?:(err:Error | null) => void) => {
      const action = fetchRecommendProductListActionCreator(beforeFetch, afterFetch)
      dipatch(action)
    }
  }
}


interface State {
  loading:boolean
}

type Props = WithTranslation & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>


class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      loading:false,
    }
  }

  componentDidMount() {
    // 获取首页旅游信息数据
    this.props.fetchProductData(
      () => this.changeLoading(true),
      () => this.changeLoading(false)
    )
  }

  changeLoading(status:boolean) {
    this.setState({
      loading: status
    })
  }

  getProductList(index:number):Array<TouristRoutesData> {
    const productList = this.props.productList || []
    return productList[index] && productList[index].touristRoutes
  }

  render() {
    const { t } = this.props
    const { loading, } = this.state
    const { productList } = this.props

    if(loading) {
      return (
        <Spin size="large"
              style={{
                marginTop: 200,
                marginBottom: 200,
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}/>
      )
    }

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
          {
            productList.length === 0 ? <></> :
              <>
                <ProductCollection title={<Typography.Title level={3} type="warning">{ t('home_page.hot_recommended') }</Typography.Title>}
                                   sideImage={sideImage1}
                                   products={this.getProductList(0)}/>
                <ProductCollection title={<Typography.Title level={3} type="danger">{ t('home_page.new_arrival') }</Typography.Title>}
                                   sideImage={sideImage2}
                                   products={this.getProductList(1)}/>
                <ProductCollection title={<Typography.Title level={3} type="success">{ t('home_page.domestic_travel') }</Typography.Title>}
                                   sideImage={sideImage3}
                                   products={this.getProductList(2)}/>
              </>
          }

        </div>
        {/* content end */}
        { <AppFooter /> }
        { <BusinessPartner /> }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home))
