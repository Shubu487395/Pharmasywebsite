// import React from 'react';

import './Medicines.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'


const Medicines = ({medicineData,setMedicineCount,MeicineCount,SetPlaystatus,Playstatus}) => {
  return (
    <div className='medicine'>
      <div className="medicine-text">
        <P>{medicineData.text1}</P>
        <P>{medicineData.text2}</P>
      </div>
      <div className="medicine-explore">
        <p>Meet our services</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="medicine-dot-play">
        <ul className="medicine-dots">
          <li onClick={()=>setMedicineCount(0)} className={MeicineCount===0?"medicine-dot orange":"medicine-dot"}></li>
          <li onClick={()=>setMedicineCount(1)} className={MeicineCount===1?"medicine-dot orange":"medicine-dot"}></li>
          <li onClick={()=>setMedicineCount(2)} className={MeicineCount===2?"medicine-dot orange":"medicine-dot"}></li>
          <li onClick={()=>setMedicineCount(3)} className={MeicineCount===3?"medicine-dot orange":"medicine-dot"}></li>
          <li onClick={()=>setMedicineCount(4)} className={MeicineCount===4?"medicine-dot orange":"medicine-dot"}></li>
        </ul>
        <div className="medicine-play">
          <img onClick={()=>SetPlaystatus(!Playstatus)} src={Playstatus?pause_icon:play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Medicines;
