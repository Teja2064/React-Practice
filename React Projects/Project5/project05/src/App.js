import logo from './logo.svg';
import './App.css';
import User from './components/User'
let userName="thor"
let userEmail="teja@gmail.com"

function App() {
  return (
    <div className='App' >
      <User name={userName} email={userEmail}/>
    </div>
  );
}

export default App;
