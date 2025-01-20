import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/Pharmasmart 1.jpg';
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'

const Background = ({ Playstatus, MeicineCount }) => {
  if (Playstatus) {
    return <video src={video1} className='background fade-in' autoPlay loop muted />
  } else if (MeicineCount === 0) {
    return <img src={image1} className='background fade-in' alt="" />
  } else if (MeicineCount === 1) {
    return <img src={image2} className='background fade-in' alt="" />
  } else if (MeicineCount === 2) {
    return <img src={image3} className='background fade-in' alt="" />
  } else if (MeicineCount === 3) {
    return <img src={image4} className='background fade-in' alt="" />
  } else if (MeicineCount === 4) {
    return <img src={image5} className='background fade-in' alt="" />
  } else {
    return null
  }
}

export default Background