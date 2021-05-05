import React from 'react'
import {useHistory} from 'react-router-dom'
import {Menu, Typography, Layout, Button, Dropdown, Input} from 'antd'
import {GlobalOutlined} from '@ant-design/icons'
import logo from '../../assets/logo.svg'
import style from './Header.module.css'


export default function AppHeader() {
  const history = useHistory()

  const languageMenu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  )

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


  return (<div>
    <div className={style['app-header']}>
      {/* top header */}
      <div className={style['top-header']}>
        <div className={style['top-header-inner']}>
          <Typography.Text>让旅游更开心</Typography.Text>
          <Dropdown.Button style={{marginLeft: 15}}
                           overlay={languageMenu}
                           icon={<GlobalOutlined/>}>
            语言
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
        {navItem.map((name, index) => <Menu.Item key={index + 1}>{name}</Menu.Item>)}
      </Menu>
    </div>
  </div>)
}

// export default AppHeader
