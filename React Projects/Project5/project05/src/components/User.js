import React from 'react'


function User(props){
    console.log(props)
    return(
        <div>
             <h1>name:{props.name}</h1>
             <h1>email:{props.email}</h1>
        </div>
    )
}

export default User