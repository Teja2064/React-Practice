import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to='/props'>Heading Component(props)</Link>
                    </li>
                <li>Class COmponent(Life Cycle methods)</li>
                <li>Hooks</li>
                <li>Forms</li>
                </ul>
            
        </div>
    )
}
export default NavBar 