function BLuttons(){

   const [selectedBtn,setSelectedBtn]=useState()
   const myClick=(type)=>{
     setSelectedBtn(type)
    
    console.log(selectedBtn)
    debugger
    if(type==='employe'){
    console.log("Add employee button cilcked ")
    }
    else{
      console.log('add Employer button is clicked')
    }
   }
    return(

      <div>
      
      <button onClick={()=>{myClick("employe")}}> Add Employe</button>
      <button onClick={()=>{myClick("employer")}}> Add Employer</button>
      {selectedBtn === "employe" && 
      <h3>Add empoloye button is clicked</h3>}
      {selectedBtn==="employer" && <h3>Add empoloyer button is clicked</h3>}

    </div>
    )
}

export default BLuttons