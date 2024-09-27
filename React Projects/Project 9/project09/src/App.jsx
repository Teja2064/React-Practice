import { useState,useRef, useMemo } from 'react'
import {Route,Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmpDetails from './EmpDetails'
import Heading from './pages/Header/Heading'
import MainHeading from './pages/Header/MainHeading'
import JumboButtons from './JumboButtons'
import ButtonsComponent from './pages/ButtonClass'
import ExampleContext from './ExampleContext'
import FormsWithClass from './pages/Forms/FormsWithClass'
import FormsWithFunction from './pages/Forms/FormsWithFunc'
import Home from './pages/HomePage'
import Header from './pages/Header/Header'




function App() {
   var employes=[
    {name:'Teja',
      age:'26',
      exp:1,
      id:1
    },
    {name:'Rebel',
      age:'36',
      exp:5,
      id:2
    },
    {name:'Bhanu',
      age:'46',
      exp:6,
      id:3
    }
   ]
   
   const [msg,setMsg]=useState('Exploring Class Component')
   const inputElement=useRef()
   const focusInput=()=>{
    inputElement.current.focus()
    inputElement.current.value="testing face"
   }
   const [inputValue,setInputValue]=useState('')
   const [number,setNumber]=useState(0)
   const [counter,setCounter]=useState(0)
   const squareNumber=(number)=>{
    console.log("i am in square number")
    return number*number
   }
  //  const squredNumber =squareNumber(number)
  const squredNumber=useMemo(()=>{
    return squareNumber(number)
  },[number])
  
   

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/props' element={<Header/>}></Route>
      {/* <Route path='/class'element={ButtonClass}></Route>
      <Route path='/hooks' element={Heading}></Route>
      <Route path='/forms' element={FormsWithClass}></Route> */}
      </Routes>
      {/* <ul>
        <li>Heading Component(props)</li>
        <li>Class COmponent(Life Cycle methods)</li>
        <li>Hooks</li>
        <li>Forms</li>
        
      </ul> */}
{/*       
      <input type="number"
      value={number}
      onChange={(e)=>setNumber(e.target.value)}>
      </input>
      <div>Output::{squredNumber}</div>
      <button onClick={()=>setCounter(counter+1)}> counter++ </button>
      <div>Counter : {counter}</div>

      <input type='text'
      value={inputValue}
      ref={inputElement}
      onChange={(e)=>setInputValue(e.target.value)}
      />
     
      <button onClick={focusInput}>Focus</button> */}

      {/* <FormsWithClass></FormsWithClass>
      <FormsWithFunction></FormsWithFunction> */}
{/*     
    <MainHeading>     <h1 className='text-aligned-center primary-color'>Exploring react application</h1></MainHeading>
    <Heading type="jeading"/>
    <div>
    <Heading/>
    </div>

    

      <div className='text-aligned-center emp-details'>
        {employes.map((employee)=>
        <EmpDetails emp={employee} key={employee.id}></EmpDetails>)}

      </div>
      {/* <EmpDetails/> */}
      {/* <h1>Functional component</h1>
      
      
      <ExampleContext.Provider value='updated value'>
      <JumboButtons/>
      <h1>Class component</h1>
        <ButtonsComponent msg={msg}></ButtonsComponent>
        </ExampleContext.Provider>
      
      
      <button onClick={()=>setMsg("Exploring life cycles Hooks")}>Change Msg</button>  */}

    </div>
  )
}

export default App
