import React from 'react'
import { Menu } from 'antd'
import { GiftOutlined } from '@ant-design/icons'
import { sideMenuList } from './mockup'
import style from './SideMenu.module.css'

const SideMenu:React.FC = () => {
  return (
    <Menu mode="vertical" className={style['side-menu']}>
      { sideMenuList.map((m, index) => <Menu.SubMenu key={`side-menu-${index}`} title={<span><GiftOutlined />{m.title}</span>}>
        { m.subMenu.map((sm, index) => <Menu.SubMenu key={`sub-menu-${index}`} title={<span><GiftOutlined />{ sm.title }</span>}>
          { sm.subMenu.map((name, index) => {
            return ( <Menu.SubMenu key={`ssub-menu-${index}`} title={<span>{name}</span>} /> )
          }) }
        </Menu.SubMenu>) }
      </Menu.SubMenu>) }
    </Menu>
  )
}

export default SideMenu
