import React, {useEffect, useState } from 'react'
import './App.css'
import Container from './Components/background/container';
import NavBar from './Components/NavBar/NavBar'; 
import LoginSignup from './Components/LogInSignup/LoginSignup';
import Medicines from './Components/Medicines/Medicines';

const App = ()=> {

  let medicineData = [
    {text1:"Your health",text2:"is our priority"},
    {text1:"As reliable",text2:"as your family"},
    {text1:"Your wellbeing",text2:"is our priority"},
  ] 
  const [MedicineCount,setMedicineCount] = useState(2);
  const [Playstatus,SetPlaystatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setMedicineCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Container Playstatus={Playstatus} MedicineCount={MedicineCount}></Container>
        <LoginSignup></LoginSignup>
        <Medicines
        SetPlaystatus={SetPlaystatus}
        medicineData={medicineData[MedicineCount]}
        MedicineCount={MedicineCount}
        setMedicineCount={setMedicineCount}
        Playstatus={Playstatus} /> 
      </div>
    </>
  )
}

export default App

