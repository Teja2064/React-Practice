import { useState } from "react"
const FormsWithFunction=()=>{
    const[user,setUser]=useState({
        fname:"",
        lname:'',
        email:'',
        phone:'',
    })
    const handleChange=(e)=>{
        setUser((prevProps)=>({
            ...prevProps,
            [e.target.name]:[e.target.value]

        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(" Submit in Functional componnet ")
        console.log(user)


    }
    return(
        <div>
            <h1>Forms with Functions</h1>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <label htmlFor="fname"> First Name</label>
                <input name='fname'type='text' value={user.fname}
                onChange={(e)=>handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="lname"> Last Name</label>
                <input name='lname'type='text' value={user.lname}
                onChange={(e)=>handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="email">  EMAIL   </label>
                <input name='email'type='text' value={user.email}
                onChange={(e)=>handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="phone"> Contact No.</label>
                <input name='phone'type='tel' value={user.phone}
                onChange={(e)=>handleChange(e)}
                />
                <br/><br/>
                <button type='submit'>Submit Form</button>




            </form>
            </div>
    )
}

export default FormsWithFunction