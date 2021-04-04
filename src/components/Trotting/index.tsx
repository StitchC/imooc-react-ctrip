import React from 'react'
import { Image, Carousel } from 'antd'
import style from './Trotting.module.css'

import img1 from '../../assets/images/carousel_1.jpg'
import img2 from '../../assets/images/carousel_2.jpg'
import img3 from '../../assets/images/carousel_3.jpg'


const Trotting:React.FC = () => {
  return (
    <Carousel autoplay className={style.slider}>
      <Image src={img1}/>
      <Image src={img2}/>
      <Image src={img3}/>
    </Carousel>
  )
}

export default Trotting
