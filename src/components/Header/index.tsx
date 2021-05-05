import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Menu, Typography, Layout, Button, Dropdown, Input } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg'
import style from './Header.module.css'
import { useLanguageSelector } from '../../redux/hooks'
import { Dispatch } from 'redux'
import { LanguageActionTypes, addLanguageAction, changeLanguageAction } from '../../redux/language/languageActions'
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import translation_zh from '../../i18n/zh.json'


export default function AppHeader() {
  const history = useHistory()
  const language = useLanguageSelector(state => state.language)
  const languageList = useLanguageSelector(state => state.languageList)
  const dispatch = useDispatch<Dispatch<LanguageActionTypes>>()
  const { t } = useTranslation()


  const navItem: Array<string> = [
    '旅游首页',
    '周末游',
    '跟团游',
    '自由行',
    '私家团',
    '邮轮',
    '酒店+景点',
    '当地玩乐',
    '主题游',
    '定制游',
    '游学',
    '签证',
    '企业游',
    '高端游',
    '爱玩户外',
    '保险',
  ]

  const languageMenuClickHandler = (e) => {
    if(e.key === 'new') {
      const id = Date.now().toString().slice(-3)
      dispatch(addLanguageAction(`新语言${id}`, `new_lang${id}`))
    }else {
      i18n.changeLanguage(e.key)
      dispatch(changeLanguageAction(e.key))
    }
  }


  return (<div>
    <div className={style['app-header']}>
      {/* top header */}
      <div className={style['top-header']}>
        <div className={style['top-header-inner']}>
          <Typography.Text>让旅游更开心</Typography.Text>
          <Dropdown.Button style={{marginLeft: 15}}
                           overlay={
                             <Menu onClick={ languageMenuClickHandler }>
                               { languageList.map((language) => {
                                 return <Menu.Item key={language.code}>{language.name}</Menu.Item>
                               }) }
                               <Menu.Item key="new">{ t('header.add_new_language') }</Menu.Item>
                             </Menu>
                           }
                           icon={<GlobalOutlined/>}>
            { language === 'zh' ? '中文' : 'English' }
          </Dropdown.Button>
          <Button.Group className={style['button-group']}>
            <Button onClick={() => history.push('register')}>注册</Button>
            <Button onClick={() => history.push('signin')}>登录</Button>
          </Button.Group>
        </div>
      </div>
      {/* top header end */}
      <Layout.Header className={style['main-header']}>
        <span onClick={() => history.replace('/')}>
          <img src={logo} alt="react-ctrip" className={style['App-logo']}/>
          <Typography.Title className={style.title} level={3}>React 旅游网</Typography.Title>
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

// export default AppHeader
