import logo from './logo.svg';
import './App.css';
import Rebel from './components/Jumbo';
import Fits from './components/Fight'
import Smessage from './components/Message'
import Tapp from './components/Cycle';
import Javas from './components/Update';

function App() {
  return (
    <div className="App">
      <Javas/>
      <Tapp/>
{/*  */}
      <Smessage></Smessage>
      

      {/* <Fits name ='bruce' heroName='Batman'>
        <p>this is DCU </p> 
      </Fits>
      <Fits name ='REBEL' heroName='Prabhas'/>
      <Fits name='Salaar' heroName='Deva'/>
      <Rebel name ='bruce' heroName='Batman'>
        <p>this is DCU </p> 
      </Rebel>
      <Rebel name ='REBEL' heroName='Prabhas'/>
      <Rebel name='Salaar' heroName='Deva'/> */}
      
      
    </div>
  );
}

export default App;
