import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps,  } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18n from 'i18next'
import {Menu, Typography, Layout, Button, Dropdown, Input} from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { GlobalStore } from '../../redux/store'
import { addLanguageAction, changeLanguageAction } from '../../redux/actions/languageActions'
import logo from '../../assets/logo.svg'
import style from './Header.module.css'
import translation_zh from '../../i18n/zh.json'
import { LanguageType } from '../../redux/reducer/languageReducer'


const mapStateToProps = (state:GlobalStore) => {
  return {
    language: state.language,
    languageList: state.languageList,
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    changeLanguageAction(code:LanguageType) {
      const action = changeLanguageAction(code)
      dispatch(action)
    },
    addLanguageAction(name:string, code:LanguageType) {
      const action = addLanguageAction(name, code)
      dispatch(action)
    }
  }
}

type Props = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class AppHeader extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  languageMenuClickHandler = (e) => {
    if(e.key === 'new') {
      const id = Date.now().toString().slice(-3)
      this.props.addLanguageAction(`新语言${id}`, `new_lang${id}`)
    }else {
      i18n.changeLanguage(e.key)
      this.props.changeLanguageAction(e.key)
    }
  }


  render() {
    const { t } = this.props
    return (<div>
      <div className={style['app-header']}>
        {/* top header */}
        <div className={style['top-header']}>
          <div className={style['top-header-inner']}>
            <Typography.Text>{ t('header.slogan') }</Typography.Text>
            <Dropdown.Button style={{marginLeft: 15}}
                             overlay={
                               <Menu onClick={ this.languageMenuClickHandler }>
                                 { this.props.languageList.map((language) => {
                                   return <Menu.Item key={language.code}>{language.name}</Menu.Item>
                                 }) }
                                 <Menu.Item key="new">{ t('header.add_new_language') }</Menu.Item>
                               </Menu>
                             }
                             icon={<GlobalOutlined/>}>
              { this.props.language === 'zh' ? '中文' : 'English' }
            </Dropdown.Button>
            <Button.Group className={style['button-group']}>
              <Button onClick={() => this.props.history.push('register')}>{ t('header.register') }</Button>
              <Button onClick={() => this.props.history.push('signin')}>{ t('header.signin') }</Button>
            </Button.Group>
          </div>
        </div>
        {/* top header end */}
        <Layout.Header className={style['main-header']}>
        <span onClick={() => this.props.history.replace('/')}>
          <img src={logo} alt="react-ctrip" className={style['App-logo']}/>
          <Typography.Title className={style.title} level={3}>{ t('header.title') }</Typography.Title>
          <Input.Search className={style['search-input']} placeholder="请输入旅游目的地，主题，关键字"/>
        </span>
        </Layout.Header>
        <Menu mode="horizontal" className={style['main-menu']}>
          {Object.keys(translation_zh.header).filter(k => !['slogan',
            'add_new_language',
            'title',
            'register',
            'signin',].includes(k)).map((key, index) => <Menu.Item key={index + 1}>{ t('header.'+ key) }</Menu.Item>)}
        </Menu>
      </div>
    </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(AppHeader)))
