import React from 'react'
import style from './BusinessPartner.module.css'
import faceBookLogo from '../../assets/images/facebook-partner.png'
import igLogo from '../../assets/images/ig-partner.png'
import microsoftLogo from '../../assets/images/microsoft-partner.png'
import youtubeLogo from '../../assets/images/youtube-partner.png'

const logoData = [
  {
    src: faceBookLogo,
    title: 'facebook'
  },
  {
    src: igLogo,
    title: 'instagrm'
  },
  {
    src: microsoftLogo,
    title: 'microsoft'
  },
  {
    src: youtubeLogo,
    title: 'youtube'
  }
]

const BusinessPartner:React.FC = () => {
  return (
    <ul className={style.container}>
      { logoData.map((logo, index) => {
        return <li className={style['partner-item']}>
          <img className={style['partner-item-image']} src={logo.src} alt={logo.title} />
        </li>
      }) }
    </ul>
  )
}

export default BusinessPartner
