export default function Heading({type}){
    if(type ==='jeading'){
    return(
        <h2 className='text-aligned-center secondary-color'>list of all employes </h2>)
    }else{
        return <div><h2 className='text-aligned-center secondary-color'>list of all employe </h2></div>
        
    }
}
