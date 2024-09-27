import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeading from './assets/MainHeading'

function App() {
  var employees=[
    {
      name:'teja',
      age:"25",
      exp:5,
      id:1
    },
    {
      name:'Rebel',
      age:"29",
      exp:10,
      id:2
    },
    {
      name:'Prabhas',
      age:"43",
      exp:20,
      id:3
    },
  ]

  return (
    <>
      <div>
        <h1 ClassName='text-align-center primary-color'>Exploring react application</h1>
        <MainHeading></MainHeading>
        <div ClassName='emp-details'>
          {employees.map((employee)=>
          <EmpDetails> emp={employee} key={employee.id}</EmpDetails>)

          }
        </div>



      </div>
      
    </>
  )
}

export default App
