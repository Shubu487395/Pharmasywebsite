import React, {useEffect, useState } from 'react'
import './App.css'
// import LoginSignup from "./Components/LogInSignup/LoginSignup";
// import NavBar from "./Components/NavBar/NavBar";
import Background  from './Components/background/Background';
import Container from './Components/container';


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
        < Container></Container>
        <Background Playstatus={Playstatus} MedicineCount={MedicineCount} />
      { /* <NavBar />
       <LoginSignup />
       <Meicine
        SetPlaystatus={SetPlaystatus}
        medicineData={medicineData[MedicineCount]}
        MedicineCount={MedicineCount}
        setMedicineCount={setMedicineCount}
        Playstatus={Playstatus} /> */}
      </div>
    </>
  )
}

export default App

