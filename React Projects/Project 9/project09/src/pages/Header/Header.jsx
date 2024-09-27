import MainHeading from './MainHeading'
import Heading from './Heading'
import NavBar from './navigation'
const Header=()=>{
    return(
        <div>
            <NavBar></NavBar>
            <MainHeading>   
                  <h1 className='text-aligned-center primary-color'>Exploring react application</h1>
            </MainHeading>
            <Heading type="jeading"/>
                
            
        </div>
    )
}
export default Header