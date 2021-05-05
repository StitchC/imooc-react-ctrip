import React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Image, Typography } from 'antd'

interface Props extends RouteComponentProps{
  id:string | number,
  size: 'small' | 'large',
  title: string,
  imgSrc: string,
  price: number | string,
}

const IMG_HEIGHT = {
  large: 285,
  small: 120
}

const IMG_WIDTH = {
  large: 490,
  small: 240,
}

const ProductImage:React.FC<Props> = ({ id, size, title, imgSrc, price, history }) => {
  return (
    <Link to={`detail/${id}`}>
      <Image src={imgSrc} height={IMG_HEIGHT[size]} width={IMG_WIDTH[size]}></Image>
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>￥ {price} 起</Typography.Text>
      </div>
    </Link>
  )
}

export default withRouter(ProductImage)
