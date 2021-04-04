import React from 'react'
import { Layout, Typography } from "antd";


const AppFooter:React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>版权所有 @ react 旅游网</Typography.Title>
    </Layout.Footer>
  )
}

export default AppFooter
