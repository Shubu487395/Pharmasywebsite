import React from 'react';
import video1 from '../../assets/Video1.mp4';
import image1 from '../../assets/Pharmasmart 1.jpg';
import image2 from '../../assets/Pharmasmart 2.jpg';
import image3 from '../../assets/Pharmasmart 3.jpg';
import image4 from '../../assets/Pharmasmart 4.jpg';
import image5 from '../../assets/Pharmasmart 5.jpg';

export default function container( { Playstatus, MeicineCount }) {
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
