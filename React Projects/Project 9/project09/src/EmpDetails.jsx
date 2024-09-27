import './EmpDetails.css'

function EmpDetails({emp={
    name:'offlineComponent',
    age:59,
    exp:30
}}){
    // let{name,age,exp}=props.emp
    // let{emp}=props
    let{name,age,exp}=emp
    return(
        <div className="emp">
        <div> <b className='secondary-color'>Name:</b> <span>{name}</span></div>
        <div><b className='secondary-color'>Age:</b><span> {age}</span></div>
        {exp>1 &&
        <div> 
             <b className='secondary-color'>Job Status:</b> 
        <span> confirmed</span>
        
        </div>
}
        </div>
    )

}
// EmpDetails.defaultProps={
//     name:'offlineComponent',
//     age:59,
//     exp:30
// }

export default EmpDetails