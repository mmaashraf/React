import logo from './logo.svg';
import './App.css';

function  Header(){
  return <h1> Hello world!! This is Ashraf! <br></br>  This is the Header react functional component</h1>
}

function App() {
  return ( 
    <div className="App"> 
      This is the starting code for 'App' react component. Below is the Header component.
      <Header/> 
    </div> 
  ); 
}

export default App;
