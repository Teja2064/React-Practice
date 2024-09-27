import { useState,useEffect,useContext } from "react"
import ExampleContext from "./ExampleContext"
function JumboButtons(){

    const [selectedBtn,setSelectedBtn]=useState()
    let [counter,setCounter]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(counter+1) },1000)},[])
    const myClick=(type)=>{
      setSelectedBtn(type)
      setCounter(counter+1)
      counter=counter+1
     
     console.log(selectedBtn)

     
     
     if(type==='employe'){
     console.log("Add employee button cilcked ")
     }
     else{
       console.log('add Employer button is clicked')
     }
    }
    const valueFromExampleContext=useContext(ExampleContext)
     return(
 
       <div>
        <div>Value From Example context :: {valueFromExampleContext}</div>
       <div>Counter, {counter}</div>
       <button onClick={()=>{myClick("employe")}}> Add Employe</button>
       <button onClick={()=>{myClick("employer")}}> Add Employer</button>
       {selectedBtn === "employe" && 
       <h3>Add empoloye button is clicked</h3>}
       {selectedBtn==="employer" && <h3>Add empoloyer button is clicked</h3>}
       
 
     </div>
     )
 }
 
 export default JumboButtons